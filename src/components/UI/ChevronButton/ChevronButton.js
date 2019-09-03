import React from 'react'
import classes from './ChevronButton.css';

const chevronButton = (props) =>{
    return(
      <div className={classes.ChevronButton}>
				<i className="material-icons">
					{props.icon}
				</i>
			</div>
    );
}

export default chevronButton;