import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { Link, Element } from "react-scroll";
import { LenguaContext } from "../../context/LenguaProvider";

const TextGralExperienceRiver = ({ content }) => {
  const [showContent, setShowContent] = useState(false);
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  const seeMore = () => {
    setShowContent(true);
  };

  const seeLess = () => {
    setShowContent(false);
  };

  return (
    <Element name="top" className="text-container">
      <h2>{content[0]}</h2>
      <p>{content[1]}</p>
      {!showContent && (
        <button onClick={() => seeMore(true)}>
          {lang === "castellano" ? "Ver más" : "See more"}{" "}
          <i className="material-icons">arrow_drop_down</i>
        </button>
      )}
      {showContent && (
        <>
          {lang === "castellano" ? (
            <>
              {" "}
              <p>
                La primera parada es el{" "}
                <strong>Museo de la pasión Boquense</strong>, donde tendrás
                acceso a ver cortometrajes acerca de la historia del club,
                conocerás a las principales figuras y verás las camisetas que
                tuvo con el paso del tiempo, trofeos y objetos invaluables que
                cuentan historias. Sumado a ello, te brindaremos un tiempo para
                que puedas ver la tienda oficial del club.
              </p>
              <p>
                Posterior a ello, continuaremos en el pintoresco barrio de La
                Boca para almorzar en <strong>“Lo de Diego”</strong>, un bar
                temático que habla por sí solo. Ambientado de fútbol con piso de
                césped sintético, asientos con butacas de la cancha y un sinfín
                de imágenes y réplicas, este lugar representa a uno de los
                ídolos máximos de nuestro fútbol argentino como lo es Diego
                Armando Maradona. Una vez terminado el almuerzo, nos tomaremos
                un rato para visitar <strong>“Caminito”</strong>, una calle
                museo y un pasaje tradicional de gran valor cultural y turístico
                de nuestro país, lugar donde se mezcla el fútbol, el arte y el
                tango.
              </p>
              <p>
                Después de allí, nos dirigiremos a la zona de Nuñez para
                ingresar al <strong>Museo de River</strong>. A través de un
                túnel del tiempo, conoceremos los más de 100 años de historia
                del club, los principales jugadores y leyendas que representaron
                la institución, su vitrina de trofeos y camisetas a lo largo del
                tiempo. Además, veremos dos cortos que reflejan la grandeza de
                River. Y una de las perlitas para culminar, el{" "}
                <strong>“Estadio Más Monumental”</strong>. Vas a tener la
                oportunidad de conocer las tribunas, el vestuario y el campo de
                juego del estadio más grande del país, aquel que recibe a más de
                80.000 hinchas todos los domingos. Para finalizar, te
                brindaremos un tiempo para que puedas ver la tienda oficial del
                club.
              </p>
            </>
          ) : (
            <>
              <p>
                Our first stop is the <strong>Boca Junior Museum</strong>, where you will have access to short films about the club’s history, you’ll get to know its main characters and see the jerseys they wore over the years, trophies they won and priceless objects that tell stories. You will also have the opportunity to visit the club´s official store.
              </p>
              <p>
                Our next stop is the neighborhood of La Boca for lunch at <strong>“Lo de Diego”</strong>, a themed bar that speaks for itself. With a football atmosphere, artificial turf, seats from the field and countless images and replicas, this place represents one of the greatest idols of our Argentinean football, Diego Armando Maradona. After lunch, we will take some time to visit the <strong>“Caminito”</strong>, a museum street and traditional passage of great cultural value in our country, a place where football, art and tango mix.
              </p>
              <p>
                Afterwards, we will go to the Nuñez area to enter the <strong>River Museum</strong>. Through a time tunnel, we will learn about the more than 100 years of history of the club, the main players and legends that have represented the institution, its trophy cabinet and jerseys throughout time. We will also watch two short films that reflect the greatness of River. And one of the highlights, the <strong>“Estadio Más Monumental”</strong>, the monumental stadium. You will have the opportunity to visit the stands, the locker room and the field of the largest stadium in the country, which welcomes more than 80,000 fans every Sunday. Finally, you will have time to visit the official club store.
              </p>
            </>
          )}
        </>
      )}
      {showContent && (
        <button>
          <Link to="top" onClick={() => seeLess(false)}>
            {lang === "castellano" ? "Ver menos" : "See less"}
            <i className="material-icons">arrow_drop_up</i>
          </Link>
        </button>
      )}
    </Element>
  );
};
TextGralExperienceRiver.propTypes = {
  content: PropTypes.node.isRequired,
};
export default TextGralExperienceRiver;
