import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';




import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'

const useStyles = makeStyles((theme) => ({
  backButton: {
    marginTop: theme.spacing(5),
  },
  cardContent: {
    flexGrow: 1,
  },
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(5)
  },
  paper: {
    ...theme.mixins.gutters(),
    padding: theme.spacing(2),
    textAlign: 'left',
    // color: theme.palette.text.secondary,
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
}));


export default function ViewProduct(props) {
  const classes = useStyles();
  
  // const t = ;
  
  return (
    <React.Fragment>
      <CssBaseline />
      <NavigationBar />
      <main>

        <Container className={classes.cardGrid} maxWidth="md">

          <Button 
            variant="contained" 
            color="primary" 
            className={classes.backButton}
            href="/marketplace"
          >
            <KeyboardArrowLeftIcon />Back to MarketPlace
        </Button>
      
        <Typography align="left">{"Specifications"}</Typography>


          <Grid container spacing={24} className={classes.root}>
            <CardContent className={classes.cardContent}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
            </CardContent>
            <CardContent className={classes.cardContent}>
              <Paper className={classes.paper}>
                <Typography variant="h5" component="h3">
                  This is a sheet of paper.
                </Typography>
                <Typography component="p">
                  Paper can be used to build surface or other elements for your application.
                </Typography>
                {/* Add an Icon Grid */}
                <Button variant="contained" color="primary" className={classes.backButton}>
                  Add to Cart
                </Button>
              </Paper>
            </CardContent>
          </Grid>

          <Divider />

        </Container>

      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
}

