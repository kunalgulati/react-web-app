import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router';
import { useLocation, Route, useParams } from "react-router-dom";
import {render} from "react-dom"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import FilterBar from '../components/FilterBar'
import FolderIcon from '@material-ui/icons/Folder';
import Footer from '../components/Footer'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import React, { useState }  from 'react';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import NavigationBar from '../components/NavigationBar'
import Router from 'next/router';
import ViewProduct from './viewProduct'

/** GraphQl Query */
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'


/** ************************************  Query  ************************************ */

const GET_ALL_PRODUCT_QUERY = gql`{
  getAllProducts
  {
    id,
    title,
    description,
    city_of_origin,
    certification,
    province_of_origin,
    country_of_origin,
    grade,
    size,
    gmo,
    washed,
    store_temperature_range,
    store_humidity,
    chill_damage_sensitive,
    pack_weight,
    price,
    minimum_quantity,
    available,
    createdAt,
    updatedAt
  }
}`

/** ************************************  Mutation  ************************************ */
const ADD_ITEM_TO_CART = gql`
  mutation Create(
    $userId: ObjectId!
    $productId: ObjectId!
    $quantity: Int!
  ) {
  addProductCart(
    userId: $userId
    productId: $productId
    quantity: $quantity
  ) 
}`

var productIdArray = [];

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardActionButton: {
    width: '100%',
    color: '#19857b'

  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  cardList: {
    backgroundColor: theme.palette.background.paper,
  },
  listDetailText: {
    alignItems: 'center',
    paddingTop: theme.spacing(0)
  }
}));


/** Get a List of all avialable Products in the market Place from the Product Table*/

// function ProductCardDetailList(props) {
//   const classes = useStyles();

//   return (
//     // <Grid item xs={12} md={6}>
//     <Grid>
//       <div className={classes.cardList}>
//         <List>
//           <ListItem className={classes.listDetailText }>
//             <ListItemText primary={
//               <Typography 
//                 variant="subtitle1" 
//                 align="left" 
//                 style={{display: 'inline-block'}}>
//                 {`Price: $${ props.price }`}</Typography>
//               } />
//           </ListItem>
//           <ListItem className={classes.listDetailText}>
//             <ListItemText primary={<Typography>{"Min. Quantity: " + props.min_quantity}</Typography>} />
//           </ListItem>
//           <ListItem>
//             <ListItemText primary={<Typography>{"Origin " + props.origin}</Typography>} />
//           </ListItem>
//         </List>
//       </div>
//     </Grid>
//   );
// };

/** Source: https://stackoverflow.com/questions/51369784/next-js-redirect-inside-of-graphql-mutation */
function handleViewProduct(card, i){
  console.log(card)
  Router.push({ 
    pathname: '/viewProduct',
    query: { productId: "5edab9b6bc81e02209015140",
    temp: "yes" }
  })
}

function handleAddToCart(event){
  event.preventDefault();
  
}

var t = [];
export default function Album() {
  const classes = useStyles();
  var iteration = 0;
  
  const AllProducts = () => (
    <Query query={GET_ALL_PRODUCT_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${ error.message } `;
        
        return (
          <Grid container spacing={1}>
            {data.getAllProducts.map((card, i) => (
              <Grid item key={card} xs={8} sm={4} md={3}>
                <Card className={classes.card} id={"Mutation"}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/wXuzS9xR49M"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <div>
                      <Typography gutterBottom variant="subtitle2" >
                        {card.title}
                      </Typography>
                      <Typography variant="caption">
                      <LocationOnIcon fontSize="inherit"/> {`${ card.city_of_origin }, ${ card.province_of_origin }`}
                      </Typography>
                    </div>
                    <Divider />  
                    <div>
                      <Typography gutterBottom variant="subtitle2" >
                        {`$ ${card.price.$numberDecimal}/ Kg`}
                      </Typography>
                      <Typography variant="caption">
                        {`${ card.minimum_quantity} Kgs min order`}
                      </Typography>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Button 
                      className={classes.cardActionButton}
                      size="small" 
                      color="primary" 
                      variant="contained"
                      onClick={                        
                        e=> { e.preventDefault(); 
                        handleViewProduct(card);
                      }}
                      >
                        View Product
                    </Button>
                    </CardActions>
                    <CardActions>
                    
                    <Mutation mutation={ADD_ITEM_TO_CART}>
                      { (Create, { loading, error }) => (
                    <Button
                    className={classes.cardActionButton} 
                    size="small" 
                    color="primary"
                    variant="contained"
                    // onClick={handleAddToCart(Create, loading, error )}
                    onClick={event => {
                      event.preventDefault();
                      Create(
                        {
                          variables: {
                            userId: "5edab39c6c09ee1e30cae600",
                            productId: "5edab9f6bc81e02209015140",
                            quantity: 1
                          }
                        });
                        if(error){
                          console.log("erooorr")
                        } else{
                          console.log("Successfully regisered");
                        }
                        // setShoppingCartCount(23);
                    }}
                    >
                      Add to Cart
                  </Button>
                      )}
                    </Mutation>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        );
      }}
    </Query>
  );


  return (
    <React.Fragment>
      <CssBaseline />
      <NavigationBar userId={"5edab39c6c09ee1e30cae600"}/>
      
      <main>
        <FilterBar />
        <Container className={classes.cardGrid} maxWidth="md">
          <AllProducts />
        </Container>

      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
}



