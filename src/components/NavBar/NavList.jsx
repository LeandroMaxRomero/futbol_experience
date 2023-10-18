import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { Dropdown } from "react-bootstrap";
import { generalContact } from "../../data/data";

export const NavList = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang, changeLang } = useLengua();

  return (
    <div className="navlist">
      {lang === "castellano" 
      ? 
      (
        <div className="header-navbar">
          <Link className="navbar-link" to="/">
            <h3>Home</h3>
          </Link>

          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="dropdown"
            >
              Experiencias
              <svg
                className="flechitapabajo"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.08337L6.83333 6.91671L12.6667 1.08337"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu" id="experieciasDesplegable">             
                <Link to="/experiencia-maradona" className="dropdown-item">
                  Experiencia Maradona
                </Link>
            
                <Link to="/experiencia-boca-river" className="dropdown-item">
                  Experiencia Boca - River
                </Link>             
            </Dropdown.Menu>
          </Dropdown>

          <Link className="navbar-link" to="/contact">
            <h3>Contacto</h3>
          </Link>
          <Link className="navbar-link" to="/nosotros">
            <h3>Nosotros</h3>
          </Link>
          <Button buttonStyle={"btn-navbar"}>
            {" "}
            <a
              href={` https://wa.me/${generalContact.number}?text=${generalContact.spanish.message}`}
              target="_blank"
              rel="noreferrer"
            >
              Reservá
            </a>
          </Button>
        </div>
      ) 
      : 
      (
        <div className="header-navbar">
          <Link className="navbar-link" to="/">
            <h3>Home</h3>
          </Link>

          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="dropdown"
            >
              Our experiences
              <svg
                className="flechitapabajo"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.08337L6.83333 6.91671L12.6667 1.08337"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu" id="experieciasDesplegable">             
                <Link to="/experiencia-maradona" className="dropdown-item">
                  Maradona Experience
                </Link>
            
                <Link to="/experiencia-boca-river" className="dropdown-item">
                  Boca - River Experience
                </Link>             
            </Dropdown.Menu>
          </Dropdown>

          <Link className="navbar-link" to="/contact">
            <h3>Contact</h3>
          </Link>
          <Link className="navbar-link" to="/nosotros">
            <h3>About Us</h3>
          </Link>
          <Button buttonStyle={"btn-navbar"}>
            {" "}
            <a
              href={` https://wa.me/${generalContact.number}?text=${generalContact.spanish.message}`}
              target="_blank"
              rel="noreferrer"
            >
              Reserve
            </a>
          </Button>
        </div>
      )
      }

      <div className="idiomas">
        <button className="btn-idioma" onClick={() => changeLang("castellano")}>
          ES
        </button>
        <div className="divisor"></div>
        <button className="btn-idioma" onClick={() => changeLang("english")}>
          EN
        </button>
      </div>

    </div>
  );
};
