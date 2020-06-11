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
import { withRouter } from 'next/router';

import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'
import ViewProductContent from '../views/ViewProductContent'

/** GraphQl Query */
import gql from 'graphql-tag'
import { useQuery } from "@apollo/react-hooks";


const GET_PRODUCT_DETAIL_QUERY = gql`
  query get($productId: ObjectId!) {
    getProduct(productId: $productId) {
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
    }
  }
`;

const getProductDescription = (id) => {
  const { data, loading, error } = useQuery(GET_PRODUCT_DETAIL_QUERY, {
    variables: {
      productId: id
    }}    
  );

  // if (loading) return console.log("Loading");
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  console.log(data);
  return  data.getProduct[0];
};

const useStyles = makeStyles((theme) => ({

}));


export default withRouter(function ViewProduct(props) {
  const classes = useStyles();
  // var productDescription = {};

  // productDescription = getProductDescription(props.router.query.productId)
  // console.log("product id : " +props.router.query.productId)

  return (
    <React.Fragment>
      <CssBaseline />
      <NavigationBar userId={"5edab39c6c09ee1e30cae600"}/>
      <ViewProductContent productId={props.router.query.productId} />
      <Footer />
    </React.Fragment>
);
})

