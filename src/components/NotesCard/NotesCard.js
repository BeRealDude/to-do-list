import { useState } from 'react';
import { format, isToday, isThisWeek } from 'date-fns';
import './NotesCard.css';

function NotesCard({ note, openFormEntryData, completed, important }) {

  const formattedTime = format(note.createdAt, 'HH:mm');
  const formattedDay = format(note.createdAt, 'EEE');
  const formattedDate = format(note.createdAt, 'dd.MM.yyyy');
  

  return (
    <li className={`notesList-container__card ${completed ? 'completed' : ''}`} key={note.id}  onClick={openFormEntryData}>
      <div className='notesList-container__title'>
        <h2 className='notesList-container__name'>{note.name ? note.name : note.text ? note.text : 'Без названия' }</h2>
      {important ? <span className='notesList-container__important'>&#9733;</span> : ''}
      </div>
      <div className='notesList-container__wrapp'>
      <p className='notesList-container__text'>{note.name ? note.text : ''}</p>
      <span className='notesList-container__date'>{isToday(note.createdAt) ? formattedTime :
           isThisWeek(note.createdAt) ? formattedDay :
           formattedDate}</span>
      </div>
    </li>
  );
}

export default NotesCard;
