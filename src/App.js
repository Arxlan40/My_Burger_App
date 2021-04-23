import Layout from "./components/Layouts/Layout";
import {Route ,Switch} from "react-router-dom"
import React, { Component } from "react";
import BurgerBuilder from "./containers/BurgerBuilder/Burgebuilder";
import CheckOut from "./containers/Checkout/CheckOut"
import Orders from './containers/Orders/Orders';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>

          <Switch>
          <Route path="/orders" component={Orders} />

            <Route path="/" exact component={BurgerBuilder}/>
            <Route path="/checkOut" exact component={CheckOut}/>

          </Switch>
        
        </Layout>
      </div>
    );
  }
}

export default App;
