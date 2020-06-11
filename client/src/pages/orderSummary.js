import React from 'react'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Footer from '../components/Footer';
import Grid from '@material-ui/core/Grid';

import NavigationBar from '../components/NavigationBar';
import OrderList from '../views/OrderList';
import Paper from '@material-ui/core/Paper';


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



// Template Based on@ https://dribbble.com/shots/5933374-The-bag/attachments

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  spacing: 10,
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
  orderDrawerTopText: {
    margin: '5%'
  },
  drawerPaymentText: {
    margin: '5%',
    marginTop: '50%'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function OrderSummary() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <NavigationBar position="fixed" className={classes.appBar} userId={"5edab39c6c09ee1e30cae600"}/>
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
                  {<Typography align="left" display="inline">{'$234.23'}</Typography>} </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText className={{ primary: classes.listDetailText }} primary=
              {
                <Typography align="left" display="inline">
                  {'Tax '}
                  {<Typography align="left" display="inline">{'$23.43'}</Typography>} </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText className={{ primary: classes.listDetailText }} primary=
              {
                <Typography align="left" display="inline">
                  {'Deliver Charges '}
                  {<Typography align="left" display="inline">{'$100.23'}</Typography>} </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText className={{ primary: classes.listDetailText }} primary=
              {
                <Typography align="left" display="inline">
                  {'Total '}
                  {<Typography align="left" display="inline">{'$357.66'}</Typography>} </Typography>
              }
            />
          </ListItem>
        </List>
        <Button variant="contained" color="primary" disableElevation> Continue</Button>
      </Drawer>

      <OrderList />
      <Divider/>

      {/* <Footer /> */}
    </React.Fragment>

  );
}



