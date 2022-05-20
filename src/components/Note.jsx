import React, {useEffect} from 'react';
import {Button, Container, Input} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const Note = ({noteId, title="", text="", saveNote}) => {
    const [noteTitle, setNoteTitle] = React.useState(title);
    const [noteText, setNoteText] = React.useState(text);

    useEffect(() => {
        setNoteTitle(title);
        setNoteText(text);
    }, [title, text]);

    const handleSaveNoteClick = () => {
        saveNote(noteId, noteTitle, noteText);
        setNoteTitle("");
        setNoteText("");
    };

    const theme = createTheme({
        palette: {
            black: {
                main: '#000',
            },
        },
    });


    return (
        <Container>
            <Input 
                placeholder="Untiled" 
                sx={{
                    fontSize: 32,
                    fontWeight: "bold",
                    input: {
                        textAlign: "center"
                    }
                }}
                fullWidth={true}
                value={noteTitle}
                onChange={(event => {setNoteTitle(event.target.value)})}
            />
            <Input placeholder="Text"
                multiline={true}
                fullWidth={true}
                rows={15}
                disableUnderline={true}
                sx={{
                    marginTop: 5
                }}
                value={noteText}
                onChange={(event => {setNoteText(event.target.value)})}
            />

            <ThemeProvider theme={theme}>
                <Button color="black" variant="outlined" onClick={handleSaveNoteClick}>
                    Save Note
                </Button>
            </ThemeProvider>

        </Container>
    );
};


export default Note;
