import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";
import '../../scss/layout/_home.scss';

// import { useEffect } from "react";
// import { useGeolocated } from "react-geolocated";
// import { toast } from "react-toastify";

export const HomePage = () => {
  const { lang } = useContext(LenguaContext);

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
    <div className="container container-home">
      {lang === "castellano" ? (
        <section>
          <h1>Bienvenidos</h1>
          <h3>
            No había sido un error; recordaba perfectamente la posición de las
            piezas; recordaba también que su movimiento no sólo liberaba al rey
            del jaque, sino que ponía a las negras a la ofensiva; recordaba, por
            supuesto, que el movimiento era absolutamente válido y que, al
            momento de pensarlo, le había parecido obvio, casi fatal. El
            problema era que, al día siguiente, al querer reproducir la jugada,
            no sólo descubrió que la había olvidado, sino que era por completo
            imposible: el rey negro no sólo estaba en jaque, sino en jaque mate
          </h3>
        </section>
      ) : (
        <section>
          <h1>Welcome</h1>
          <h3>
            It hadnt been an error; I remembered perfectly the position of the
            pieces; he also remembered that his movement on the ground freed the
            jack king, a bell that put black women on the offensive; he
            remembered, of course, that the move was absolutely valid and that,
            at the moment of thinking about it, it had seemed obvious, even
            fatal. The problem was that, the next day, when wanting to reproduce
            the game, he didnt just discover that he had forgotten it, but that
            was completely impossible: the black king wasnt just in jack, bell
            in jack mate
          </h3>
        </section>
      )}
    </div>
  );
};
