import { useEffect, useRef } from 'react';
import NotesCard from '../NotesCard/NotesCard';
import './NotesList.css';


function NotesList({ notes, selectedNote, openFormEntryData, onHandleMWConfirm }) {

  // let notes = [];

  // console.log(selectedNote)






  return (
    <div className="notesList">
      <ul className="notesList-container">
      {notes !== null && notes !== undefined && notes.map(note =>
        <NotesCard
        key={note.id}
        note={note}
        openFormEntryData={() => openFormEntryData(note)}
        // onHandleMWConfirm={() => onHandleMWConfirm(note)}
        />
      )}
      </ul>
    </div>
  );
}

export default NotesList;
