import React, { Component } from "react";

import Aux from "../../hoc/Auxilary";
import Burger from "../../components/Burger/Burger";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "../../Axios";
import withErrorHandler from "../../hoc/ErroHandler/ErrorHandler";

const basePrice = {
  salad: 0.5,
  meat: 1.3,
  cheese: 1,
  bacon: 0.7,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchaseble: false,
    purching: false,
    loading: false,
    error: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    try {
      const res = await axios.get(
        "https://burger-app-13608-default-rtdb.firebaseio.com/ingredients.json"
      );
      this.setState({ ingredients: res.data, loading: false });
    } catch (e) {
      this.setState({ error: true, loading: false });
    }
  }

  purchaseOnUpdate = () => {
    this.setState({ purching: true });
  };

  purchaseOffUpdate = () => {
    this.setState({ purching: false });
  };
  purchaseContinue = async () => {
    // this.setState({ loading: true });
    // console.log("sss");
    // const data = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   userdetails: {
    //     name: "arslan",
    //     address: "nothing",
    //     phone: "12342424",
    //   },
    // };
    // try {
    //   await axios.post("orders.json", data);
    //   this.setState({ loading: false, purching: false });
    // } catch (e) {
    //   console.log("sss");
    //   this.setState({ loading: false, purching: false });

    //   console.log(e);
    // }

    this.props.history.push("/checkout");
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

    let orderSum = null;

    let burger = this.state.error ? <p>Error In Network</p> : <Spinner />;

    if (this.state.ingredients) {
      burger = (
        <Aux>
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
      orderSum = (
        <OrderSummary
          ingredients={this.state.ingredients}
          cancel={this.purchaseOffUpdate}
          price={this.state.totalPrice.toFixed(2)}
          cont={this.purchaseContinue}
          loading={this.state.loading}
        />
      );
    }

    if (this.state.loading) {
      orderSum = <Spinner />;
    }
    return (
      <Aux>
        <Modal show={this.state.purching} modalClosed={this.purchaseOffUpdate}>
          {orderSum}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
