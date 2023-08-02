import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";
import { Link } from "react-router-dom";
import '../../scss/layout/_header.scss';


export const NavBar = () => {
  const useLengua = () => useContext(LenguaContext);
  const {  setLengua, lengua } = useLengua();
  return (
    <div className="header">

      <div className="header-logo">
        <img src="./src/img/cancha.png"/>
      </div>
     {/* No sé si poner esta parte de JavaScript en un nuevo componente */}
      {
      lengua === 'castellano'
      ?
      <div className="header-navbar">
          <Link className="navbar-link" to="/"><h3>Inicio</h3></Link>
          <Link className="navbar-link" to="/aboutus"><h3>Sobre nosotros</h3></Link>
          <Link className="navbar-link" to="/contact"><h3>Contacto</h3></Link>
      </div>
      :
      <div className="header-navbar">
          <Link className="navbar-link" to="/"><h3>Home</h3></Link>
          <Link className="navbar-link" to="/aboutus"><h3>About us</h3></Link>
          <Link className="navbar-link" to="/contact"><h3>Contact</h3></Link>
      </div>  
      }
      
      <div className="header-banderas">
          <button className="btn-bandera" onClick={() => setLengua('castellano')}><img src="./src/img/spain.png"/></button> 
          <button className="btn-bandera" onClick={() => setLengua('english')}><img src="./src/img/united-kingdom.png"/></button>
        </div>

    </div>
  )
}
