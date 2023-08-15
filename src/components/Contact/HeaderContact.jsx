import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";
import { NavBar } from "../NavBar/NavBar";
import PropTypes from "prop-types";

export const HeaderContact = ({ tittleES, tittleEN, imagen }) => {
const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();
  return (
    <div className="header-contact">
      <img src={imagen} alt="Imagen de festejo de hinchada" className="imagen-fondo-header" />

      <div className="text-header">
        <NavBar />
        {lang==='castellano' ? <h2>{tittleES}</h2> : <h2>{tittleEN}</h2>}
      </div>
    </div>
  )
};
HeaderContact.propTypes = {
  tittleES: PropTypes.node.isRequired,
  tittleEN: PropTypes.node.isRequired,
  imagen: PropTypes.node.isRequired,
};
