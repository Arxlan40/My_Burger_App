import React from "react";
import Classes from "./NavigationItems.module.css";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
const navigationItems = (props) => {
  return (
    <ul className={Classes.NavigationItems}>
      <NavigationItem link="./" active>
        First{" "}
      </NavigationItem>
      <NavigationItem link="./">Second </NavigationItem>
    </ul>
  );
};
export default navigationItems;