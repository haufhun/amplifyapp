import React, { useState, useEffect } from "react";
import "./App.css";
import NoteForm from "./NoteForm";
import NotesList from "./NotesList";

import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { listNotes } from "./graphql/queries";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    // const notesFromAPI = apiData.data.listNotes.items;

    // await Promise.all(
    //   notesFromAPI.map(async (note) => {
    //     if (note.image) {
    //       const image = await Storage.get(note.image);
    //       note.image = image;
    //     }

    //     return note;
    //   })
    // );

    setNotes(apiData.data.listNotes.items);
  }

  return (
    <div className="App">
      <h1>My Notes App</h1>

      <NoteForm notes={notes} setNotes={setNotes} fetchNotes={fetchNotes} />

      <NotesList notes={notes} setNotes={setNotes} />

      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
