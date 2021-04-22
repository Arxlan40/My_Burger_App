import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckOutSummary/CheckOutSummary";
class CheckOut extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
  };
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};

    for (let params of query.entries()) {
      console.log(params)

      ingredients[params[0]] = +params[1];
    }
    console.log("ingredients")

    this.setState({ingredients:ingredients})
  }
  cancelHander = () => {
    this.props.history.goBack();
  };
  continueHander = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          continueHander={this.continueHander}
          cancelHander={this.cancelHander}
          ingredients={this.state.ingredients}
        />
      </div>
    );
  }
}

export default CheckOut;
