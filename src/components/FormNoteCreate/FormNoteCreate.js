import { useEffect, useState } from "react";
import "./FormNoteCreate.css";
import { v4 as uuidv4 } from 'uuid';

function FormNoteCreate({ entryData, openEntryData, selectedNote }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  // const [values, setValues] = useState({});

  // const handleChangeName = (e) => {
  //   setName(e.target.value);
  // };

  // const handleChangeText = (e) => {
  //   setText(e.target.value);
  // };




  // useEffect(() => {
  //   if (selectedNote) {
  //     // setValues(selectedNote);
  //     setName(selectedNote.name)
  //     setText(selectedNote.text)
  //   }
  // }, [openEntryData]);

// console.log(selectedNote)

  function handleSubmit(e) {
    e.preventDefault();
    entryData({
      name: name,
      text: text,
      id: uuidv4()
    });
    setName('')
    setText('')
    // console.log(selectedNote.id)

  }

  return (
    <section className="noteCreate">
      <div className="noteCreate-container">

        {openEntryData ? <form
          className="form-create"
          id="form-create"
          name="form-create"
          noValidate
          onSubmit={handleSubmit}
        >
          <input
            className="form-create__input"
            value={name || ""}
            onChange={e => setName(e.target.value)}
            type="text"
            name="form-create-name"
            id="form-create-name"
            // required
            placeholder="Название"
          />
          <input
            className="form-create__input"
            value={text || ""}
            onChange={e => setText(e.target.value)}
            type="text"
            name="form-create-text"
            id="form-create-text"
            // required
            placeholder="Текст"
          />
          <button className="form-create__btn" type="submit">Submit</button>
        </form> : <span>Заметка не выбрана</span>}
      </div>
    </section>
  );
}

export default FormNoteCreate;
