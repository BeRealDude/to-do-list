import { useEffect, useRef } from 'react';
import NotesCard from '../NotesCard/NotesCard';
import './NotesList.css';


function NotesList({ notes, selectedNote, openFormEntryData }) {

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
        completed={note.completed}
        important={note.important}
        selectedNote={selectedNote}
        />
      )}
      </ul>
    </div>
  );
}

export default NotesList;
