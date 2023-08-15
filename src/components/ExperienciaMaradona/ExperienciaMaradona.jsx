import { useContext, useState } from "react";
import { LenguaContext } from "../../context/LenguaProvider";

import InfoExperience from "../InfoExperience/InfoExperience";
import TextGralExprience from "../TextGralExperience/TextGralExprience";
import DescriptionExperience from "../DescriptionExperience/DescriptionExperience";
import ActivitiesExperience from "../ActivitiesExperience/ActivitiesExperience";
import ImagesExperience from "../ImagesExperience/ImagesExperience";
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
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi    Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, nonsuscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus   ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
      Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
      iaculis arcu eros, eget tempus orci facilisis id.`,
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
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi    Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, nonsuscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus   ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
      Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
      iaculis arcu eros, eget tempus orci facilisis id.`,
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

  const [mobile, setMobile] = useState(false);

  let breakPoint = window.matchMedia("(min-width:920px)");
  console.log(breakPoint, onchange);
  const responsive = (e) => {
    if (e.matches) {
      setMobile(false);
      return false;
    }
    setMobile(true);
  };

  console.log(mobile);

  breakPoint.addEventListener("change", responsive);

  return (
    <>
      <CommonHeader ownStyle={"header-maradona"} experienceTittleES={"Experiencia Maradona"} experienceTittleEN={"Maradona Experience"} image={"img/banner-maradona-header.png"}/>
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
        {!mobile ? (
          <ImagesExperience imgs={content.spanish.imgs} />
        ) : (
          <Slider data={content.spanish.imgs} />
        )}

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
