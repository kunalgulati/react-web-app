import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import PersonIcon from '@material-ui/icons/Person';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

import NavigationBar from '../components/NavigationBar';
import ProfileForm from '../views/userProfile/ProfileForm';
import BuyerInformationForm from '../views/userProfile/BuyerInformationForm';
import AccountContactForm from '../views/userProfile/AccountContactForm';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    width: '100%',
    flexGrow: 1,
    padding: theme.spacing(4),
    alignItems: "left",

  },
}));


export default function UserProfile() {
  const classes = useStyles();

  const MainListItems = () => {
    return (
      <React.Fragment>
        <ListItem
          button
          onClick={handleProfileClick}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Buyer Information" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Account Contact" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LocalShippingIcon />
          </ListItemIcon>
          <ListItemText primary="Delivery Setup" />
        </ListItem>
      </React.Fragment>
    )
  };

  const handleProfileClick = () => {
    console.log("donesss")
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

      <NavigationBar
        position="fixed"
        className={classes.appBar}
        userId={"5edab39c6c09ee1e30cae600"} />

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>
          <Divider />
          <List>
            <Toolbar />
            <MainListItems />
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {/* <ProfileForm /> */}
        {/* <BuyerInformationForm /> */}
        <AccountContactForm />
      </main>
    </div>
  );
}