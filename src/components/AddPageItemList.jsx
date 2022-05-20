import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import EmptyPageItemList from './EmptyPageItemList';
import { AddBoxOutlined } from '@mui/icons-material';


const AddPageItemList = ({handleAddPageClick}) => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };


    return (
        <List>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <AddBoxOutlined />
                </ListItemIcon>
                <ListItemText primary="Add page" />
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <EmptyPageItemList handleAddPageClick={handleAddPageClick}/>
                </List>
            </Collapse>
        </List>
    );
};


export default AddPageItemList;
