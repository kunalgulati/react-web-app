import React, { Component } from 'react'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Marketplace from '../pages/Marketplace'
import OrderSummary from '../pages/OrderSummary'
import PaymentStripe from '../pages/StripeCheckout'
import Home from '../pages/Home'
import {Switch, Route} from 'react-router-dom';


/**
 * Routing Souce Tutorial: https://medium.com/the-andela-way/understanding-the-fundamentals-of-routing-in-react-b29f806b157e
 */
class App extends Component {
  render() {
    // return <Login />
    return (
      <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/Register" component={Register}/>
            <Route path="/marketplace" component={Marketplace}/>
            <Route path="/orderSummary" component={OrderSummary}/>
            <Route path="/checkout" component={PaymentStripe}/>
          </Switch>
        </div>
    )
  }
}

export default App