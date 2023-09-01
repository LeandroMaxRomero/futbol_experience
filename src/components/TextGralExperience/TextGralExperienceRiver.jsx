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
                The first stop is the{" "}
                <strong> Museo de la pasión Boquense</strong>, where you will
                have access to watch short films about the history of the club,
                you will meet the main figures and you will see the shirts it
                had over time, trophies and priceless objects that tell stories.
                In addition to this, we will give you time so that you can see
                the official club store.
              </p>
              <p>
                After that, we will continue in the picturesque neighborhood of
                La Boca to have lunch at <strong>“Lo de Diego”</strong>, a theme
                bar that speaks for itself. Soccer-themed with a synthetic grass
                floor, seats with field seats and endless images and replicas,
                this place represents one of the greatest idols of our Argentine
                soccer, Diego Armando Maradona. Once lunch is over, we will take
                some time to visit <strong>“Caminito”</strong>, a museum street
                and a traditional passage of great cultural and tourist value in
                our country, a place where soccer, art and tango are mixed.
              </p>
              <p>
                After there, we will go to the Nuñez area to enter the{" "}
                <strong>River Museum</strong>. Through a tunnel of time, we will
                learn about the club’s more than 100 years of history, the main
                players and legends that represented the institution, its trophy
                case and shirts over time. In addition, we will see two shorts
                that reflect the greatness of River. And one of the pearls to
                culminate, the <strong>“Most Monumental Stadium”</strong>. You
                will have the opportunity to visit the stands, the dressing room
                and the playing field of the largest stadium in the country, the
                one that receives more than 80,000 fans every Sunday. Finally,
                we will give you some time so that you can see the official club
                store.
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
