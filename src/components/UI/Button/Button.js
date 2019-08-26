import React, { Component } from "react";

import classes from './Button.css'

const button = props => {
  return (
    <button
    	disabled={props.disabled}
			className={"btn waves-effect waves-light " +props.className}
			onClick={props.clicked}>
			<i className={"material-icons " +props.iconAlign }>{props.icon}</i>
			{props.children}
    </button>);
};

export default button;
