import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";
import { NavBar } from "../NavBar/NavBar";
import PropTypes from "prop-types";

export const CommonHeader = ({ ownStyle, experienceTittleES, experienceTittleEN, image }) => {

  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  return (
    <div className={ownStyle}>

      <img src={image} alt="Experiencias" className="imagen-fondo-header"/>

      <div className="text-header">
        <NavBar />
        {lang === "castellano" ? ( <h2>{experienceTittleES}</h2> ):(<h2>{experienceTittleEN}</h2>)}
      </div>
    
    </div>
  );
};
CommonHeader.propTypes = {
  ownStyle: PropTypes.node.isRequired,
  experienceTittleES: PropTypes.node.isRequired,
  experienceTittleEN: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
};
