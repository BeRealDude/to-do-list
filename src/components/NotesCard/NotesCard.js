import { useState } from 'react';
import './NotesCard.css';

function NotesCard({ note, openFormEntryData, id }) {

// const dateCreate = new Date()
// const dateCreateNote = {
//   hours: dateCreate.getHours(),
//   minutes: dateCreate.getMinutes(),
//   day: dateCreate.getDay(),
//   month: dateCreate.getMonth() + 1,
//   year: dateCreate.getFullYear()
// }


// const createdAt = Date.now()

// const currentTime = Date.now();
//   const timeDiff = currentTime - createdAt;
//   const oneDay = 24 * 60 * 60 * 1000;

//   let formattedTime;

//   if (timeDiff < oneDay) {
//     const date = new Date(createdAt);
//     const hours = date.getHours();
//     const minutes = date.getMinutes();

//     formattedTime = `${hours}:${minutes}`;
//   } else {
//     const date = new Date(createdAt);
//     const day = date.getDate();
//     const month = date.getMonth() + 1;
//     const year = date.getFullYear();

//     formattedTime = `${day}/${month}/${year}`;
//   }


const [creationTime, setCreationTime] = useState(new Date()); // время создания задачи

  // функция проверки, прошло ли уже 24 часа
  const shouldDisplayDate = () => {
    const currentTime = new Date();
    const timeDifference = currentTime - creationTime;
    const hoursPassed = timeDifference / (1000 * 60 * 60);
    return hoursPassed >= 24;
  };

  // функция форматирования времени
  const formatTime = () => {
    if (shouldDisplayDate()) {
      return creationTime.toLocaleString("default", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
    } else {
      return creationTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      });
    }
  };


  return (
    <li className="notesList-container__card" key={note.id}  onClick={openFormEntryData}>
      <h2 className='notesList-container__name'>{note.name}</h2>
      <div className='notesList-container__wrapp'>
      <p className='notesList-container__text'>{note.text}</p>
      <span className='notesList-container__date'>{formatTime()}</span>
      </div>
    </li>
  );
}

export default NotesCard;
