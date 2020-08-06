import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { withRouter } from 'next/router';

import Footer from '../../components/Footer'
import NavigationBar from '../../components/supplier/NavigationBar'
import ViewProductContent from '../../views/buyer/ViewProductContent'

/** GraphQl Query */


// const GET_PRODUCT_DETAIL_QUERY = gql`
//   query get($productId: ObjectId!) {
//     getProduct(productId: $productId) {
//       id,
//       title,
//       description,
//       city_of_origin,
//       certification,
//       province_of_origin,
//       country_of_origin,
//       grade,
//       size,
//       gmo,
//       washed,
//       store_temperature_range,
//       store_humidity,
//       chill_damage_sensitive,
//       pack_weight,
//       price,
//       minimum_quantity,
//       available,
//     }
//   }
// `;

// const getProductDescription = (id) => {
//   const { data, loading, error } = useQuery(GET_PRODUCT_DETAIL_QUERY, {
//     variables: {
//       productId: id
//     }}    
//   );

//   // if (loading) return console.log("Loading");
//   if (error) return <p>ERROR</p>;
//   if (!data) return <p>Not found</p>;
//   console.log(data);
//   return  data.getProduct[0];
// };

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
      <NavigationBar/>
      <ViewProductContent productId={"props.router.query.productId"} />
      <Footer />
    </React.Fragment>
);
})

