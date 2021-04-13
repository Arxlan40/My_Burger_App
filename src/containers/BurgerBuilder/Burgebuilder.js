import React, { Component } from "react";

import Aux from "../../hoc/Auxilary";
import Burger from "../../components/Burger/Burger"
class BurgerBuilder extends Component {
  state = {};
  render() {
    return <Aux>
      <Burger/>       

    </Aux>
    ;
  }
}

export default BurgerBuilder;
