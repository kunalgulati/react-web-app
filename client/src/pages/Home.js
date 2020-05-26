// import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';

import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

import ProductHero from '../views/ProductHero';
import ProductValues from '../views/ProductValues';
import ProductHowItWorks from '../views/ProductHowItWorks';


export default function Index() {
  return (
    <React.Fragment>
      <NavigationBar />
      <ProductHero />
      <ProductValues />
      <ProductHowItWorks />
      {/* <AppFooter /> */}
      <Footer />
    </React.Fragment>
  );
}

// export default withRoot(Index);