import { useDispatch } from "react-redux";
import { deleteContact} from "../../redux/operations";
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';


export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));
 
  return (
<Box sx={{ flexGrow: 1, maxWidth: 752 }}>
  <Grid item xs={12} md={6}>
          
      
            <List >
             
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <ContactPhoneIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={contact.name + ' : ' + contact.number}              
                  />
                </ListItem>,
           
            </List>
      
        </Grid>
</Box>


    // <Wrapper >
     
    // <Text> {contact.name + ' : ' + contact.number}</Text>
    //   <Button onClick={handleDelete}>
    //     <MdClose size={24} />
    //   </Button>
    // </Wrapper>
  );
};
