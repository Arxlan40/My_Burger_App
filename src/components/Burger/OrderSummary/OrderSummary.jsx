import React from "react";
import Aux from "../../../hoc/Auxilary";
import Button from "../../UI/Button/Button";

const ordersummary = (props) => {
  const ingredients = Object.keys(props.ingredients).map((ikey) => (
    <li key={ikey}>
      {ikey}={props.ingredients[ikey]}
    </li>
  ));
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Delious Burger with following Ingredients:</p>
      <ul>{ingredients}</ul>
      <h4>Total Price: {props.price}</h4>
      <p>Continue to checkout</p>
      <Button btntype="Danger" click={props.cancel}>Cancel</Button>
      <Button btntype="Success" click={props.cont}>Continue</Button>

    </Aux>
  );
};
export default ordersummary;
