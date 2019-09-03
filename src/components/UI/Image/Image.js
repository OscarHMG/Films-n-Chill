import React, { Component } from "react";
import classes from './Image.css';
import defaultImg from '../../../assets/images/default-film-img.jpg'

class Image extends Component {
  constructor() {
    super();
    this.state = { 
      loaded: false
    };
  }

  handleError = (ev) =>{
    ev.target.src = defaultImg;
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
          onError={this.handleError}
          onLoad={() => this.setState({ loaded: true })}
        />
      </div>
    );
  }
}

export default Image;

