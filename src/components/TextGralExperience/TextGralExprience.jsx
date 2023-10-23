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
                La primera parada es la <strong>Casa de D10S</strong>, la primera casa propia de Diego y su familia en el barrio porteño de La Paternal. Convertida hoy en museo, Diego vivió allí entre 1978 y 1980, ubicada a pocos metros de donde inició su carrera, el club Argentinos Juniors. En ella se conservan los muebles, la decoración y que te transportarán a aquella época. Además, exhibe todos los regalos que le hicieron en homenaje al Diego: camisetas, fotos, estatuas, entre otros y cuenta con un museo que contiene todas sus reliquias.
              </p>
              <p>
                Posterior a ello, haremos una parada a pocas cuadras para almorzar en <strong>“La Cafetería de D10S”</strong>, lugar emblemático del barrio de “La Paternal” que reúne objetos, cuadros, fotos y recuerdos de Diego Armando Maradona. Una vez terminado el almuerzo, caminaremos otras dos cuadras hacia las inmediaciones del <strong>Estadio de Argentinos Juniors</strong>, lugar de murales de su época como jugador y entrenador en Argentinos Juniors, Napoli, Barcelona, la selección Argentina, entre otros. En el camino, ingresaremos al <strong>Santuario de Diego</strong>, donde entre cuatro paredes conviven camisetas de todos los colores, pelotas, botines, trofeos, estatuas y exhiben al Diego como una religión en sí misma. Tiene todo para convertirse en parada obligada de cualquier tour futbolero y no hace falta más que un ratito para disfrutarlo. Para cualquier maradoniano vale cada segundo.
              </p>
              <p>
                Por último, haremos el recorrido en el <strong> Museo de Argentinos Juniors</strong> “El Templo del Fútbol”, lugar donde Diego hizo su debut futbolístico a los 15 años de edad. El destino quiso que muchos años después, Lionel Messi, jugara por primera vez con la camiseta de la selección Argentina y convierta su primer gol siendo otro de nuestros ídolos máximos. Este museo fue realizado por hinchas y socios de la institución en su totalidad. Allí encontrarás fotos, trofeos, camisetas y objetos de valor para la historia del club. Se visitará las tribunas, los vestuarios, la sala de prensa y el campo de juego del estadio de Argentinos Juniors que lleva el nombre “Diego Armando Maradona”.
              </p>
            </>
          ) : (
            <>
              <p>
                Our first stop is <strong>D10S’s house</strong>, the first house that Diego and his family owned in the Buenos Aires neighborhood of La Paternal. Now turned into a museum, Diego lived here between 1978 and 1980, located a few meters from where he started his career, the Argentinos Juniors Club. It preserves the furniture, decorations and household appliances, which will transport you back to that point in history. In addition, it exhibits all the gifts that were made as a tribute to Diego, shirts, pictures, statues, among others, and it even has a museum that contains all his relics.
              </p>

              <p>
                Afterwards, we will stop a few blocks away for lunch at <strong>“La Cafeteria de D10S”</strong>, an emblematic spot in the “La Paternal” neighborhood that collects objects, paintings, pictures and memorabilia of Diego Armando Maradona. After lunch, we will walk another two blocks to the <strong>Argentinos Juniors stadium</strong>, where there are murals from his time as a player and coach in Argentinos Juniors, Napoli, Barcelona, the Argentina national team, among others. On the way we will enter <strong>Diego’s Sanctuary</strong>, where within four walls you’ll find shirts of all colors, balls, football boots, trophies, statues and flags that showcase Diego as a religion in itself. It has everything to become a mandatory stop on any football tour and it only takes a short time to enjoy. For any Maradona fan, it is worth every second.
              </p>
              <p>
                Finally, we will visit the <strong>Argentinos Juniors Museum</strong> “El Templo del Fútbol”, “The Football Temple” where Diego made his football debut at the age of 15. Many years later, in the same stadium, Lionel Messi would play for the first time in the Argentina national team shirt and score his first goal, another of our greatest idols. This museum was created entirely by fans and members of the institution. You will find pictures, trophies, shirts and valuable historic club objects. You will visit the stands, the dressing rooms, the press room and the field of the “Diego Armando Maradona” Argentinos Juniors stadium.
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
