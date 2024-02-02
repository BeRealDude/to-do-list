import { useEffect, useState } from 'react';
import FormNoteCreate from '../FormNoteCreate/FormNoteCreate';
import NotesList from '../NotesList/NotesList';
import SearchForm from '../SearchForm/SearchForm';
import './Notes.css';

function Notes({ addNote, notes, selectedNote, entryData, openEntryData, openFormEntryData }) {




  return (
    <main className="notes">
      <button className='notes__btn' onClick={addNote} >+ Новая заметка</button>
    <SearchForm />
    <NotesList
    notes={notes}
    selectedNote={selectedNote}
    entryData={entryData}
    openFormEntryData={openFormEntryData}
    />
    <FormNoteCreate
    entryData={entryData}
    openEntryData={openEntryData}
    selectedNote={selectedNote}
    notes={notes}
    />
    </main>
  );
}

export default Notes;
