import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import { v4 as uuidv4 } from "uuid";
import Notes from "../Notes/Notes";
import { addWeeks, addDays } from "date-fns";
import "./App.css";
import ModalWindowConfirm from "../ModalWindowConfirm/ModalWindowConfirm";

function App() {
  const [notes, setNotes] = useState([]);

  const [selectedNote, setSelectedNote] = useState({});

  const [openEntryData, setOpenEntryData] = useState(false);

  const [isMWConfirm, setMWConfirm] = useState(false);

  function handleMWConfirmOpen(note) {
    setMWConfirm(true);
    setSelectedNote(note);
  }

  function closeAllModalWindows() {
    setMWConfirm(false);
  }

  function openFormEntryData(note) {
    setOpenEntryData(true);
    setSelectedNote(note);
  }

  function addNote() {
    const newNote = { id: uuidv4(), name: "", text: "", createdAt: new Date(), completed: false, important: false };
    openFormEntryData(newNote);
    setSelectedNote(newNote);
    // setNotes([newNote, ...notes]);

  const importantNotes = notes.filter(item => item.important);
  const normalNotes = notes.filter(item => !item.important);

  setNotes([...importantNotes, newNote, ...normalNotes]);
  }



  function entryData(note) {

    const currentDate = new Date();
    // const importantNotes = notes.filter(item => item.important);

    setNotes((n) => {
      const updatedNotes = n.filter(
        (n) => n.id !== note.id && !n.important
      );
      const updatedNotesImportant = n.filter(
        (n) => n.id !== note.id && n.important
      );
      const updatedNote = {
        ...note,
        createdAt: currentDate,
      };

      return !note.important
      ?
      [...updatedNotesImportant, updatedNote, ...updatedNotes]
      :
      [updatedNote, ...updatedNotesImportant, ...updatedNotes]


    });
    setSelectedNote({ ...note, createdAt: currentDate });
  }

  // localStorage.clear()

  function deleteNote() {
    setNotes((state) => state.filter((note) => note.id !== selectedNote.id));
    closeAllModalWindows()
    setSelectedNote({})
    setOpenEntryData(false);
  }


  function markComplete() {
    setNotes((n) => {
      const updatedNotes = n.filter(
        (note) => note.id !== selectedNote.id
      );
      const updatedNote = {
        ...selectedNote,
        completed: !selectedNote.completed,
      };

      return updatedNote.completed
        ? [...updatedNotes, updatedNote]
        : [updatedNote, ...updatedNotes];
    });
    setSelectedNote({});
    setOpenEntryData(false);
  }

function handleChangeImportant(note) {
  setNotes((n) => {
    const updatedNotes = n.filter(
      (n) => n.id !== note.id && !n.important
    );
    const updatedNotesImportant = n.filter(
      (n) => n.id !== note.id && n.important
    );
    const updatedNote = {
      ...selectedNote,
      important: !selectedNote.important,
    };

    return !note.important
      ? [updatedNote, ...updatedNotesImportant, ...updatedNotes]
      : [...updatedNotesImportant, updatedNote, ...updatedNotes];
  });


  setSelectedNote({});
    setOpenEntryData(false);
}


console.log(selectedNote)


  const notesStor = JSON.parse(localStorage.getItem("notes"));

  useEffect(() => {
    if (notesStor !== null && notesStor !== undefined) {
      setNotes(notesStor);
      console.log("Загружено из localStorage:", notesStor);
    }
  }, []);

  useEffect(() => {
    if (notes !== null && notes !== undefined) {
      localStorage.setItem("notes", JSON.stringify(notes));
      console.log("Сохранено в localStorage:", notes);
    }
  }, [notes, setSelectedNote]);


  // localStorage.clear()

  return (
    <>
      <div className="app">
        <Header />
        <Notes
          addNote={addNote}
          notes={notes}
          selectedNote={selectedNote}
          entryData={entryData}
          openEntryData={openEntryData}
          openFormEntryData={openFormEntryData}
          onHandleMWConfirm={handleMWConfirmOpen}
          markComplete={markComplete}
          handleChangeImportant={handleChangeImportant}
        />
        <Footer />
      </div>

      <ModalWindowConfirm
        isOpen={isMWConfirm}
        onClose={closeAllModalWindows}
        onDelete={deleteNote}
        selectedNote={selectedNote}
      />
    </>
  );
}

export default App;
