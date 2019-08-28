import React from "react";
import homeFilmChill from "../../assets/images/home_film_chill.jpg";
import style from './HomePage.css'


const homePage = () => {
  return (
    <div className="row">
    <div className={style.containerImg}>
      {/* <img src={homeFilmChill} className={style.ImgCover} alt="HomePage" /> */}
      
      <div className={style.centered}>Centered</div>
    </div>
      
    </div>
  );
};

export default homePage;
