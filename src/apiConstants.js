export const ORIGIN_URL = "http://0.0.0.0:8000";
export const GET_NOTES_URL = `${ORIGIN_URL}/notes`;
export const CREATE_NOTES_URL = `${ORIGIN_URL}/notes/`;
export const UPDATE_NOTE_URL = (noteId) => `${ORIGIN_URL}/notes/${noteId}`;
export const DELETE_NOTE_URL = (noteId) => `${ORIGIN_URL}/notes/${noteId}`;
