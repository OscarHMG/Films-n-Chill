import React, { Component } from "react";

class HorizontalCard extends Component {
  render() {
    return (
      <div className="row">
        <div className={this.props.grid}>
          <div className={"card horizontal "+ this.props.hover}>
              {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default HorizontalCard;
