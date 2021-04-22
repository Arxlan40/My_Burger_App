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
        ingredients={this.state.ingredients} />
      </div>
    );
  }
}

export default CheckOut;
