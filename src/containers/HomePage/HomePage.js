import React, {Component} from "react";
import homeFilmChill from "../../assets/images/home_film_chill.jpg";
import style from "./HomePage.css";
import { Link } from 'react-router-dom'

/* const coverStyle ={
    position: 'relative',
    textAlign: 'center',
    color: 'white',
    width: '100%',
    
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover' 
} */

class HomePage extends Component {

	clickHandler = () =>{

	}

	render(){
		return (
			<div>
				<div className="row">
					<div className={style.containerImg}>
						<div className={style.BackgroundTint}></div>
						<div className={style.Centered}>
							<h2 className={"white-text " + style.IntroTitle}>
								Peliculas y series, ILIMITADOS
							</h2>

							<h5 className="white-text">
								Series y documentales a un click.
							</h5>

							<Link to="/signIn" className="waves-effect waves-light btn-large">Probar ahora</Link>

						</div>
					</div>
				</div>

				<div className={"row valign-wrapper "+style.ContainerDescription}>
					<div className={"col s6 "+style.TextDescriptionContainer}>
						<h3 className={"white-text "+style.TitleDescription}>Todo a un click.</h3>
						<p className={"white-text "+style.TextDescription}>Todo lo que quieras ver, sin límites ni comerciales. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más programas y películas!</p>
					</div>
					<div class="col s6">
						<img className={"responsive-img "+style.ImgDescription} src="https://images.unsplash.com/photo-1520966324358-40c3723e15d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"></img>
					</div>
				</div>

				
					<footer className={"page-footer "+ style.PageFooter}>
						<div className="container">
							<div className="row">
								<div className="col l6 s12">
									<h5 className="white-text">Footer Content</h5>
									<p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
								</div>
								<div className="col l4 offset-l2 s12">
									<h5 className="white-text">Links</h5>
									<ul>
										<li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
										<li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
										<li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
										<li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="footer-copyright">
							<div className="container">
							© 2019 Copyright - OscarHMG. All Rights Reserved.
							</div>
						</div>
					</footer>
				
			</div>
		);
	}
};

export default HomePage;
