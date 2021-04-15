import React from "react";
import Classes from "./Button.module.css";

const button = (props) => <button onClick={props.click} className={[Classes.Button , Classes[props.btntype]].join(' ')}>
    {props.children}
</button>;

export default button;