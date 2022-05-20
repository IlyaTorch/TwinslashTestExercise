import * as React from 'react';
import List from '@mui/material/List';
import {ListItem, TextField} from '@mui/material';

import AddPageItemList from './AddPageItemList';
import NoteItemList from './NoteItemList';


const NotesMenu = (
    {notes, searchNoteTerm, handleAddPageClick, handleNoteItemClick, handleDeleteNoteClick, handeSearchNoteTextChanged}
) => (
    <List
        sx={{ width: 550 }}
    >
        <ListItem>
            <TextField
                fullWidth={true}
                variant="standard"
                label="Search in your notes"
                value={searchNoteTerm}
                onChange={handeSearchNoteTextChanged}
            />
        </ListItem>

        {
            notes.map(
                (note) => <NoteItemList
                    key={note.id}
                    noteId={note.id}
                    title={note.title}
                    updatedAt={note.updated_at}
                    handleNoteItemClick={handleNoteItemClick}
                    handleDeleteNoteClick={handleDeleteNoteClick}
                />
            )
        }

        <AddPageItemList
            handleAddPageClick={handleAddPageClick}
        />
    </List>
);


export default NotesMenu;
