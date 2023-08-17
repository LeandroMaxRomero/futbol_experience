import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";

import InfoExperience from "../InfoExperience/InfoExperience";
import TextGralExprience from "../TextGralExperience/TextGralExprience";
import DescriptionExperience from "../DescriptionExperience/DescriptionExperience";
import ActivitiesExperience from "../ActivitiesExperience/ActivitiesExperience";
/* import ImagesExperience from "../ImagesExperience/ImagesExperience"; */
import ReserveExperience from "../ReserveExperience/ReserveExperience";
import CuriosityExperience from "../CuriosityExpererience/CuriosityExperience";
import { CommonHeader } from "../CommonHeader/CommonHeader";
import { Slider } from "../Slider/Slider";

export const ExperienciaMaradona = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  const content = {
    spanish: {
      infoExperience: [
        "Ubicación",
        "Buenos Aires",
        "Duración",
        "4 horas",
        "Idiomas",
        "Español e Inglés",
        "Días disponibles",
        "Martes y Jueves",
      ],
      textExperience: [
        "Sobre la experiencia",
        `En esta experiencia, podrás conocer la intimidad de D10S o como le decían sus amigos, “Pelusa”.
         Muchos lo consideran como el número uno del fútbol mundial y el mayor ídolo entre los argentinos.
          “El Diego vivió diez vidas en una”. Si querés conocer más acerca de la vida de película de Diego Armando Maradona, 
          esta experiencia es para vos.`,
        `La primera parada es la Casa de D10S, la primera casa propia de Diego y su familia en el barrio porteño de La Paternal. Convertida hoy en museo, Diego vivió allí entre 1978 y 1980, ubicada a pocos metros de donde inició su carrera, el club Argentinos Juniors. En ella se conservan los muebles, la decoración y electrodomésticos que te transportarán a aquella época. Además, exhibe todos los regalos que le hicieron en homenaje al Diego (camisetas, fotos, estatuas, entre otros)
           y cuenta con un museo que contiene todas sus reliquias.`,
        `Posterior a ello, haremos una parada a pocas cuadras para almorzar en “La Cafetería de D10S”, lugar emblemático del barrio de “La Paternal” que reúne objetos, cuadros, fotos y recuerdos de Diego Armando Maradona. Una vez terminado el almuerzo, caminaremos otras dos cuadras hacia las inmediaciones del Estadio de Argentinos Juniors, lugar de murales de su época como jugador y entrenador en Argentinos Juniors, Napoli, Barcelona, la selección Argentina, entre otros. En el camino, ingresaremos al Santuario de Diego, donde entre cuatro paredes conviven camisetas de todos los colores, pelotas, botines, trofeos, estatuas y banderas que exhiben al Diego como una religión en sí misma. Tiene todo para convertirse en parada obligada de cualquier tour futbolero y no hace falta más que un ratito para disfrutarlo. 
           Para cualquier maradoniano vale cada segundo.`,
        `Por último, haremos el recorrido en el Museo de Argentinos Juniors “El Templo del Fútbol", lugar donde Diego hizo su debut futbolístico a los 15 años de edad. El destino quiso que muchos años después, jugará por primera vez con la camiseta de la selección Argentina y convierta su primer gol, otro de nuestros ídolos máximos como lo es Lionel Messi. Este museo fue realizado por hinchas y socios de la institución en su totalidad. Allí encontrarás fotos, trofeos, camisetas y objetos de valor para la historia del club. Se visitará las tribunas, los vestuarios, la sala de prensa y el campo de juego del estadio de Argentinos Juniors que lleva el nombre “Diego Armando Maradona”. `,
      ],

      descriptionExperience: [
        "img/Group 39849.png",
        "img/IMG_4716.png",
        "img/IMG_4727.png",
        "img/IMG_4731.png",
        "img/IMG_4724.png",
      ],
      activitiesExperience: [
        "¿Qué incluye la experiencia?",
        "Traslados",
        "Comidas",
        "Guía Profesional Fan del Fútbol Argentino",
        "Camiseta de la Selección Argentina",
        "Cancionero de la Hinchada",
        "Videos del Fútbol Argentino",
        "Actividades Recreativas Interactivas",
        "Souvenirs Package",
      ],
      reserveExperience: [
        "¡Quiero vivir la Experiencia Maradona!",
        "Reservá tu Experiencia",
      ],
      curiosityExperience: [
        "Sabías que ...",
        "img/image 13.png",
        "Argentinos Juniors",
        `Fundado en 1904 en Buenos Aires, ha sido un semillero de talento.
      Diego Maradona comenzó su carrera profesional acá, dejando una
      huella perdurable. A lo largo de los años, el club ha contribuido al
      fútbol argentino y ha formado jugadores destacados. El estadio Diego
      Armando Maradona, con su nombre, refleja la pasión de los
      aficionados. Argentinos Juniors es un símbolo del fútbol argentino.`,
        "img/diego_armando_maradona.png",
        "Diego Armando Maradona",
        `Nacido en 1960, es una leyenda del fútbol. Destacó en el Mundial de
      1986 con la "Mano de Dios" y el "Gol del Siglo". Jugó en Boca
      Juniors, FC Barcelona, entre otros, dejando una marca duradera. Su
      apogeo en el Napoli, donde logró títulos y se convirtió en ícono,
      resalta su genialidad. Maradona trasciende el fútbol, siendo
      recordado por su talento y complejidad humana.`,
      ],
      imgs: [
        {
          id: 1,
          url: "img/maradona_img/IMG_4743 2.png",
          name: "maradona con playera azul",
        },
        {
          id: 2,
          url: "img/maradona_img/IMG_4742 2.png",
          name: "maradona abrazo seleccion argentina",
        },
        {
          id: 3,
          url: "img/maradona_img/IMG_4740 2.png",
          name: "maradona con gorra roja",
        },
        {
          id: 4,
          url: "img/maradona_img/IMG_4738.png",
          name: "maradona con playera roja",
        },
        {
          id: 5,
          url: "img/maradona_img/IMG_4739.png",
          name: "maradona con cabello largo",
        },
        {
          id: 6,
          url: "img/maradona_img/IMG_4719.png",
          name: "casa de maradona interior",
        },

        {
          id: 7,
          url: "img//maradona_img/IMG_4716.png",
          name: "casa de maradona fachada",
        },
        {
          id: 8,
          url: "img/maradona_img/IMG_4731.png",
          name: "playeras de maradona en pared colgadas",
        },

        {
          id: 9,
          url: "img/maradona_img/IMG_4730.png",
          name: "interior de casa de maradona",
        },
        {
          id: 10,
          url: "img/maradona_img/IMG_4727.png",
          name: "la casa de dios",
        },
      ],
    },
    english: {
      infoExperience: [
        "Ubication",
        "Buenos Aires",
        "Duration",
        "4 hours",
        "Languages",
        "Spanish and English",
        "Available days",
        "Tuesday and Thursday",
      ],
      textExperience: [
        "About Experience",
        `En esta experiencia, podrás conocer la intimidad de D10S o como le decían sus amigos, “Pelusa”.
         Muchos lo consideran como el número uno del fútbol mundial y el mayor ídolo entre los argentinos.
          “El Diego vivió diez vidas en una”. Si querés conocer más acerca de la vida de película de Diego Armando Maradona, 
          esta experiencia es para vos.`,
        `La primera parada es la Casa de D10S, la primera casa propia de Diego y su familia en el barrio porteño de La Paternal. Convertida hoy en museo, Diego vivió allí entre 1978 y 1980, ubicada a pocos metros de donde inició su carrera, el club Argentinos Juniors. En ella se conservan los muebles, la decoración y electrodomésticos que te transportarán a aquella época. Además, exhibe todos los regalos que le hicieron en homenaje al Diego (camisetas, fotos, estatuas, entre otros)
           y cuenta con un museo que contiene todas sus reliquias.`,
        `Posterior a ello, haremos una parada a pocas cuadras para almorzar en “La Cafetería de D10S”, lugar emblemático del barrio de “La Paternal” que reúne objetos, cuadros, fotos y recuerdos de Diego Armando Maradona. Una vez terminado el almuerzo, caminaremos otras dos cuadras hacia las inmediaciones del Estadio de Argentinos Juniors, lugar de murales de su época como jugador y entrenador en Argentinos Juniors, Napoli, Barcelona, la selección Argentina, entre otros. En el camino, ingresaremos al Santuario de Diego, donde entre cuatro paredes conviven camisetas de todos los colores, pelotas, botines, trofeos, estatuas y banderas que exhiben al Diego como una religión en sí misma. Tiene todo para convertirse en parada obligada de cualquier tour futbolero y no hace falta más que un ratito para disfrutarlo. 
           Para cualquier maradoniano vale cada segundo.`,
        `Por último, haremos el recorrido en el Museo de Argentinos Juniors “El Templo del Fútbol", lugar donde Diego hizo su debut futbolístico a los 15 años de edad. El destino quiso que muchos años después, jugará por primera vez con la camiseta de la selección Argentina y convierta su primer gol, otro de nuestros ídolos máximos como lo es Lionel Messi. Este museo fue realizado por hinchas y socios de la institución en su totalidad. Allí encontrarás fotos, trofeos, camisetas y objetos de valor para la historia del club. Se visitará las tribunas, los vestuarios, la sala de prensa y el campo de juego del estadio de Argentinos Juniors que lleva el nombre “Diego Armando Maradona”. `,
      ],
      descriptionExperience: [
        "img/Group 39849.png",
        "img/IMG_4716.png",
        "img/IMG_4727.png",
        "img/IMG_4731.png",
        "img/IMG_4724.png",
      ],

      activitiesExperience: [
        "What does the experience include?",
        "Transfers",
        "Foods",
        "Professional Fan Guide to Argentine Soccer",
        "T-shirt of the Argentine National Team",
        "Songbook of the Fans",
        "Videos of Argentine Soccer",
        "Interactive Recreational Activities",
        "Souvenir Package",
      ],
      reserveExperience: [
        "I want to live the Maradona Experience!",
        "Reserve yoyr next experience",
      ],
      curiosityExperience: [
        "Did you know ...",
        "img/image 13.png",
        "Argentino Juniors",
        `Founded in 1904 in Buenos Aires, it has been a hotbed of talent.
       Diego Maradona began his professional career here, leaving a
       lasting imprint Over the years, the club has contributed to the
       Argentine soccer and has trained outstanding players. diego stadium
       Armando Maradona, with his name, reflects the passion of the
       fans. Argentinos Juniors is a symbol of Argentine soccer.`,
        "img/diego_armando_maradona.png",
        "Diego Armando Maradona",
        `Born in 1960, he is a football legend. He excelled at the World Cup
       1986 with the "Hand of God" and the "Goal of the Century". He played in Boca
       Juniors, FC Barcelona, among others, leaving a lasting mark. His
       heyday at Napoli, where he won titles and became an icon,
       highlights his genius. Maradona transcends football, being
       remembered for his talent and human complexity.`,
      ],
    },
  };

  /* para cambiar de slider a imageExperience */

  /*  const [mobile, setMobile] = useState(false);

  let breakPoint = window.matchMedia("(min-width:920px)");

  const responsive = (e) => {
    if (e.matches) {
      setMobile(false);
      return false;
    }
    setMobile(true);
  };

  breakPoint.addEventListener("change", responsive); */
  ////////////////// */ /////////////////////////////////
  /*  console.log(window.innerWidth);
  useEffect(() => {
    if (window.innerWidth >= 920) {
      setMobile(true);
    }
    if (window.innerWidth < 920) {
      setMobile(false);
    }
  }, []); */
  return (
    <>
      <CommonHeader
        ownStyle={"header-maradona"}
        experienceTittleES={"Experiencia Maradona"}
        experienceTittleEN={"Maradona Experience"}
        image={"img/banner-maradona-header.png"}
      />
      <div className="maradona-container">
        <InfoExperience
          content={
            lang === "castellano"
              ? content.spanish.infoExperience
              : content.english.infoExperience
          }
        />
        <TextGralExprience
          content={
            lang === "castellano"
              ? content.spanish.textExperience
              : content.english.textExperience
          }
        />
        <DescriptionExperience
          content={
            lang === "castellano"
              ? content.spanish.descriptionExperience
              : content.english.descriptionExperience
          }
        />
        <ActivitiesExperience
          content={
            lang === "castellano"
              ? content.spanish.activitiesExperience
              : content.english.activitiesExperience
          }
        />
        {/*  {mobile ? (
          <ImagesExperience imgs={content.spanish.imgs} />
        ) : (
          <Slider data={content.spanish.imgs} />
        )} */}

        <Slider data={content.spanish.imgs} />
        <ReserveExperience
          content={
            lang === "castellano"
              ? content.spanish.reserveExperience
              : content.english.reserveExperience
          }
        />
        <CuriosityExperience
          content={
            lang === "castellano"
              ? content.spanish.curiosityExperience
              : content.english.curiosityExperience
          }
        />
      </div>
    </>
  );
};
