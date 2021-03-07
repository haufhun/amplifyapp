/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($owner: String!, $editors: String!) {
    onCreateNote(owner: $owner, editors: $editors) {
      id
      name
      description
      owner
      editors
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($owner: String!, $editors: String!) {
    onUpdateNote(owner: $owner, editors: $editors) {
      id
      name
      description
      owner
      editors
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($owner: String!, $editors: String!) {
    onDeleteNote(owner: $owner, editors: $editors) {
      id
      name
      description
      owner
      editors
      createdAt
      updatedAt
    }
  }
`;
