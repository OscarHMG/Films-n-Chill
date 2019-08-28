import React, { Component } from "react";
import Toolbar from "../../components/UI/Navigation/Toolbar/Toolbar";

export default class Template extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <main>{this.props.children}</main>
      </div>
    );
  }
}
