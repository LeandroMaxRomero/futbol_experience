import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { Link, Element } from "react-scroll";
import { LenguaContext } from "../../context/LenguaProvider";

const TextGralExprience = ({ content }) => {
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
              <p>
                La primera parada es la <strong>Casa de D10S</strong>, la
                primera casa propia de Diego y su familia en el barrio porteño
                de La Paternal. Convertida hoy en museo, Diego vivió allí entre
                1978 y 1980, ubicada a pocos metros de donde inició su carrera,
                el club Argentinos Juniors. En ella se conservan los muebles, la
                decoración y electrodomésticos que te transportarán a aquella
                época. Además, exhibe todos los regalos que le hicieron en
                homenaje al Diego camisetas, fotos, estatuas, entre otros y
                cuenta con un museo que contiene todas sus reliquias.
              </p>
              <p>
                Posterior a ello, haremos una parada a pocas cuadras para
                almorzar en <strong>“La Cafetería de D10S”</strong>, lugar
                emblemático del barrio de “La Paternal” que reúne objetos,
                cuadros, fotos y recuerdos de Diego Armando Maradona. Una vez
                terminado el almuerzo, caminaremos otras dos cuadras hacia las
                inmediaciones del
                <strong>Estadio de Argentinos Juniors</strong>, lugar de murales
                de su época como jugador y entrenador en Argentinos Juniors,
                Napoli, Barcelona, la selección Argentina, entre otros. En el
                camino, ingresaremos al <strong>Santuario de Diego</strong>,
                donde entre cuatro paredes conviven camisetas de todos los
                colores, pelotas, botines, trofeos, estatuas y banderas que
                exhiben al Diego como una religión en sí misma. Tiene todo para
                convertirse en parada obligada de cualquier tour futbolero y no
                hace falta más que un ratito para disfrutarlo. Para cualquier
                maradoniano vale cada segundo.
              </p>
              <p>
                Por último, haremos el recorrido en el
                <strong> Museo de Argentinos Juniors</strong> “El Templo del
                Fútbol”, lugar donde Diego hizo su debut futbolístico a los 15
                años de edad. El destino quiso que muchos años después, jugará
                por primera vez con la camiseta de la selección Argentina y
                convierta su primer gol, otro de nuestros ídolos máximos como lo
                es Lionel Messi. Este museo fue realizado por hinchas y socios
                de la institución en su totalidad. Allí encontrarás fotos,
                trofeos, camisetas y objetos de valor para la historia del club.
                Se visitará las tribunas, los vestuarios, la sala de prensa y el
                campo de juego del estadio de Argentinos Juniors que lleva el
                nombre “Diego Armando Maradona”.
              </p>
            </>
          ) : (
            <>
              <p>
                The first stop is the <strong>Casa de D10S</strong>, the first
                home owned by Diego and his family in the Buenos Aires
                neighborhood of La Paternal. Converted today into a museum,
                Diego lived there between 1978 and 1980, located a few meters
                from where he began his career, the Argentinos Juniors club. In
                it, the furniture, decoration and appliances that will transport
                you to that time are preserved. In addition, it exhibits all the
                gifts that they gave him in homage to Diego (t-shirts, photos,
                statues, among others) and has a museum that contains all his
                relics.
              </p>

              <p>
                After that, we will make a stop a few blocks away to have lunch
                at <strong>“La Cafeteria de D10S” </strong>
                an emblematic place in the “La Paternal” neighborhood that
                gathers objects, paintings, photos and memories of Diego Armando
                Maradona. Once lunch is over, we will walk another two blocks to
                the vicinity of the <strong>Argentinos Juniors Stadium</strong>,
                place of murals from his time as a player and coach in
                Argentinos Juniors, Napoli, Barcelona, the Argentine team, among
                others. On the way, we will enter the{" "}
                <strong>Sanctuary of Diego</strong>, where jerseys of all
                colors, balls, loot, trophies, statues and flags coexist between
                four walls that exhibit Diego as a religion in itself. It has
                everything to become an obligatory stop on any soccer tour and
                it doesn’t take more than a little while to enjoy it. For any
                Maradonian, every second is worth it.
              </p>
              <p>
                Finally, we will tour the{" "}
                <strong>Museum of Argentine Juniors</strong> “El Templo del
                Fútbol”, where Diego made his soccer debut at the age of 15. As
                fate would have it, many years later, he will play for the first
                time with the jersey of the Argentina team and scored his first
                goal, another of our greatest idols such as Lionel Messi.This
                museum was made by fans and members of the institution in its
                entirety.There you will find photos, trophies, shirts and
                valuables for the history of the You will visit the stands, the
                changing rooms, the press room and the playing field of the
                Argentinos Juniors stadium that bears the name “Diego Armando
                Maradona”
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
TextGralExprience.propTypes = {
  content: PropTypes.node.isRequired,
};
export default TextGralExprience;
