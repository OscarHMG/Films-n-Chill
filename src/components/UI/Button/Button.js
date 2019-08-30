import React from "react";


const button = props => {
  return (
    <button
		className={"btn waves-effect waves-light " +props.className}
		onClick={props.clicked}
		disabled={props.disabled}>
		<i className={"material-icons " +props.iconAlign }>{props.icon}</i>
		{props.children}
    </button>);
};

export default button;
