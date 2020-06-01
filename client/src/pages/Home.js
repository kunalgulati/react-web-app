// import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';

import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

import ProductHero from '../views/ProductHero';
import ProductValues from '../views/ProductValues';
import ProductHowItWorks from '../views/ProductHowItWorks';

// https://github.com/mui-org/material-ui/tree/master/examples/ssr
export default function Index() {
  return (
    <React.Fragment>
      <NavigationBar />
      <ProductHero></ProductHero>
      <ProductValues></ProductValues>
      <ProductHowItWorks></ProductHowItWorks>
      <Footer />
    </React.Fragment>
  );
}

// export default withRoot(Index);