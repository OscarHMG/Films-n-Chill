import React, { Component } from "react";
import classes from './Image.css';

class Image extends Component {
  constructor() {
    super();
    this.state = { loaded: false };
  }

  render() {
    return (
      <div>
        {this.state.loaded ? null : (
          <div className={"progress "+classes.Progress}>
      			<div className={"indeterminate "+classes.InderteminateColor}></div>
  				</div>	
        )}

        <img
          style={this.state.loaded ? {} : { display: "none" }}
          src={this.props.src}
          onLoad={() => this.setState({ loaded: true })}
        />
      </div>
    );
  }
}

export default Image;

{
  /* <div
            style={{
              background: 'grey',
              height: '170px',
              width: '100%'
            }}
          /> */
}
