import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";


export const Prestaciones = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  return (
    <div className="contenedor-prestaciones-noMobile">
    {
        lang==='castellano'
        ?
        <section className="container-prestaciones">
          
          <div className="prestaciones-box prestacionesUno">
          <img src="img/experiencia1.png" alt="Experiencia inolvidable" className="imagen-fondo-prestaciones"/>
            <p>Experiencia<br></br>inolvidable</p>
          </div>

          <div className="prestaciones-box prestacionesDos">
            <img src="img/experiencia2.png" alt="Camiseta de la selección argentina de regalo" className="imagen-fondo-prestaciones"/>
              <p>Camiseta<br></br>de regalo</p>
          </div>

          <div className="prestaciones-box prestacionesTres">
            <img src="img/experiencia3.png" alt="Comida local" className="imagen-fondo-prestaciones"/>
            <p>Comida<br></br>local</p>
          </div>

          <div className="prestaciones-box prestacionesCuatro">
          <img src="img/experiencia4.png" alt="Transporte incluido" className="imagen-fondo-prestaciones"/>
            <p>Transporte<br></br>incluido</p>
          </div>

        </section>
        :
        <section className="container-prestaciones">

          <div className="prestaciones-box prestacionesUno">
          <img src="img/experiencia1.png" alt="Experiencia inolvidable" className="imagen-fondo-prestaciones"/>
            <p>Unforgettable<br></br>experience</p>
          </div>

          <div className="prestaciones-box prestacionesDos">
            <img src="img/experiencia2.png" alt="Camiseta de la selección argentina de regalo" className="imagen-fondo-prestaciones"/>
              <p>Argentina’s football<br></br>shirt included</p>
          </div>

          <div className="prestaciones-box prestacionesTres">
            <img src="img/experiencia3.png" alt="Comida local" className="imagen-fondo-prestaciones"/>
            <p>Local<br></br>food</p>
          </div>

          <div className="prestaciones-box prestacionesCuatro">
          <img src="img/experiencia4.png" alt="Transporte incluido" className="imagen-fondo-prestaciones"/>
            <p>Transportation<br></br>included</p>
          </div>

        </section>
    }

    </div>
  )
}
