import React, {Component} from "react";
import classes from './FilmViewer.css'


import Image from '../Image/Image'


class FilmViewer extends Component {
	
	
	render(){


		return (
			<div className={"card col s12 hoverable "+classes.FilmViewer}>
				<div className="card-image waves-effect waves-block waves-light">
					<Image src={this.props.img} className="activator"/>

				</div>
				<div className="card-content">
					<span className={"card-title activator grey-text text-darken-4 "+classes.Inline}>
						<div className={classes.FilmViewerTitle}>{this.props.title}</div> 
						<i className="material-icons right">info</i>
					</span>
				</div>
				<div className="card-reveal">
					<span className="card-title grey-text text-darken-4">
						<div>{this.props.title}</div>
						<i className="material-icons right">close</i>
					</span>
					<p>{this.props.overview}</p>
				</div>
			</div>
  );

	}
  
};

export default FilmViewer;



