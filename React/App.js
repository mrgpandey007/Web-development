// App.js
import React, { useState } from "react";

function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  // Add a new note
  const addNote = () => {
    if (note.trim() === "") return; // prevent empty notes
    setNotes([...notes, note]);
    setNote(""); // clear input after adding
  };

  // Delete a note by index
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>📝 Simple Note-Taking App</h2>
      <input
        type="text"
        placeholder="Enter your note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={{ padding: "10px", width: "250px" }}
      />
      <button onClick={addNote} style={{ padding: "10px", marginLeft: "10px" }}>
        Add Note
      </button>

      <ul style={{ listStyle: "none", marginTop: "20px", padding: 0 }}>
        {notes.map((n, index) => (
          <li
            key={index}
            style={{
              marginBottom: "10px",
              padding: "10px",
              background: "#f4f4f4",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "300px",
              margin: "auto",
            }}
          >
            {n}
            <button
              onClick={() => deleteNote(index)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: "3px",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
