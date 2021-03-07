import React from "react";
import { API } from "aws-amplify";
import { deleteNote as deleteNoteMutation } from "./graphql/mutations";

export default function NotesList(props) {
  async function deleteNote(id) {
    const newNotesArray = props.notes.filter((note) => note.id !== id);

    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });

    props.setNotes(newNotesArray);
  }

  return (
    <div style={{ marginBottom: 30 }}>
      {props.notes.map((note) => (
        <div key={note.id || note.name}>
          <h2>{note.name}</h2>
          <p>{note.description}</p>
          {/* {note.image && <img src={note.image} style={{ width: 400 }} alt="" />} */}
          <button onClick={() => deleteNote(note.id)}>Delete Note</button>
        </div>
      ))}
    </div>
  );
}
