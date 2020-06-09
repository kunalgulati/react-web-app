import React from 'react'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// Template Based on@ https://dribbble.com/shots/5933374-The-bag/attachments

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
  ListRoot: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  listItemButton: {
    spacing: theme.spacing(4),
  },
  inline: {
    display: 'inline',
  },
}));

export default function OrderList() {
  const classes = useStyles();


  return (
    <React.Fragment>
      <Grid container spacing={24} className={classes.root}>
      <List >
      <ListItem>
        <CardContent className={classes.cardContent} >
          <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
            title="Image title"
          />
        </CardContent>
        <CardContent className={classes.cardContent} t={2}>

          <List className={classes.ListRoot}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={<Typography variant="h9" component="h3"> Peeler Fuji Apples Organic 24" bin</Typography>}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Apples of one variety, unless designated as mixed
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>

            <ListItem alignItems="center" className={classes.listItemButton}>
              <TextField
                id="standard-number"
                label="Number of Boxes"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.backButton}>
                Remove
            </Button>

            </ListItem>
          </List>
        </CardContent>
        </ListItem>


        <ListItem>
        <CardContent className={classes.cardContent} >
          <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
            title="Image title"
          />
        </CardContent>
        <CardContent className={classes.cardContent} t={2}>

          <List className={classes.ListRoot}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={<Typography variant="h9" component="h3"> Peeler Fuji Apples Organic 24" bin</Typography>}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Apples of one variety, unless designated as mixed
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>

            <ListItem alignItems="center" className={classes.listItemButton}>
              <TextField
                id="standard-number"
                label="Number of Boxes"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.backButton}>
                Remove
            </Button>

            </ListItem>
          </List>
        </CardContent>
        </ListItem>
        </List>
        
      </Grid>
      
    </React.Fragment>

  );
}



