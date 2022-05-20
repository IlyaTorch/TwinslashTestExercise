import * as React from "react";
import {useEffect} from "react";

import {deleteNote, getNotes, saveNote} from "./apiFunctions";
import Note from "./components/Note";
import NotesMenu from './components/NotesMenu';


const App = () => {
    const [notes, setNotes] = React.useState([]);
    const [showedNotes, setShowedNotes] = React.useState([]);
    const [showEmptyNote, setShowEmptyNote] = React.useState(false);
    const [shownNoteIndex, setShownNoteIndex] = React.useState(0);
    const [searchNoteTerm, setSearchNoteTerm] = React.useState("");

    const filterShowedNotes = (notes, searchTerm) =>
        notes.filter(note => note.text.includes(searchTerm) || note.title.includes(searchTerm));

    const handleAddPageClick = () => {
        setShowEmptyNote(true);
    };

    const handleNoteItemClick = (noteIndex) => {
        setShowEmptyNote(false);
        setShownNoteIndex(noteIndex);
    };

    const handleDeleteNoteClick = (noteIndex) => {
        deleteNote(noteIndex).then(() =>
            getNotes().then(notes => {
                setNotes(notes);
                setShowedNotes(filterShowedNotes(notes, searchNoteTerm));
            })
        );
    }

    const handleSaveNoteClick = (noteId, title, text) => {
        saveNote(noteId, title, text).then(() =>
            getNotes().then(notes => {
                setNotes(notes);
                setShowedNotes(filterShowedNotes(notes, searchNoteTerm));
            })
        );
    }

    const handeSearchNoteTextChanged = (event) => {
        const searchTerm = event.target.value;
        setSearchNoteTerm(searchTerm);
        setShowedNotes(filterShowedNotes(notes, searchTerm));
    }

    useEffect(() => {
        getNotes().then(notes => {
            setNotes(notes);
            setShowedNotes(notes);
        });
    }, []);

    const noteToShow = showedNotes.find((note) => note.id === shownNoteIndex);


    return (
        <div className="App" style={{display: "flex", }}>
            <NotesMenu
                notes={showedNotes}
                searchNoteTerm={searchNoteTerm}
                handleAddPageClick={handleAddPageClick}
                handleNoteItemClick={handleNoteItemClick}
                handleDeleteNoteClick={handleDeleteNoteClick}
                handeSearchNoteTextChanged={handeSearchNoteTextChanged}
            />
            {
                !showEmptyNote && noteToShow
                    ? <Note
                        noteId={noteToShow.id}
                        title={noteToShow.title}
                        text={noteToShow.text}
                        saveNote={handleSaveNoteClick}
                    />
                    : <Note
                        saveNote={handleSaveNoteClick}
                    />
            }

        </div>
    );
};


export default App;
