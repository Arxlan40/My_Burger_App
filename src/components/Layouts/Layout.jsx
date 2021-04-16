import React from "react";
import Aux from "../../hoc/Auxilary";
import Classes from "./Layout.module.css"
import Toolbar from "../Navigation/Toollbar/Toolbar"
const layout = (props) => (
  <Aux>
   <Toolbar/>
    <main className={Classes.content}>{props.children}</main>
  </Aux>
);

export default layout;
