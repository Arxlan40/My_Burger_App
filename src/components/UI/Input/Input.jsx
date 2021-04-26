import React from "react";
import Classes from "./Input.module.css";
const Input = (props) => {
  let inputElement = null;
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input  onChange={props.change}
          className={Classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea onChange={props.change}
          className={Classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "select":
      inputElement = (
        <select   onChange={props.change}        className={Classes.InputElement}
        >
          {props.elementConfig.options.map(value => (
            <option value={value.value}>{value.displayValue}</option>
          ))}
        </select>
      );

      break;
    default:
      inputElement = (
        <input 
          className={Classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }

  return (
    <div className={Classes.Input}>
      <label className={Classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
