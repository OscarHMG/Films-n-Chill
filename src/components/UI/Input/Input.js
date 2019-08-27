import React from "react";
import classes from "./Input.css";

console.log(classes);
const input = props => {

  let classesInput = [props.validate];
  if(props.value !== ''){
    if(props.error === null)
      classesInput.push('valid');
    else
      classesInput.push('invalid');
  }

  //let classesInput = props.validate +" "+ (props.isValid ? 'valid' : 'invalid');
  return (
    <div className={props.wrapperclass + " " + classes.WrapperMargins}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        className={classesInput.join(' ')}
        value={props.value}
        onChange={props.changeHandler}
      />
      <span className="helper-text" data-error={props.error}> </span>
    </div>
  );
};

export default input;
