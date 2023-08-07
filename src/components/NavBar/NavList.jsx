
import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";
import { Link } from "react-router-dom";
import { Button }  from "../Button/Button";

export const NavList = () => {

  const useLengua = () => useContext(LenguaContext);
  const { lang, changeLang } = useLengua();

  return (
    <div className="navlist">

      {
      lang === "castellano"
      ?
      (
      <div className="header-navbar">
        <Link className="navbar-link" to="/">
          <h3>Home</h3>
        </Link>
        <Link className="navbar-link" to="/aboutus">
          <h3>Experiencias</h3>
        </Link>
        <Link className="navbar-link" to="/contact">
          <h3>Contacto</h3>
        </Link>
        <Button className="btn-amarillo">
          Reservá tu experiencia
        </Button>
      </div>
      )
      :
      (
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
        <Button>
          Reserve your next experience
        </Button>
      </div>
        )}
        
        <div className="idiomas">
          <button className="btn-idioma" onClick={() => changeLang('castellano')}>ES</button>
            <div className="divisor"></div>
          <button className="btn-idioma" onClick={() => changeLang('english')}>EN</button>
        </div>

        {/* {lang === "castellano" ? (
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
        )} */}
      
    </div>
  )
}
