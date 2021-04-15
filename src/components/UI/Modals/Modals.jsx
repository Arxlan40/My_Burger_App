import React from "react";
import Classes from "./Modal.module.css";
import Aux from "../../../hoc/Auxilary";
import Backdrop from "../BackDrops/BackDrops"

const modals = (props) => {
  return (
    <Aux>
        <Backdrop show ={props.purchase} purchaseOffUpdate={props.purchaseOffUpdate}/>
      <div
        className={Classes.Modal}
        style={{
          transform: props.purchase ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.purchase ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default modals;
