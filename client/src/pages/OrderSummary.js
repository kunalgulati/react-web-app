import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';


import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

// Template Based on@ https://dribbble.com/shots/5933374-The-bag/attachments

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  temp: theme.zIndex.drawer + 1,
  // theme.zIndex.drawer + 1
  orderDrawerTopText: {
    margin: '5%'
  },
  drawerPaymentText: {
    margin: '5%',
    marginTop: '50%'
  }
}));

export default function OrderSummary() {
  const classes = useStyles();


  return (
    <React.Fragment>
      <CssBaseline />
      <NavigationBar className={classes.temp} />

      <main className={classes.content}>
        {/* Add Content  */}
      </main>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right">
        {/* Order Box Title */}
        <Typography align="center" variant="subtitle1" className={classes.orderDrawerTopText}>Items in your Order</Typography>

        <Divider />
        {/* Payment Text */}
        <Typography align="center" variant="subtitle2" className={classes.drawerPaymentText}>Payment can be made by any bank card</Typography>
        <Divider />
        {/* Subtotal, Tax, Delivery Charges, Total  */}
        <List>
          <ListItem>
            <ListItemText className={{ primary: classes.listDetailText }} primary=
            {
              <Typography align="left" display="inline">
                {'Subtotal '} 
                {<Typography align="left" display="inline">{'$234.23'}</Typography> } </Typography> 
            } 
            />
          </ListItem>
          <ListItem>
            <ListItemText className={{ primary: classes.listDetailText }} primary=
            {
              <Typography align="left" display="inline">
                {'Tax '} 
                {<Typography align="left" display="inline">{'$23.43'}</Typography> } </Typography> 
            } 
            />
          </ListItem>
          <ListItem>
            <ListItemText className={{ primary: classes.listDetailText }} primary=
            {
              <Typography align="left" display="inline">
                {'Deliver Charges '} 
                {<Typography align="left" display="inline">{'$100.23'}</Typography> } </Typography> 
            } 
            />
          </ListItem>
          <ListItem>
            <ListItemText className={{ primary: classes.listDetailText }} primary=
            {
              <Typography align="left" display="inline">
                {'Total '} 
                {<Typography align="left" display="inline">{'$357.66'}</Typography> } </Typography> 
            } 
            />
          </ListItem>
        </List>
        <Button variant="contained" color="primary" disableElevation> Continue</Button>
      </Drawer>

      <Footer />
    </React.Fragment>

  );
}



