import React from "react";
import classes from './Input.css'

console.log(classes)
const input = props => {
  return (
    <div className={props.wrapperClass+ " "+classes.WrapperMargins}>
      <label for={props.id}>{props.label}</label>
      <input
        id={props.id}
        onChange={props.changeHandler}
        className={props.validate}
        {...props}
      />
    <span class="helper-text" data-error="" data-success=""></span>

    </div>
  );
};


export default input;