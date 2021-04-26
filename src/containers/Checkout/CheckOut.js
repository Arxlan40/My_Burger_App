import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckOutSummary/CheckOutSummary";
import ContactData from "./ContactData/ContactData";
class CheckOut extends Component {
  state = {
    ingredients: null,
    price: 0,
  };
  constructor(props) {
    super(props);
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price;
    for (let params of query.entries()) {
      if (params[0] === "price") {
        price = params[1];
      } else {
        ingredients[params[0]] = +params[1];
      }
    }
    console.log(price);

    this.state = { ingredients: ingredients, price: price };
  }
  cancelHander = () => {
    this.props.history.goBack();
  };
  continueHander = () => {
    this.props.history.replace("/checkout");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          continueHander={this.continueHander}
          cancelHander={this.cancelHander}
          ingredients={this.state.ingredients}
        />
        <Route
          path={this.props.match.path}
          render={(props) => (
            <ContactData ingredients={this.state.ingredients} {...props} />
          )}
        />
      </div>
    );
  }
}

export default CheckOut;
