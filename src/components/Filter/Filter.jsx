import {Wrapper} from './Filter.styled';
import { useDispatch } from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// Импортируем генератор экшена
import { setStatusFilter } from "../../redux/filterSlice";

const defaultTheme = createTheme();

export const Filter = () =>{

// Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
    
    
    const changeFilter = event => {
         event.preventDefault();
        const form = event.target;
       
        const filter = form.value
     
        dispatch(setStatusFilter(filter))
        }
  

  return (
    <ThemeProvider theme={defaultTheme}>

     <Wrapper>
      <IconButton>
          <SearchIcon />
        </IconButton>
        <TextField
           style={{ width: 171}} 
          id="filled-search"
          label="Find Your contact"
          type="search"
          variant="standard"
          onChange={changeFilter}
        />
          </Wrapper>

      </ThemeProvider>


          /* // <Label>
          //       <Title>Find contacts by name</Title>
          //       <Input type="text" name ='filter' onChange={changeFilter} />
          //   </Label> */
 
    )
};