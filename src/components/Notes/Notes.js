import { useEffect, useState } from 'react';
import FormNoteCreate from '../FormNoteCreate/FormNoteCreate';
import NotesList from '../NotesList/NotesList';
import SearchForm from '../SearchForm/SearchForm';
import './Notes.css';

function Notes({ addNote, notes, selectedNote, entryData, openEntryData, openFormEntryData, deleteNote, onHandleMWConfirm, markComplete }) {


  const isNoteSelected = Object.keys(selectedNote).length !== 0;



  return (
    <main className="notes">
      <button className='notes__btn' onClick={addNote}>+ Новая заметка</button>
      <div className='tools'>
        <button className='notes__btn' onClick={() => markComplete(selectedNote)} disabled={!isNoteSelected}>{!selectedNote.completed ? 'Пометить как выполненное' : 'Вернуть'}</button>
        <button type='button' className={`notes__btn-delete ${!isNoteSelected && 'notes__btn-delete_disabled'}`} onClick={() => isNoteSelected && onHandleMWConfirm(selectedNote)} disabled={!isNoteSelected} />
      </div>
    <SearchForm />
    <NotesList
    notes={notes}
    selectedNote={selectedNote}
    entryData={entryData}
    openFormEntryData={openFormEntryData}
    // onHandleMWConfirm={onHandleMWConfirm}
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
