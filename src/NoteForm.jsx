import React, { useState } from "react";
import { API } from "aws-amplify";
import { createNote as createNoteMutation } from "./graphql/mutations";
const initialFormState = { name: "", description: "" };

export default function NoteForm(props) {
  const [formData, setFormData] = useState(initialFormState);

  async function createNote() {
    if (!formData.name || !formData.description) return;

    await API.graphql({
      query: createNoteMutation,
      variables: { input: formData },
    });

    // if (formData.image) {
    //   const image = await Storage.get(formData.image);
    //   formData.image = image;
    // }

    props.setNotes([...props.notes, formData]);
    setFormData(initialFormState);
  }

  // async function onChange(e) {
  //   const file = e.target.files[0];
  //   if (!file) return;

  //   setFormData({ ...formData, image: file.name });
  //   await Storage.put(file.name, file);

  //   props.fetchNotes();
  // }

  return (
    <>
      <input
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Note name"
        value={formData.name}
      />
      <input
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        placeholder="Note description"
        value={formData.description}
      />

      <input
        onChange={(e) =>
          setFormData({ ...formData, editors: [e.target.value] })
        }
        placeholder="haufhun"
        value={formData.editors}
      />

      {/* <input type="file" onChange={onChange} /> */}
      <button onClick={createNote}>Create Note</button>
    </>
  );
}
