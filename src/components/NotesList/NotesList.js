import { useEffect, useRef } from 'react';
import NotesCard from '../NotesCard/NotesCard';
import './NotesList.css';


function NotesList({ notes, selectedNote, entryData }) {

  // let notes = [];

  // console.log(selectedNote)






  return (
    <div className="notesList">
      <ul className="notesList-container">
      {notes !== null && notes !== undefined && notes.map(note =>
        <NotesCard
        key={note.id}
        // id={note.id}
        // name={note.name}
        note={note}
        // selectedNote={note}
        // id={{id, ...selectedNote[id]}}
        // entryData={() => entryData(note)}
        // openFormEntryData={() => openFormEntryData(note)}
        />
      )}
      <li className="notesList-container__card" >
      <h2 className='notesList-container__name'>заметка1ttttttttttttttttttttttttttttttttttttttttttttt</h2>
      <div className='notesList-container__wrapp'>
      <p className='notesList-container__text'>О заметкиtttttttttttttttttttttttttttttt</p>
      <span className='notesList-container__date'>22.12.2023</span>
      </div>
    </li>
    <li className="notesList-container__card">
      <h2 className='notesList-container__name'>заметка2</h2>
      <div className='notesList-container__wrapp'>
      <p className='notesList-container__text'>О заметкиffffffffffffffffffffffffffffffff</p>
      <span className='notesList-container__date'>22.12.2023</span>
      </div>
    </li>
    <li className="notesList-container__card">
      <h2 className='notesList-container__name'>заметка3fffffffffffffffffffffffffffffffffffffffffff</h2>
      <div className='notesList-container__wrapp'>
      <p className='notesList-container__text'>О за</p>
      <span className='notesList-container__date'>22.12.2023</span>
      </div>
    </li>
    <li className="notesList-container__card">
      <h2 className='notesList-container__name'>3</h2>
      <div className='notesList-container__wrapp'>
      <p className='notesList-container__text'>3</p>
      <span className='notesList-container__date'>22.12.2023</span>
      </div>
    </li>

      </ul>
    </div>
  );
}

export default NotesList;
