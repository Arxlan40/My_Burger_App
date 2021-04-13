import Layout from "./components/Layouts/Layout";

import React, { Component } from "react";
import BurgerBuilder from "./containers/BurgerBuilder/Burgebuilder"
class App extends Component {
  render() {
    return (
      <div>   
                          <Layout>
       <BurgerBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
