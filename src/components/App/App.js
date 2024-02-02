import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

import { v4 as uuidv4 } from 'uuid';

import './App.css';


function App() {





  const [notes, setNotes] = useState([]);

  const [selectedNote, setSelectedNote] = useState();
    // const [newNotes, setNewNotes] = useState([]);

  const [openEntryData, setOpenEntryData] = useState(false);



  function addNote() {


    setOpenEntryData(true);
  }

  function entryData(note) {

    setNotes([note, ...notes]);
    // setNotes([note, ...notes]);
    // setSelectedNote(note);

  }
  console.log(notes)



  // function openFormEntryData(note) {
  //   setOpenEntryData(true);
  //   // setSelectedNote(note);

  // }

  const notesStor = JSON.parse(localStorage.getItem("notes"));

  useEffect(() => {



    if (notesStor !== null && notesStor !== undefined) {
      setNotes(notesStor);
      console.log("Загружено из localStorage:", notesStor);
    }

}, []);


  useEffect(() => {
    if(notes !== null && notes !== undefined) {
    localStorage.setItem("notes", JSON.stringify(notes));
    console.log("Сохранено в localStorage:", notes);
    }

  }, [notes]);









  return (
    <div className="app">
    <Header />
    <Main
    addNote={addNote}
    notes={notes}
    selectedNote={selectedNote}
    entryData={entryData}
    openEntryData={openEntryData}
    // openFormEntryData={openFormEntryData}
    />
    <Footer />
    </div>
  );
}

export default App;
