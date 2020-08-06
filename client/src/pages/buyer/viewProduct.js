import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { withRouter } from 'next/router';

/** Load Views */
import Footer from '../../components/Footer'
import NavigationBar from '../../components/buyer/NavigationBar'
import ViewProductContent from '../../views/buyer/ViewProductContent'

export default withRouter(function ViewProduct(props) {
  // const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <NavigationBar userId={"5edab39c6c09ee1e30cae600"}/>
      <ViewProductContent productData={props.router.query}/>
      <Footer />
    </React.Fragment>
);
})

