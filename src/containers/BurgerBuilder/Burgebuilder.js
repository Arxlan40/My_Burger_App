import React, { Component } from "react";

import Aux from "../../hoc/Auxilary";
import Burger from "../../components/Burger/Burger";
import Modal from "../../components/UI/Modals/Modals";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
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
    purchaseble: false,
    purching: false,
  };

  purchaseOnUpdate = () => {
    this.setState({ purching: true });
  };

  purchaseOffUpdate = () => {
    this.setState({ purching: false });
  };
  purchaseContinue = () => {
    alert("You Continue your Purchase");
  };
  updatePurchaseUpdate(ingredients) {
    const sum = Object.keys(ingredients)
      .map((ikey) => {
        return ingredients[ikey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchaseble: sum > 0 });
  }
  addedIngredientHandler = (type) => {
    const oldcount = this.state.ingredients[type];
    const newcount = oldcount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newcount;
    const priceAddition = basePrice[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseUpdate(updatedIngredients);
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
    this.updatePurchaseUpdate(updatedIngredients);
  };

  render() {
    const disableinfo = {
      ...this.state.ingredients,
    };

    for (let key in disableinfo) {
      disableinfo[key] = disableinfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal
          purchase={this.state.purching}
          purchaseOffUpdate={this.purchaseOffUpdate}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            cancel={this.purchaseOffUpdate}
            price={this.state.totalPrice.toFixed(2)}
            cont={this.purchaseContinue}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addingredientsHander={this.addedIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          disabled={disableinfo}
          purchase={this.purchaseOnUpdate}
          purchaseble={this.state.purchaseble}
          price={this.state.totalPrice.toFixed(2)}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
