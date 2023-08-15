// import { useContext } from "react";
// import { LenguaContext } from "../../context/LenguaProvider";
import "../../../scss/layout/_header.scss";
import { NavBar } from "../../NavBar/NavBar";
// import { Carrusel } from "./Carrusel";
import { Legend } from "./Legend";
import { SocialBox } from "./SocialBox";

export const Header = () => {
  
  return (
    <div className="container-header">

      <img src="img/hero1.png" alt="Hinchada Boca Juniors" className="imagen-fondo-header"/>
      
      {/* <Carrusel/> */}

      <div className="header">
        <NavBar />
        <Legend />
        <SocialBox />
      </div>
      
    </div>
  );
};
