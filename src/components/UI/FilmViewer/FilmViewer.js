import React from "react";

const filmViewer = props => {
  return (
			<div class="card col s3">
				<div class="card-image waves-effect waves-block waves-light">
					<img class="activator" src={props.img} />
				</div>
				<div class="card-content">
					<span class="card-title activator grey-text text-darken-4">
						{props.tittle}
						<i class="material-icons right">more_vert</i>
					</span>
				</div>
				<div class="card-reveal">
					<span class="card-title grey-text text-darken-4">
						{props.title}
						<i class="material-icons right">close</i>
					</span>
					<p>{props.overview}</p>
				</div>
			</div>
  );
};

export default filmViewer;
