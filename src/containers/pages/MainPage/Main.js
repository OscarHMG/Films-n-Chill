import React, { Component } from "react";
import axios from '../../../Util/axios-imdb'
import * as URLs from '../../../Util/URL'
import FilmViewer from '../../../components/UI/FilmViewer/FilmViewer'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default class Main extends Component {
	state ={
		films : [],
		filmsAreFetched: false
	}


	componentDidMount(){
		axios.get(URLs.DISCOVER_MOVIE+'&api_key='+API_KEY)
		.then( resp => {

				this.setState({
					...this.state,
					films : resp.data.results
				});

				console.log(this.state)
			})
			.catch( err => {
				console.log(err);

			});
	}

  render() {

		let films = null;

		films = this.state.films.map( (f)=>{
			return(
				<FilmViewer 
					key={f.id}
					img={URLs.IMAGES_URL+f.backdrop_path}
					tittle={f.title}
					overview={f.overview}
					fetched={!this.state.filmsAreFetched}>

				</FilmViewer>
			);
		});



    return (
			<div className="row">
				{films}
			</div>
		);
  }
}
