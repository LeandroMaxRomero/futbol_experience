// import { useContext } from "react";
// import { LenguaContext } from "../../context/LenguaProvider";
import "../../../scss/layout/_header.scss";
import { NavBar } from "../../NavBar/NavBar";
import { ImageSlider } from "./ImageSlider";
import { Legend } from "./Legend";
import { SocialBox } from "./SocialBox";

export const Header = () => {

  const slides = [
    {url: 'img/hero1.png'},
    {url: 'img/hero2.png'},
    {url: 'img/hero3.png'}
];
  
  return (
    <div className="container-header">

        <ImageSlider slides={slides} />
    
        <img src="img/hero1.png" alt="Hinchada Boca Juniors" className="imagen-header-estatica"/>
    
        <div className="header">
          <NavBar />
          <Legend />
          <SocialBox />
        </div>
      
    </div>
  );
};
