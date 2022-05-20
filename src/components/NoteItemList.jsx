import * as React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ArticleOutlined, DeleteOutlined } from '@mui/icons-material';
import { ListItem, ListItemButton, Typography } from '@mui/material';


const  NoteItemList = ({ noteId, title , updatedAt, handleNoteItemClick, handleDeleteNoteClick  }) => {
    const date = new Date(updatedAt);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const displayedDate = `${month} ${day}`;

    return (
        <ListItem>
            <ListItemButton onClick={() => handleNoteItemClick(noteId)}>
                <ListItemIcon>
                    <ArticleOutlined />
                </ListItemIcon>
                <ListItemText
                    primary={(
                        <Typography variant="body1" width="160px">
                            {title}
                        </Typography>
                    )}
                />
                <ListItemText
                    primary={(
                        <Typography variant="body2">
                            {displayedDate}
                        </Typography>
                    )}
                />
            </ListItemButton>
            <ListItemButton>
                <DeleteOutlined onClick={() => handleDeleteNoteClick(noteId)}/>
            </ListItemButton>
        </ListItem>
    );
};


export default NoteItemList;
