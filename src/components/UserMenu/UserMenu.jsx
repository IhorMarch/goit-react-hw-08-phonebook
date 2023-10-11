import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrapper } from './UserMenu.styled';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { Filter } from '../Filter/Filter';

const defaultTheme = createTheme();

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (

    <ThemeProvider theme={defaultTheme}>
<Filter/>
      <CssBaseline />
    <Wrapper>

        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Welcome, {user.name}
          </Typography>
        {/* <Username >Welcome, {user.name}</Username> */}
        
        <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}
          type="button" onClick={() => dispatch(logOut())}>
            Logout
        </Button>
        

      {/* <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button> */}
      </Wrapper>
    </ThemeProvider>
  );
};
