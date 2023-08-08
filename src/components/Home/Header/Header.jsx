// import { useContext } from "react";
// import { LenguaContext } from "../../context/LenguaProvider";
import "../../../scss/layout/_header.scss";
import { NavBar } from "../../NavBar/NavBar";
import { Legend } from "./Legend";
import { SocialBox } from "./SocialBox";

export const Header = () => {
  
  return (
    <div className="header">
      
      <NavBar />

      <SocialBox />

      <Legend />
      
    </div>
  );
};
