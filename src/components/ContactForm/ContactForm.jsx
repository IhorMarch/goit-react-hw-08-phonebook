
import React from 'react';
import Notiflix from 'notiflix';
// import { Form, Label, Button, Input,Title} from './ContactForm.styled';
import { addContact } from "../../redux/operations";
// Импортируем хук
import { useDispatch,useSelector } from "react-redux";
import { selectContacts} from "../../redux/selectors";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PermContactCalendarSharpIcon from '@mui/icons-material/PermContactCalendarSharp';
const defaultTheme = createTheme();
export const ContactForm = () => { 

   // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

    const handleSubmit = event => {
        event.preventDefault();
      const form = event.target;

        
    // Вызываем генератор экшена и передаем текст задачи для поля payload
        // Отправляем результат - экшен создания задачи
        
        const newContact = {
            name:form.elements.name.value,
            number: form.elements.number.value,
          
        }
    const {name} = newContact;
     if (contacts.find(newContact => newContact.name.toLowerCase() === name.toLowerCase())) {
      Notiflix.Notify.failure(`${newContact.name} is already in contacts`);
    }
else{ dispatch(addContact(newContact));}


     form.reset();
    }
   
    return (

        <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: -17,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PermContactCalendarSharpIcon />
          </Avatar>
          <Typography component="h1" variant="h5" >
          Add Your Contact
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="number"
              label="Phone"
              type="tel"
              id="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Contact
            </Button>
        
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
                
        // <Form onSubmit={handleSubmit}>
        //     <Title>Add Your contact</Title>
        //         <Label>
        //             Name
        //         <Input
        //             type="text"
        //             name="name"
                   
        //             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        //             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        //             required
        //             /></Label>
               
        //    <Label>
        //      Number
        //    <Input
        //        type="tel"
        //        name="number"
         
        //        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        //        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        //        required
        //             />
        //         </Label>


        //         <Button type="submit">Add contact</Button>
        //     </Form>
        );


}
