import React from "react";
import classes from "./Input.css";

console.log(classes);
const input = props => {
  return (
    <div className={props.wrapperclass + " " + classes.WrapperMargins}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        onChange={props.changeHandler}
        className={props.validate}
        {...props}
      />
      <span className="helper-text" data-error={props.error} data-success="" />
    </div>
  );
};

export default input;
