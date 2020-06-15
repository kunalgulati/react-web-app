import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import DatePickerComponent from './marketplaceFilter/DatePicker';
import Commodity from './marketplaceFilter/Commodity';
import Certification from './marketplaceFilter/Certification';
import Grade from './marketplaceFilter/Grade';
import PackageType from './marketplaceFilter/PackageType';
import Location from './marketplaceFilter/Location';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
    border: 3,
    borderColor: '#4ceb34',
    borderRadius: theme.shape.borderRadius,
    
    // backgroundColor: fade("#4ceb34", 0.15),
    // '&:hover': {
    //   backgroundColor: fade("#4ceb34", 0.25),
    // },
  },

}));

export default function FilterBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <div className={classes.root}>
    
    <Typography variant="subtitle2" align="center">Filter Produce By</Typography>
    <Grid container justify="center" spacing={0}>
        <Grid  item>
          <Commodity />
        </Grid>
        <Grid  item>
          <Certification />
        </Grid>
        <Grid  item>
          <Grade />
        </Grid>
        <Grid  item>
          <PackageType />
        </Grid>
        <Grid  item>
          <Location />
        </Grid>
        <Grid item >
          <DatePickerComponent />
        </Grid>
    </Grid>
    </div>
    </React.Fragment>
  );
}
