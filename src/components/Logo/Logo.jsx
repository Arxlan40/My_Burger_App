import React from "react";
import logoImg from "../../assets/images/burger-logo.png"
import Classes from './Logo.module.css'

const logo=()=>(<div className={Classes.Logo}>
    <img src={logoImg} alt="MyBurger"/>
</div>);

export default logo;