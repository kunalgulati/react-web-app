import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import { Grid } from '@material-ui/core';

const backgroundImage =
  'https://images.unsplash.com/photo-1508004727890-1f5e1a22932e?auto=format&fit=crop&w=1400&q=80'

const styles = (theme) => ({
  root: {
    color: '#ffffff',
  },
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
    backgroundColor: '#2fbc84',
    color: 'inherit'
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(4),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
  buttonGrid: {
    flexGrow: 1,
    width: '80%',
    padding: theme.spacing(4),
  }
});

function ProductHero(props) {
  const { classes } = props;
  const [spacing, setSpacing] = React.useState(2);

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" /> */}
      <Typography color="inherit" align="center" variant="h3" marked="center">
        Waste Less, Make More Profit
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Source Rescued Food from Forkcha for your Production Unit
      </Typography>



      <Grid container justify="center" spacing={3}>
        <Grid item>
          <Button
            color="default"
            variant="contained"
            size="large"
            className={classes.button}
            component="a"
            href="/register"
          >
            Register
            </Button>
        </Grid>
        <Grid item>
          <Button
            color="default"
            variant="contained"
            size="large"
            className={classes.button}
            component="a"
            href="/login"
          >
            Login
          </Button>
        </Grid>
        <Grid item>
          <Button
            color="default"
            variant="contained"
            size="large"
            className={classes.button}
            component="a"
            href="/marketplace"
          >
            Marketplace
          </Button>
        </Grid>
      </Grid>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);