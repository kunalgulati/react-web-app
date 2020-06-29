import Button from '@material-ui/core/Button';
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

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


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
  listItemStyle:{
    marginTop: 0,
    marginLeft: "5%",
  }
}));

const ProductDescription = (productData) => {
  const classes = useStyles();
  let data = productData.productData;

  const gmoText = (gmoBooleanValue) => {
    if (gmoBooleanValue === true) { return "No"}
    return "Yes"
  }

  const chillDamageText = (booleanValue) => {
    if (booleanValue === true) { return "Yes"}
    return "No"
  }

  return (
    <Grid container spacing={4} className={classes.root}>
      <CardContent className={classes.cardContent}>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Paper className={classes.paper}>
          <Typography variant="h6" component="h3">
            {data.title}
            </Typography>
          <Typography variant="caption">
            Product Description
            <Typography variant="caption"><br></br>
              {data.description}
            </Typography>
            </Typography><br></br>
          <Button variant="contained" color="primary" className={classes.backButton}>
            Add to Cart
            </Button>
        </Paper>
      </CardContent>

      <Divider />

      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          {/* Right Side Grid */}
          <Grid container justify="center" spacing={8}>
            <Grid item >
              <List component="nav" aria-label="Product Specification List" dense={true}>
                <ListItem className={classes.listItemStyle}>
                  <ListItemText primary={
                    <Typography variant="h6">Description</Typography>
                  } />
                </ListItem>
                <ListItem className={classes.listItemStyle}>
                  <ListItemText primary={
                    <Typography variant="subtitle2">Certification</Typography>}
                    secondary={
                      <Typography variant="caption">{data.certification}</Typography>}
                  />
                </ListItem>
                <ListItem className={classes.listItemStyle}>
                  <ListItemText primary={
                    <Typography variant="subtitle2">Grade</Typography>}
                    secondary={
                      <Typography variant="caption">{data.grade}</Typography>}
                  />
                </ListItem>
                <ListItem className={classes.listItemStyle}>
                  <ListItemText primary={
                    <Typography variant="subtitle2">Size Range</Typography>}
                    secondary={
                      <Typography variant="caption">{data.size}</Typography>}
                  />
                </ListItem>
                <ListItem className={classes.listItemStyle}>
                  <ListItemText primary={
                    <Typography variant="subtitle2">Non GMO</Typography>}
                    secondary={
                    <Typography variant="caption">{gmoText(data.gmo)}</Typography>}
                  />
                </ListItem>
                <ListItem className={classes.listItemStyle}>
                  <ListItemText primary={
                    <Typography variant="h6">Tolerance</Typography>
                  } />
                </ListItem>
                <ListItem className={classes.listItemStyle}>
                  <ListItemText primary={
                    <Typography variant="subtitle2">Total Defects≤ 25 %</Typography>}
                    secondary={
                      <Typography variant="caption">Seeder 3.1-5” may be noted towards total, but not towards serious defects; Open heads; Isolated insect damage not materially</Typography>}
                  />
                </ListItem>
                <ListItem className={classes.listItemStyle}>
                  <ListItemText primary={
                    <Typography variant="subtitle2">Serious Damage ≤ 10 %</Typography>}
                    secondary={
                      <Typography variant="caption">Seeder 5”*; Excessive wrapper leaves; Bruising on 5 or more head leaves. *During March - May, seeder must be</Typography>}
                  />
                </ListItem>
                <ListItem className={classes.listItemStyle}>
                  <ListItemText primary={
                    <Typography variant="subtitle2">{`Decay & Mold ≤ 2 %`}</Typography>}
                    secondary={
                      <Typography variant="caption">Seeder 5”*; Excessive wrapper leaves; Bruising on 5 or more head leaves. *During March - May, seeder must be</Typography>}
                  />
                </ListItem>
              </List>
            </Grid>

            {/* Left Side Grid */}
            <Grid item >
              <List component="nav" aria-label="Product Specification List" dense={true}>
                <ListItem className={classes.listItemStyle}>
                  <ListItemText primary={
                    <Typography variant="h6">{`Storage, Shipping, and Handling`}</Typography>
                  } />
                </ListItem>
                <ListItem className={classes.listItemStyle}>
                  <ListItemText primary={
                    <Typography variant="subtitle2">{`Temperature`}</Typography>}
                    secondary={
                      <Typography variant="caption">{data.store_temperature_range}</Typography>}
                  />
                </ListItem>
                <ListItem className={classes.listItemStyle}>
                  <ListItemText primary={
                    <Typography variant="subtitle2">{`Humidity`}</Typography>}
                    secondary={
                      <Typography variant="caption">{data.store_humidity}</Typography>}
                  />
                </ListItem>
                <ListItem className={classes.listItemStyle}>
                  <ListItemText primary={
                    <Typography variant="subtitle2">{`Chill Damage Sensitive`}</Typography>}
                    secondary={
                      <Typography variant="caption">{
                        chillDamageText(data.chill_damage_sensitive)
                      }</Typography>}
                  />
                </ListItem>
                <ListItem className={classes.listItemStyle}>
                  <ListItemText primary={
                    <Typography variant="subtitle2">{`Ethylene Sensitive`}</Typography>}
                    secondary={
                      <Typography variant="caption">Yes - Add field to db</Typography>}
                  />
                </ListItem>
                <ListItem className={classes.listItemStyle}>
                  <ListItemText primary={
                    <Typography variant="subtitle2">{`Ethylene Producing`}</Typography>}
                    secondary={
                      <Typography variant="caption">{`No -- Add field to db`}</Typography>}
                  />
                </ListItem>
                <ListItem className={classes.listItemStyle}>
                  <ListItemText primary={
                    <Typography variant="subtitle2">{`Pack Weight`}</Typography>}
                    secondary={
                      <Typography variant="caption">{`~ ${data.pack_weight} lbs per bin`}</Typography>}
                  />
                </ListItem>
                <ListItem className={classes.listItemStyle}>
                  <ListItemText
                    secondary={
                      <Typography variant="caption">Master case outer label must be in conformance with FSMA traceability requirements</Typography>}
                  />
                </ListItem>
              </List>
            </Grid>

          </Grid>
        </Grid>
      </Grid>

    </Grid>
  )
};

export default function ViewProductContent(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      
      <Container className={classes.cardGrid} maxWidth="md">
        
        <Button
          variant="contained"
          color="primary"
          className={classes.backButton}
          href="/buyer/marketplace"
        >
          <KeyboardArrowLeftIcon />Back to MarketPlace
        </Button>

        <Typography align="left">{"Specifications"}</Typography>
        
        <ProductDescription productData={props.productData} />

        
        <Divider />

      </Container>
    </React.Fragment>
  );
};

