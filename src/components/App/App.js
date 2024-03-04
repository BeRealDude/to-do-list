import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import { v4 as uuidv4 } from "uuid";
import Notes from "../Notes/Notes";
import "./App.css";
import ModalWindowConfirm from "../ModalWindowConfirm/ModalWindowConfirm";
import ModalSortingMenu from "../ModalSortingMenu/ModalSortingMenu";

function App() {
  const [notes, setNotes] = useState([]);

  const [originalNotes, setOriginalNotes] = useState([]);

  const [selectedNote, setSelectedNote] = useState({});

  const [openEntryData, setOpenEntryData] = useState(false);

  const [isMWConfirm, setMWConfirm] = useState(false);

  const [isOpenSortingMenu, setOpenSortingMenu] = useState(false);

  const [flagSortNotes, setFlagSortNotes] = useState(false);

  function handleMWConfirmOpen(note) {
    setMWConfirm(true);
    setSelectedNote(note);
  }

  function closeAllModalWindows() {
    setMWConfirm(false);
    setOpenSortingMenu(false);
  }

  function openFormEntryData(note) {
    setOpenEntryData(true);
    setSelectedNote(note);
  }

  function openSortingMenu() {
    setOpenSortingMenu(true);
  }






  function addNote() {
    const newNote = {
      id: uuidv4(),
      name: "",
      text: "",
      createdAt: new Date(),
      completed: false,
      important: false,
    };
    openFormEntryData(newNote);
    setSelectedNote(newNote);

    const importantNotes = notes.filter((item) => item.important && !item.completed);
    const completedNotes = notes.filter((item) => item.completed);
    const normalNotes = notes.filter((item) => !item.important && !item.completed);
    const copyNotes = [...notes]

    if (flagSortNotes === false) {
      setNotes([...importantNotes, newNote, ...normalNotes, ...completedNotes]);
    } else {
      setNotes([newNote, ...copyNotes]);
    }
  }



  function entryData(note) {

    const currentDate = new Date();

    if(flagSortNotes === false) {
      setNotes((n) => {
      const updatedNotes = n.filter(
        (n) => n.id !== note.id && !n.important && !n.completed
      );
      const updatedNotesImportant = n.filter(
        (n) => n.id !== note.id && n.important && !n.completed
      );

      const notesCompleted = n.filter(
        (n) => n.id !== note.id && n.completed
      );
      const updatedNote = {
        ...note,
        createdAt: currentDate,
      };

      return !note.important
      ?
      [...updatedNotesImportant, updatedNote, ...updatedNotes, ...notesCompleted]
      :
      [updatedNote, ...updatedNotesImportant, ...updatedNotes, ...notesCompleted]
    });
    setSelectedNote({ ...note, createdAt: currentDate });
  } else {

    const updatedNotes = notes.filter(
      (n) => n.id !== note.id
    );
      const arrUpdated = [...updatedNotes, { ...note, createdAt: currentDate }]
    setNotes(arrUpdated)
    handleChangeSort(true, arrUpdated)
    setSelectedNote({ ...note, createdAt: currentDate });
  }
}



  function deleteNote() {
    setNotes((state) => state.filter((note) => note.id !== selectedNote.id));
    setOriginalNotes((state) => state.filter((note) => note.id !== selectedNote.id));
    closeAllModalWindows()
    setSelectedNote({})
    setOpenEntryData(false);
  }


  function markComplete(note) {
    if (flagSortNotes === false) {
      setNotes((n) => {
        const updatedNotes = n.filter((n) => n.id !== note.id && !n.important && !n.completed);
        const notesImportant = n.filter((n) => n.id !== note.id && n.important && !n.completed);
        const notesCompleted = n.filter((n) => n.id !== note.id && n.completed);

        const updatedNote = {
          ...selectedNote,
          completed: !selectedNote.completed,
        };
        return !note.completed
          ? [...notesImportant, ...updatedNotes, updatedNote, ...notesCompleted]
          : [...notesImportant, updatedNote, ...updatedNotes, ...notesCompleted]

      });
    } else {
      const updatedNotes = notes.filter((n) => n.id !== note.id);
      const updatedNote = {
        ...selectedNote,
        completed: !selectedNote.completed,
      };
      const arrUpdated = [...updatedNotes, updatedNote];
      setNotes(arrUpdated);
      handleChangeSort(true, arrUpdated);
    }

    setSelectedNote({});
    setOpenEntryData(false);
  }

function handleChangeImportant(note) {

    if(flagSortNotes === false) {
      setNotes((n) => {
    const updatedNotes = n.filter(
      (n) => n.id !== note.id && !n.important && !n.completed
    );
    const updatedNotesImportant = n.filter(
      (n) => n.id !== note.id && n.important && !n.completed
    );

    const notesCompleted = n.filter((n) => n.id !== note.id && n.completed);

    const updatedNote = {
      ...selectedNote,
      important: !selectedNote.important,
    };
    return !note.important
      ? [updatedNote, ...updatedNotesImportant, ...updatedNotes, ...notesCompleted]
      : [...updatedNotesImportant, updatedNote, ...updatedNotes, ...notesCompleted];
  })
} else {
  const updatedNotes = notes.filter(
    (n) => n.id !== note.id
  );
  const updatedNote = {
    ...selectedNote,
    important: !selectedNote.important,
  };
  const arrUpdated = [...updatedNotes, updatedNote]
    setNotes(arrUpdated)
    handleChangeSort(true, arrUpdated)
}


  setSelectedNote({});
    setOpenEntryData(false);
}


console.log(selectedNote)



  useEffect(() => {
    if(flagSortNotes === false)
    setOriginalNotes([...notes]);
  }, [notes, flagSortNotes]);


function sortNotesAlphabet(arr) {
  arr.sort((a, b) => {
    const nameA = String(a.name || a.text).toLowerCase();
    const nameB = String(b.name || b.text).toLowerCase();
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
  })
}


function handleChangeSort(state, arr) {
  if (state === true) {
    console.log(state);
    const sortNotes = [...arr];
    const normalNotes = sortNotes.filter((note) => !note.completed);
    const completedNotes = sortNotes.filter((note) => note.completed);
    sortNotesAlphabet(normalNotes)
    sortNotesAlphabet(completedNotes)
      setNotes([...normalNotes, ...completedNotes]);
    closeAllModalWindows();
  }
}

function sortAlphabetBtn() {
  console.log('Сортирует')
  setFlagSortNotes(true);
  handleChangeSort(true, notes);
}

function resetSorting() {
  console.log("Возвращает прежний порядок");
  setFlagSortNotes(false);

  const resetEditedNotes = notes.map((note) => {
    return selectedNote.id === note.id
      ? { ...note, name: selectedNote.name, text: selectedNote.text }
      : note;
  });

  const updatedNotes = originalNotes.map((note) => {
    const editedNote = resetEditedNotes.find(
      (editedNote) => editedNote.id === note.id
    );
    return editedNote ? editedNote : note;
  });

  const newNotes = resetEditedNotes.filter(
    (note) => !originalNotes.some((originalNote) => originalNote.id === note.id)
  );

  const updatedImportantNotes = updatedNotes.filter((note) => note.important && !note.completed);
  const updatedCompletedNotes = updatedNotes.filter((note) => note.completed);
  const updatedNormalNotes = updatedNotes.filter((note) => !note.important && !note.completed);

  setNotes([...updatedImportantNotes, ...newNotes, ...updatedNormalNotes, ...updatedCompletedNotes]);
}


console.log(notes)



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
          openSortingMenu={openSortingMenu}
          resetSorting={resetSorting}
          flagSortNotes={flagSortNotes}
        />
        <Footer />
      </div>

      <ModalWindowConfirm
        isOpen={isMWConfirm}
        onClose={closeAllModalWindows}
        onDelete={deleteNote}
        selectedNote={selectedNote}
      />

      <ModalSortingMenu
      isOpen={isOpenSortingMenu}
      closeAllModalWindows={closeAllModalWindows}
      sortAlphabetBtn={sortAlphabetBtn}
      />
    </>
  );
}

export default App;
