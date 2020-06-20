import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import Content from '../../views/supplier/Content';
import NavigationBar from '../../components/supplier/NavigationBar'
import Footer from '../../components/Footer'

const useStyles = makeStyles((theme) => ({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
}));

// const styles = {
//   root: {
//     display: 'flex',
//     minHeight: '100vh',
//   },
//   drawer: {
//     [theme.breakpoints.up('sm')]: {
//       width: drawerWidth,
//       flexShrink: 0,
//     },
//   },
//   app: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   main: {
//     flex: 1,
//     padding: theme.spacing(6, 4),
//     background: '#eaeff1',
//   },
//   footer: {
//     padding: theme.spacing(2),
//     background: '#eaeff1',
//   },
// };

function Paperbase(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
      <div className={classes.root}>
        <CssBaseline />
        <div className={classes.app}>
          {/* <Header onDrawerToggle={handleDrawerToggle} /> */}
          <NavigationBar/>
          <main className={classes.main}>
            <Content />
          </main>
        </div>
      </div>
    
  );
}


export default Paperbase;