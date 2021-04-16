import React from "react";
import Classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from '../NavigationItems/NavigationItems'
const toolbar = (props) => {
  return (
    <div className={Classes.Toolbar}>
      <header>Menu</header>
      <Logo />
      <nav><NavigationItems/></nav>
    </div>
  );
};

export default toolbar;
