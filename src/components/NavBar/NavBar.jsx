import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";
import { Link } from "react-router-dom";
import "../../scss/layout/_header.scss";

export const NavBar = () => {
  const useLengua = () => useContext(LenguaContext);
  const { changeLang, lang } = useLengua();
  return (
    <div className="header">
      <div className="header-logo">
        <img src="./src/img/cancha.png" />
      </div>
      {/* No sé si poner esta parte de JavaScript en un nuevo componente */}
      {lang === "castellano" ? (
        <div className="header-navbar">
          <Link className="navbar-link" to="/">
            <h3>Inicio</h3>
          </Link>
          <Link className="navbar-link" to="/aboutus">
            <h3>Sobre nosotros</h3>
          </Link>
          <Link className="navbar-link" to="/contact">
            <h3>Contacto</h3>
          </Link>
        </div>
      ) : (
        <div className="header-navbar">
          <Link className="navbar-link" to="/">
            <h3>Home</h3>
          </Link>
          <Link className="navbar-link" to="/aboutus">
            <h3>About us</h3>
          </Link>
          <Link className="navbar-link" to="/contact">
            <h3>Contact</h3>
          </Link>
        </div>
      )}

      <div className="header-banderas">
        {lang === "castellano" ? (
          <button className="btn-bandera" onClick={() => changeLang("ingles")}>
            <img src="./src/img/united-kingdom.png" />
          </button>
        ) : (
          <button
            className="btn-bandera"
            onClick={() => changeLang("castellano")}
          >
            <img src="./src/img/spain.png" />
          </button>
        )}
      </div>
    </div>
  );
};
