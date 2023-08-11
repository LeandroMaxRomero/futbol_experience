
import '../../scss/layout/_home.scss';
import { Header } from "./Header/Header";
import { Prestaciones } from "./Prestaciones";
import { Experiencias } from "./Experiencias";
import { Reviews } from './Reviews';
import { Atributos } from './Atributos';
import { Entradas } from './Entradas';
import { FAQs } from './FAQs';
import { Reserva } from './Reserva';

// import { useEffect } from "react";
// import { useGeolocated } from "react-geolocated";
// import { toast } from "react-toastify";

export const HomePage = () => {
  

  /* Agregando funcion para mostrar pais desde donde se hace la consulta 
  a la pagina.
   */

  /* key del openwheater(despues se la enmascaramos) */
  // let key = "77894d358b535f22b04a3809825e5b62";

  // /* estado de dependendcia instalada useGeolocated */
  // const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  //   useGeolocated({
  //     positionOptions: {
  //       enableHighAccuracy: false,
  //     },
  //   });

  // /* funcion para obtener el pais a partir de iso de paises */
  // function getCountryName(countryCode) {
  //   fetch("./paises.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (countryCode !== "") {
  //         console.log(data[countryCode]);
  //         toast(`Gracias por visitarnos desde ${data[countryCode]} ✌`);
  //       }
  //     });
  // }

  // /* al cargar la pagina muestra el pais*/
  // useEffect(() => {
  //   if (isGeolocationAvailable) {
  //     if (isGeolocationEnabled) {
  //       if (coords) {
  //         fetch(
  //           `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${key}`
  //         )
  //           .then((res) => res.json())
  //           .then((data) => {
  //             getCountryName(data.sys.country);
  //           });
  //       }
  //     }
  //   }
  // }, [coords]);

  return (
    <div className='container-home'>

      <Header />
      <Prestaciones />
      <Experiencias />
      <Reviews />
      <Atributos />
      <Entradas />
      <FAQs />
      <Reserva/>
    </div>
  );
    
  
};
