import { useSelector } from "react-redux";
import { selectContacts } from "redux/selectors";
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CollectionsSharpIcon from '@mui/icons-material/CollectionsSharp';
import Avatar from '@mui/material/Avatar';
const defaultTheme = createTheme();
function preventDefault(event) {
  event.preventDefault();
}
export const ContactCounter = () => {
  const active = useSelector(selectContacts);

  return (

<ThemeProvider theme={defaultTheme}>
     
      <CssBaseline />
      <Avatar sx={{ mt: 10, bgcolor: 'secondary.main' }}>
            <CollectionsSharpIcon />
          </Avatar>
    <Typography component="p" variant="h4">
         {active.length}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Total contacts
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View all contacts
        </Link>
      </div>
</ThemeProvider>



    // <div>
    //   <p >Total contacts: {active.length}</p>
     
    // </div>
  );
};
