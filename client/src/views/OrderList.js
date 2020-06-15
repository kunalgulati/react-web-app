import React from 'react'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Box, Avatar, Container, Divider } from '@material-ui/core';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

// Template Based on@ https://dribbble.com/shots/5933374-The-bag/attachments


// const GET_ALL_CART_ITEMS = gql`
//   query getGreeting($language: String!) {
//     greeting(language: $language) {
//       message
//     }
//   }
// `;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 10,
    width: '100%',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    paddingTop: "5%",
  },
  listRoot: {
    width: '100%',
    maxWidth: '36ch',
    marginLeft: "5%",
    backgroundColor: theme.palette.background.paper,
  },
  listGrid: {
    margin: "2%",
  },
  listItemButton: {
    spacing: theme.spacing(4),
  },
  inline: {
    display: 'inline',
  },
}));



function ListView() {
  const classes = useStyles();
  return (
    <React.Fragment>
        <Divider />
        <Grid
          container
          spacing={0}
          direction="column"
          className={classes.listGrid}
        >
          <List
            className={classes.listRoot}>
  
            <ListItem >
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar`}
                  src="https://source.unsplash.com/random"
                  title="Image title"
                />
              </ListItemAvatar>
              <ListItemText
                primary={<Typography variant="subtitle2" > Peeler Fuji Apples Organic 24" bin</Typography>}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="caption"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Apples of one variety, unless designated as mixed
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem className={classes.listItemButton}>
              <Box>
                <TextField
                  id="standard-number"
                  label="Number of Boxes"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
              <Box pl={4}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.backButton}>
                  Remove
                </Button>
              </Box>
            </ListItem>
          </List>
        </Grid>
        
        
        
        {/* // Second */}
        <Divider />
        <Grid
          container
          spacing={0}
          direction="column"
          className={classes.listGrid}
        >
          <List
            className={classes.listRoot}>
  
            <ListItem >
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar`}
                  src="https://source.unsplash.com/random"
                  title="Image title"
                />
              </ListItemAvatar>
              <ListItemText
                primary={<Typography variant="subtitle2" > Peeler Fuji Apples Organic 24" bin</Typography>}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="caption"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Apples of one variety, unless designated as mixed
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem className={classes.listItemButton}>
              <Box>
                <TextField
                  id="standard-number"
                  label="Number of Boxes"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
              <Box pl={4}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.backButton}>
                  Remove
                </Button>
              </Box>
            </ListItem>
          </List>
        </Grid>
        
    </React.Fragment>
  );
}


export default function OrderList() {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <Grid container spacing={24} className={classes.root}> */}
      <Grid spacing={1} className={classes.root}>
        <ListView />
      </Grid>

    </React.Fragment>

  );
}



