import {CREATE_NOTES_URL, DELETE_NOTE_URL, GET_NOTES_URL, UPDATE_NOTE_URL} from "./apiConstants";


export const getNotes = () => {
    return fetch(GET_NOTES_URL)
        .then((response) => {
            return response.json();
        })
};

export const saveNote = (noteId, title, text) => {
    title = title || "Untiled";

    if (noteId) {
        return updateNote(noteId, title, text);
    } else {
        return createNote(title, text)
    }
};

export const createNote = (title, text) => {
    return fetch(CREATE_NOTES_URL, {
        method: 'POST', headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, text})
    });
};

export const updateNote = (noteId, title, text) => {
    return fetch(UPDATE_NOTE_URL(noteId), {
        method: 'PUT', headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, text})
    });
};

export const deleteNote = (noteId) => {
    return fetch(DELETE_NOTE_URL(noteId), {method: "DELETE"});
};
