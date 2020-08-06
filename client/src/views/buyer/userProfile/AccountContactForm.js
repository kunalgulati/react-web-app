import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    width: '50%'
  },
  root: {
    marginTop: theme.spacing(3),
  }
}));
export default function ProfileForm() {
  const classes = useStyles();

  const setBuyerName = (nameArgs) =>{
    console.log("TODO : " + nameArgs)
  }

  const setEmail = (emailArgs) =>{
    console.log("TODO : " + emailArgs)
  }

  const setPhoneNumber = (phoneNumberArgs) =>{
    console.log("TODO : " + phoneNumberArgs)
  }

  return (
    <React.Fragment>
      <Typography variant="h5" align="left">Billing Account Contact</Typography>
      <Typography variant="caption" align="left">This contact is the individual in your organization responsible for approving payment transactions.
      </Typography>

      <form noValidate className={classes.root}>
        <Grid container spacing={2}
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} className={classes.gridItem}>
            <TextField
              autoComplete="bname"
              name="AccountName"
              variant="outlined"
              fullWidth
              id="accountName"
              label="Account Name"
              autoFocus
              onInput={event => setBuyerName(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onInput={event => setEmail(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <TextField
              variant="outlined"
              fullWidth
              name="phoneNumber"
              label="Phone Number"
              type="tel"
              id="phoneNumber"
              onInput={event => setPhoneNumber(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <TextField
              variant="outlined"
              fullWidth
              id="billingAddress"
              label="Billing Address"
              name="billingAddress"
            // autoComplete="email"
            // onInput={event => setEmail(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <TextField
              variant="outlined"
              fullWidth
              id="billingAddress"
              label="City"
              name="billingAddress"
            // autoComplete="email"
            // onInput={event => setEmail(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <TextField
              variant="outlined"
              fullWidth
              id="billingAddress"
              label="Province"
              name="billingAddress"
            // autoComplete="email"
            // onInput={event => setEmail(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <TextField
              variant="outlined"
              fullWidth
              id="billingAddress"
              label="Postal Code"
              name="billingAddress"
            // autoComplete="email"
            // onInput={event => setEmail(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            // onClick={handleSubmit}
            >Save</Button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}