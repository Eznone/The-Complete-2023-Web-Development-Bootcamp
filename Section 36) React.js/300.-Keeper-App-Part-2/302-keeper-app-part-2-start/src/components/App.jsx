import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createNote(noteItem) {
  return (
    <Note key={noteItem.id} title={noteItem.title} content={noteItem.content} />
  );
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNote)}
      <Note />
      <Footer />
    </div>
  );
}

export default App;
