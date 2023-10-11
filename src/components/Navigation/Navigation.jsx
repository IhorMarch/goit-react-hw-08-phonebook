
import { useAuth } from 'hooks';
import {StyledLink} from './Navigation.styled';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const defaultTheme = createTheme();

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (


<ThemeProvider theme={defaultTheme}>
     
      <CssBaseline />
  
        <Toolbar sx={{ flexWrap: 'wrap' }}>
  
        <nav>
        
            <Typography 
              variant="button"
              color="text.primary"
             
            sx={{ my: 1, mx: 1.5 }}
    
          >
             <StyledLink to ='/'>
              Home
           </StyledLink>
            </Typography >
          
          {isLoggedIn && (
              <Typography
                variant="button"
                color="text.primary"
                
                sx={{ my: 1, mx: 1.5 }}
               
            >
              <StyledLink to ='/contacts'>
                Contacts
           </StyledLink>
              </Typography>
            
          
           
          )}
        
          </nav>
          
        </Toolbar>

   </ThemeProvider>



    // <nav>
    //   <List>
    //     <Item>
    //   <StyledLink  to="/">
    //     Home
    //       </StyledLink >
    //     </Item>
    //     {isLoggedIn && (
    //       <Item>
    //     <StyledLink   to="/contacts">
    //       Contacts
    //         </StyledLink >
    //       </Item>
    //     )}
    //   </List>
    // </nav>
  );
};