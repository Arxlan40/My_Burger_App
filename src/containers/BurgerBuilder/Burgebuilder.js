import React, { Component } from "react";

import Aux from "../../hoc/Auxilary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
const basePrice = {
  salad: 0.5,
  meat: 1.3,
  cheese: 1,
  bacon: 0.7,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0,
    },
    totalPrice: 4,
  };

  addedIngredientHandler = (type) => {
    const oldcount = this.state.ingredients[type];
    const newcount = oldcount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newcount;
    const priceAddition = basePrice[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };
  removeIngredientHandler = (type) => {
    const oldcount = this.state.ingredients[type];
    if (oldcount <= 0) {
      return;
    }
    const newcount = oldcount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newcount;
    const priceAddition = basePrice[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };
  render() {
    const disableinfo = {
      ...this.state.ingredients,
    };

    for(let key in disableinfo){
      disableinfo[key]=disableinfo[key] <=0
    };

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addingredientsHander={this.addedIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          disabled={disableinfo}
          price={this.state.totalPrice.toFixed(2)}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
