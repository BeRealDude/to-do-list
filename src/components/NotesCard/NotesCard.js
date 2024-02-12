import { useState } from 'react';
import { format, isToday, isThisWeek } from 'date-fns';
import './NotesCard.css';

function NotesCard({ note, openFormEntryData, completed }) {

  const formattedTime = format(note.createdAt, 'HH:mm');
  const formattedDay = format(note.createdAt, 'EEE');
  const formattedDate = format(note.createdAt, 'dd.MM.yyyy');



  return (
    <li className={`notesList-container__card ${completed ? 'completed' : ''}`} key={note.id}  onClick={openFormEntryData}>
      <h2 className='notesList-container__name'>{note.name}</h2>
      <div className='notesList-container__wrapp'>
      <p className='notesList-container__text'>{note.text}</p>
      <span className='notesList-container__date'>{isToday(note.createdAt) ? formattedTime :
           isThisWeek(note.createdAt) ? formattedDay :
           formattedDate}</span>
      </div>
    </li>
  );
}

export default NotesCard;
