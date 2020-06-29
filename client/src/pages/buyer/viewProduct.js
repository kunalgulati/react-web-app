import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { withRouter } from 'next/router';

import Footer from '../../components/Footer'
import NavigationBar from '../../components/buyer/NavigationBar'
import ViewProductContent from '../../views/buyer/ViewProductContent'

/** GraphQl Query */
import gql from 'graphql-tag'
import { useQuery } from "@apollo/react-hooks";


const useStyles = makeStyles((theme) => ({

}));


export default withRouter(function ViewProduct(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <NavigationBar userId={"5edab39c6c09ee1e30cae600"}/>
      <ViewProductContent productData={props.router.query}/>
      <Footer />
    </React.Fragment>
);
})

