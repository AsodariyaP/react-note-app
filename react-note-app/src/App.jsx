import React, { useState } from 'react';
import Note from './components/Note';
import './App.css'

function App() {

  const [notes, setNotes] = useState([
    { id: 1, text: 'Sample Note 1' },
    { id: 2, text: 'Sample Note 2' },
  ]);

  return (
    <div className="App p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">React Note App</h1>
      {notes.map((note) => (
        <Note key={note.id} text={note.text} />
      ))}
    </div>
  );
}

export default App
