import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.note}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
