import React from "react";
import classes from "./Input.css";


const input = props => {

  let classesInput = [props.validate];
  if(props.value !== ''){
    if(props.error !== null)
      classesInput.push('invalid');
  }

  return (
    <div className={props.wrapperclass + " " + classes.WrapperMargins}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        className={classesInput.join(' ')}
        value={props.value}
        onChange={props.changeHandler}
      />
      <span className="helper-text" data-error={props.error}> </span>
    </div>
  );
};

export default input;
