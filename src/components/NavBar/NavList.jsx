import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { Dropdown } from "react-bootstrap";


export const NavList = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang, changeLang } = useLengua();

  return (
    <div className="navlist">
      {lang === "castellano" ? 
      (
        <div className="header-navbar">

          <Link className="navbar-link" to="/">
            <h3>Home</h3>
          </Link>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown">
              Experiencias
              <svg className="flechitapabajo" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.08337L6.83333 6.91671L12.6667 1.08337" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu">

                <Dropdown.Item className="dropdown-item">
                  <Link to="/experiencia-maradona">
                    Experiencia Maradona
                  </Link>
                </Dropdown.Item>
      
                <Dropdown.Item className="dropdown-item">
                  <Link to="/experiencia-boca-river" >
                    Experiencia Boca - River
                  </Link>
                </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>

          <Link className="navbar-link" to="/contact">
            <h3>Contacto</h3>
          </Link>
          <Link className="navbar-link" to="/nosotros">
            <h3>Nosotros</h3>
          </Link>
          <Button buttonStyle={"btn-navbar"}>Reservá</Button>
        </div>
      ) : (
        <div className="header-navbar">

          <Link className="navbar-link" to="/">
            <h3>Home</h3>
          </Link>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown">
              Experiences
              <svg className="flechitapabajo" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.08337L6.83333 6.91671L12.6667 1.08337" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu">

                <Dropdown.Item href="/experiencia-maradona" className="dropdown-item">Maradona Experience</Dropdown.Item>
              
                <Dropdown.Item href="/experiencia-boca-river" className="dropdown-item">Boca - River Experience</Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>

          <Link className="navbar-link" to="/contact">
            <h3>Contact</h3>
          </Link>
          <Link className="navbar-link" to="/nosotros">
            <h3>About Us</h3>
          </Link>
          <Button buttonStyle={"btn-navbar"}>Reserve</Button>
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
            <img src="img/united-kingdom.png" />
          </button>
        ) : (
          <button
            className="btn-bandera"
            onClick={() => changeLang("castellano")}
          >
            <img src="img/spain.png" />
          </button>
        )} */}

    </div>
  );
};
