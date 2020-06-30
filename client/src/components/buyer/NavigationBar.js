import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Divider from '@material-ui/core/Divider'

/** GraphQl Query */
import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";
import Router from "next/router";

const GET_CART_ITEM_QUANTITY = gql`
  query itemQuantityList($userId: ObjectId) {
    getOrderCartItems(userId: $userId) {
      quantity,
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    '& > *': {
      margin: theme.spacing(1),
    }, // for button spacing
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

var CartItemCount = (id) => {
  const { data, loading, error } = useQuery(GET_CART_ITEM_QUANTITY,
    {
      variables: {
        userId: id
      }
    }
  );

  // if (loading) return console.log("Loading");
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  var count = 0;
  for (var i = 0; i < data.getOrderCartItems.length; i++) {
    count += data.getOrderCartItems[i].quantity;
  };

  return count;
};



export default function NavigatinBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMenuProfileClick = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    Router.push({ 
      pathname: '/buyer/profile',
    })
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleForkchaClick = () =>{
    Router.push({ 
      pathname: '/',
    })
  };

  /** GraphQL Hooks */
  const getCartQuantity = (currentUserId) => {
    const { loading, error, data } = useQuery(GET_CART_ITEM_QUANTITY, {
      variables: { userId: currentUserId },
    });
    if (loading) return <p>Loading ...</p>;
    if (error) {
      // return  `Error! ${ error.message } `;
      return 0
    }
    if (!data) return 0;
    
    let count = 0;
    for (var i = 0; i < data.getOrderCartItems.length; i++) {
      count += data.getOrderCartItems[i].quantity;
    };
  
    return count;
  }

  var cartValue = getCartQuantity(props.userId);

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem><Typography variant="subtitle2">kunal Gulati (Name TODO)</Typography></MenuItem>
      <MenuItem><Typography variant="caption">kunal@forkcha.com (Email TODO)</Typography></MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuProfileClick}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Help</MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>

    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit" href="/buyer/orderSummary">
          <Badge badgeContent={cartValue} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Shopping Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  
  // when using drawer, Need to change Nav bar Position to "fixed", otherwise, keep "relative"
  var navbarPosition = "relative";
  if(props.position === undefined){
    navbarPosition = "relative";
  } else{
    navbarPosition = props.position;
  }

  return (
    <div className={classes.grow}>
      {/* <AppBar position="relative" className={classes.appBar}> */}
      <AppBar position={navbarPosition} className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
          </IconButton>
          <MenuItem onClick={handleForkchaClick}> <Typography className={classes.title} variant="h6" noWrap> ForkCha </Typography> </MenuItem>
            
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

            <Button href="/buyer/marketplace"> Marketplace</Button>
            <IconButton aria-label="show 4 new mails" color="inherit" href="/buyer/orderSummary">
              {/* CART */}
              <Badge badgeContent={cartValue} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
