import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
// import { Dropdown } from "./Dropdown";
import { Dropdown } from 'bootstrap-4-react';

export const NavList = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang, changeLang } = useLengua();

  return (
    <div className="navlist">
      {lang === "castellano" ? (
        <div className="header-navbar">
          <Link className="navbar-link" to="/">
            <h3>Home</h3>
          </Link>

          <Dropdown>
            <Dropdown.Button secondary id="dropdownMenuButton">Experiencias</Dropdown.Button>
              <Dropdown.Menu aria-labelledby="dropdownMenuButton">
                <Link to="/experiencia-maradona">
                  <Dropdown.Item>Experiencia Maradoniana</Dropdown.Item>
                </Link>
                <Link to="/experiencia-boca-river">
                  <Dropdown.Item>Experiencia Boca - River</Dropdown.Item>
                </Link>
              </Dropdown.Menu>
          </Dropdown>

          <Link className="navbar-link" to="/contact">
            <h3>Contacto</h3>
          </Link>
          <Link className="navbar-link" to="/nosotros">
            <h3>Nosotros</h3>
          </Link>
          <Button className="btn-amarillo">Reservá</Button>
        </div>
      ) : (
        <div className="header-navbar">
          <Link className="navbar-link" to="/">
            <h3>Home</h3>
          </Link>

          <Dropdown>
            <Dropdown.Button secondary id="dropdownMenuButton">Experiences</Dropdown.Button>
              <Dropdown.Menu aria-labelledby="dropdownMenuButton">
                <Link to="/experiencia-maradona">
                  <Dropdown.Item>Maradonian Experience</Dropdown.Item>
                </Link>
                <Link to="/experiencia-boca-river">
                  <Dropdown.Item>Boca - River Experience</Dropdown.Item>
                </Link>
              </Dropdown.Menu>
          </Dropdown>

          <Link className="navbar-link" to="/contact">
            <h3>Contact</h3>
          </Link>
          <Link className="navbar-link" to="/nosotros">
            <h3>About Us</h3>
          </Link>
          <Button>Reserve</Button>
        </div>
      )}

      <div className="idiomas">
        <button className="btn-idioma" onClick={() => changeLang("castellano")}>
          ES
        </button>
        <div className="divisor"></div>
        <button className="btn-idioma" onClick={() => changeLang("english")}>
          EN
        </button>
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
  );
};
