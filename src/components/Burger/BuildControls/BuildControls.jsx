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
      {con.map((i) => {
        return (
          <BuildControl
            added={() => props.addingredientsHander(i.type)}
            remove={() => props.removeIngredientHandler(i.type)}

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
