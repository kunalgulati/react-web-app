import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    width: '50%'
  }
}));
export default function ProfileForm(){
  const classes = useStyles();

  return (
    <form noValidate>
    <Grid container spacing={2} 
      direction="column"
      justify="flex-start"
      alignItems="center"
    >
        <Grid item xs={12}  className={classes.gridItem}>
          <TextField
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
            onInput={event => setFirstName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}  className={classes.gridItem}>
          <TextField
            variant="outlined"
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
            onInput={event => setLastName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}  className={classes.gridItem}>
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
        <Grid item xs={12}  className={classes.gridItem}>
          <TextField
            variant="outlined"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onInput={event => setPassword(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}  className={classes.gridItem}>
          <TextField
            variant="outlined"
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
          />
        </Grid>
        <Grid item xs={12}  className={classes.gridItem}>
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
        <Grid item xs={12}  className={classes.gridItem}>
          <TextField
            variant="outlined"
            fullWidth
            name="companyName"
            label="Company Name"
            id="companyName"
            onInput={event => setCompanyName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}  className={classes.gridItem}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          // onClick={handleSubmit}
          >
            Save</Button>
        </Grid>
      </Grid>
    </form>
  );
}