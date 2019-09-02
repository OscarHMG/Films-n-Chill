import React, { Component } from "react";
import axios from '../../../Util/axios-imdb'
import * as URLs from '../../../Util/URL'
import FilmViewer from '../../../components/UI/FilmViewer/FilmViewer'

import Carousel from '../../../components/UI/Carousel/Carousel';





const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class Main extends Component {
	state ={
		films : [],
		tvShows: [],
		tvFilmsTrending: [],
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
				
				this.setState({
					...this.state,
					films: []
				});

			});

		axios.get(URLs.DISCOVER_TV_SHOW+'&api_key='+API_KEY)
		.then( resp => {

				this.setState({
					...this.state,
					tvShows : resp.data.results
				});

			})
			.catch( err => {
				console.log(err);

			});

			axios.get(URLs.ALL_WEEK_TRENDING+'?api_key='+API_KEY)
			.then( resp => {
				console.log('RESPONSE', resp.data.results);
				this.setState({
					...this.state,
					tvFilmsTrending : resp.data.results
				});

			})
			.catch( err => {
				console.log(err);

			});
	}

  render() {

		let films = null;
		let tvShows = null;
		let trending = null;

		films = this.state.films.map( (f)=>{
			return(
				<FilmViewer 
					key={f.id}
					img={URLs.IMAGES_URL+f.backdrop_path}
					title={f.title}
					overview={f.overview}
					fetched={!this.state.filmsAreFetched}>
				</FilmViewer>
			);
		});

		tvShows = this.state.tvShows.map( (f)=>{
			return(
				
				<FilmViewer 
					key={f.id}
					img={URLs.IMAGES_URL+f.backdrop_path}
					title={f.name}
					overview={f.overview}
					fetched={!this.state.filmsAreFetched}>
				</FilmViewer>
			);
		});

		trending = this.state.tvFilmsTrending.map( (f)=>{
			return(
				
				<FilmViewer 
					key={f.id}
					img={URLs.IMAGES_URL+f.backdrop_path}
					title={f.original_title}
					overview={f.overview}
					fetched={!this.state.filmsAreFetched}>
				</FilmViewer>
			);
		});



    return (
			<div className="row">
				<div>

				<div>
					<h4>Trending shows for this week</h4>
					<Carousel films={trending}></Carousel>
				</div>

					<h4>Discover - Films</h4>
					<Carousel films={films}></Carousel>
				</div>

				<div>
					<h4>Discover - TV Shows</h4>
					<Carousel films={tvShows}></Carousel>
				</div>
			</div>

		);
  }
}

export default Main;

/* {
	adult: false,
	backdrop_path: "/8bRIfPGDnmWgdy65LO8xtdcFmFP.jpg",
	genre_ids: [35, 80, 18],
	id: 429203,
	original_language: "en",
	original_title: "The Old Man & the Gun",
	overview: "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
	popularity: 372.505,
	poster_path: "/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
	release_date: "2018-09-28",
	title: "The Old Man & the Gun",
	video: false,
	vote_average: 6.5,
	vote_count: 458
},
{
	adult: false,
	backdrop_path: "/8bRIfPGDnmWgdy65LO8xtdcFmFP.jpg",
	genre_ids: [35, 80, 18],
	id: 429203,
	original_language: "en",
	original_title: "The Old Man & the Gun",
	overview: "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
	popularity: 372.505,
	poster_path: "/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
	release_date: "2018-09-28",
	title: "The Old Man & the Gun",
	video: false,
	vote_average: 6.5,
	vote_count: 458
},
{
	adult: false,
	backdrop_path: "/8bRIfPGDnmWgdy65LO8xtdcFmFP.jpg",
	genre_ids: [35, 80, 18],
	id: 429203,
	original_language: "en",
	original_title: "The Old Man & the Gun",
	overview: "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
	popularity: 372.505,
	poster_path: "/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
	release_date: "2018-09-28",
	title: "The Old Man & the Gun",
	video: false,
	vote_average: 6.5,
	vote_count: 458
},
{
	adult: false,
	backdrop_path: "/8bRIfPGDnmWgdy65LO8xtdcFmFP.jpg",
	genre_ids: [35, 80, 18],
	id: 429203,
	original_language: "en",
	original_title: "The Old Man & the Gun",
	overview: "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
	popularity: 372.505,
	poster_path: "/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
	release_date: "2018-09-28",
	title: "The Old Man & the Gun",
	video: false,
	vote_average: 6.5,
	vote_count: 458
},
{
	adult: false,
	backdrop_path: "/8bRIfPGDnmWgdy65LO8xtdcFmFP.jpg",
	genre_ids: [35, 80, 18],
	id: 429203,
	original_language: "en",
	original_title: "The Old Man & the Gun",
	overview: "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
	popularity: 372.505,
	poster_path: "/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
	release_date: "2018-09-28",
	title: "The Old Man & the Gun",
	video: false,
	vote_average: 6.5,
	vote_count: 458
},
{
	adult: false,
	backdrop_path: "/8bRIfPGDnmWgdy65LO8xtdcFmFP.jpg",
	genre_ids: [35, 80, 18],
	id: 429203,
	original_language: "en",
	original_title: "The Old Man & the Gun",
	overview: "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
	popularity: 372.505,
	poster_path: "/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
	release_date: "2018-09-28",
	title: "The Old Man & the Gun",
	video: false,
	vote_average: 6.5,
	vote_count: 458
} */
