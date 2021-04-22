import React from "react";
import Classes from "./Burger.module.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
  
const Burger = (props) => {
  let transformingredients = Object.keys(props.ingredients)
    .map((ikeys) => {
      return [...Array(props.ingredients[ikeys])].map((_, i) => {
        return <BurgerIngredients key={ikeys + i} type={ikeys} />;
      });
    })
    .reduce((ar, el) => {
      return ar.concat(el);
    }, []);

  console.log(transformingredients);
  if (transformingredients.length === 0) {
    transformingredients = (
      <p>Please Start Adding Ingredients to complete your Burger</p>
    );
  }
  return (
    <div className={Classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformingredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
