import React from "react";
import NotesList from "./NotesList";
import { getInitialData } from "../utils/index";
import NotesInput from "./NotesInput";
import NoteHeader from "./NoteHeader";

class AppNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, createdAt, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            createdAt: new Date().toISOString(),
            title,
            body,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="note-app__body">
        <NoteHeader />
        <NotesInput addNotes={this.onAddNoteHandler} />
        <h3>Catatan Aktif</h3>
        <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default AppNotes;
