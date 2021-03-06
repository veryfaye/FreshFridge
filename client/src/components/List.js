import React, { useState } from "react";
import Item from "./Item";

export default function List() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e, notes, setNotes, input, setInput) => {
    e.preventDefault();
    const id = notes.length ? notes[notes.length - 1].id + 1 : 0;
    setNotes([...notes, { id: id, message: input }]);
    setInput("");
  };

  const deleteNote = (id, notes, setNotes) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div>
          <h2>Add items to your grocery list!</h2>
          <form
            onSubmit={(e) => handleSubmit(e, notes, setNotes, input, setInput)}
          >
            <input onChange={(e) => setInput(e.target.value)} value={input} />
            <button id="addButton" className="btn btn-success">
              ADD
            </button>

            {notes.map((note) => (
              <Item
                id={note.id}
                message={note.message}
                deleteNote={(id) => deleteNote(id, notes, setNotes)}
              />
            ))}
          </form>
          <hr />
        </div>
      </div>
    </div>
  );
}
