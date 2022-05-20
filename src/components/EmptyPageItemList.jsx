import * as React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton } from '@mui/material';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';


const EmptyPageItemList = ({handleAddPageClick}) => (
    <ListItemButton sx={{ pl: 4 }} onClick={handleAddPageClick}>
        <ListItemIcon>
            <InsertDriveFileOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Empty page" />
    </ListItemButton>
);


export default EmptyPageItemList;
