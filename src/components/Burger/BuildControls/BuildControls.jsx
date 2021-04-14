import React from "react";
import Classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const con = [
  { label: "Meat", type: "meat" },
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },

];
const BuildControls = (props) => {
  return (
    <div className={Classes.BuildControls}>
      <p>Total Price: <strong>{props.price}</strong> </p>
      {con.map((i) => {
        return (
          <BuildControl
            added={() => props.addingredientsHander(i.type)}
            remove={() => props.removeIngredientHandler(i.type)}
            disabled ={props.disabled[i.type]}

            label={i.label}
            key={i.label}
            type={i.type}
          />
        );
      })}
    </div>
  );
};

export default BuildControls;
