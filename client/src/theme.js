  
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fca8b2',
    },
    secondary: {
      main: '#f5eee9',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    color: {
      default: '#ffffff',
    },
  },
});

export default theme;