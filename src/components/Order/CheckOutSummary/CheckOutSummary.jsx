import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import Classes from "./CheckOutSummary.module.css";

const CheckOutSummary = (props) => {
  return (
    <div className={Classes.CheckoutSummary}>
        <h1>We hope It will Taste Well</h1>
      <div style={{width:"100%", margin:"auto"}}><Burger ingredients={props.ingredients} /></div>
      <Button  click={props.cancelHander} btntype="Danger">Close </Button>
      <Button click={props.continueHander} btntype="Success">Continue</Button>
    </div>
  );
};

export default CheckOutSummary;
