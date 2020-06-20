import React from 'react';
import NavigationBar from '../components/buyer/NavigationBar';
import ProductHero from '../views/buyer/ProductHero';
import ProductHowItWorks from '../views/buyer/ProductHowItWorks';
import Footer from '../components/Footer';

// https://github.com/mui-org/material-ui/tree/master/examples/ssr
export default function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <ProductHero />
      <ProductHowItWorks />
      <Footer />
    </React.Fragment>
  );
}


// export default function App(props) {
//   return (
//     <View style={styles.container}>
//       <Text accessibilityRole="header" style={styles.text}>
//         React Native for Web & Next.js
//       </Text>

//       <Text style={styles.link} accessibilityRole="link" href={`/alternate`}>
//         A universal link
//       </Text>

//       <View style={styles.textContainer}>
//         <Text accessibilityRole="header" aria-level="2" style={styles.text}>
//           Subheader
//         </Text>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   link: {
//     color: 'blue',
//   },
//   textContainer: {
//     alignItems: 'center',
//     marginTop: 16,
//   },
//   text: {
//     alignItems: 'center',
//     fontSize: 24,
//     marginBottom: 24,
//   },
// })
