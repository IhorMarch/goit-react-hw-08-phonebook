import { NavLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

const defaultTheme = createTheme();


export const AuthNav = () => {
  return (


    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <NavLink to="/register">
             <Button  variant="outlined" sx={{ my: 1, mx: 1.5,  }}>
            Register
            </Button>
          </NavLink>
          <NavLink  to="/login">
          <Button  variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
            </Button>
          </NavLink>
        </Toolbar>
</ThemeProvider>

    // <div>
    //   <NavLink to="/register">
    //     Register
    //   </NavLink>
    //   <NavLink  to="/login">
    //     Log In
    //   </NavLink>
    // </div>
  );
};
