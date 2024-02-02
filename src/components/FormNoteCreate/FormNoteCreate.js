import { useEffect, useRef, useState } from "react";
import "./FormNoteCreate.css";
import { v4 as uuidv4 } from 'uuid';

function FormNoteCreate({ entryData, openEntryData, selectedNote, notes }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const nameTextAreaRef = useRef(null);
  const textTextAreaRef = useRef(null);



useEffect(() => {
  if(selectedNote){
    setName(selectedNote.name);
    setText(selectedNote.text);
    autoResize(nameTextAreaRef);
    autoResize(textTextAreaRef);
  }
}, [selectedNote]);


useEffect(() => {
  autoResize(nameTextAreaRef);
}, [name]);

useEffect(() => {
  autoResize(textTextAreaRef);
}, [text]);



const handleNameChange = (e) => {
  setName(e.target.value);
  entryData({ ...selectedNote, name: e.target.value });
};



const handleTextChange = (e) => {
  setText(e.target.value);
  entryData({ ...selectedNote, text: e.target.value });
};


const autoResize = (textAreaRef) => {
  if (textAreaRef.current) {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = (textAreaRef.current.scrollHeight) + "px";
  }
};

  return (
    <section className="noteCreate">
      <div className="noteCreate-container">
        {openEntryData ? (
          <form
            className="form-create"
            id="form-create"
            name="form-create"
            noValidate
            onSubmit={(e) => e.preventDefault()}
          >
            <textarea
              ref={nameTextAreaRef}
              className="form-create__input"
              value={name || ""}
              onChange={handleNameChange}
              type="text"
              name="form-create-name"
              id="form-create-name"
              placeholder="Название"
              onInput={autoResize}
            />
            <textarea
              ref={textTextAreaRef}
              className="form-create__input"
              value={text || ""}
              onChange={handleTextChange}
              type="text"
              name="form-create-text"
              id="form-create-text"
              placeholder="Текст"
              autoFocus
            />
          </form>
        ) : (
          <span>Заметка не выбрана</span>
        )}
      </div>
    </section>
  );
}

export default FormNoteCreate;
