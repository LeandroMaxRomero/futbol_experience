import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";

import InfoExperience from "../InfoExperience/InfoExperience";
import TextGralExprience from "../TextGralExperience/TextGralExprience";
import DescriptionExperience from "../DescriptionExperience/DescriptionExperience";
import ActivitiesExperience from "../ActivitiesExperience/ActivitiesExperience";
import ImagesExperience from "../ImagesExperience/ImagesExperience";
import ReserveExperience from "../ReserveExperience/ReserveExperience";
import CuriosityExperience from "../CuriosityExpererience/CuriosityExperience";

export const RiverExperience = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  const content = {
    spanish: {
      infoExperience: [
        "Ubicación",
        "Buenos Aires",
        "Duración",
        "6 horas",
        "Idiomas",
        "Español e Inglés",
        "Días disponibles",
        "Lunes, Miércoles y Viernes",
      ],
      textExperience: [
        "Sobre la experiencia",
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi    Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, nonsuscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus   ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
      Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
      iaculis arcu eros, eget tempus orci facilisis id.`,
      ],
      descriptionExperience: [
        "./src/img/Group 39814.png",
        "./src/img/IMG_4594 1.png",
        "./src/img/ggg.png",
        "./src/img/IMG_4859 1.png",
        "./src/img/IMG_4983 1.png",
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
        "¡Quiero vivir la Experiencia Boca-River!",
        "Reservá tu Experiencia",
      ],
      curiosityExperience: [
        "Sabías que ...",
        "./src/img/boca-juniors-1712628_1920 1.png",
        "Boca Juniors",
        `Fundado en 1905 en Buenos Aires, el tres veces campeón del mundo, Boca Juniors, 
        es un icónico club de fútbol. Con una historia rica, ha sido cuna de talento y pasión. La Bombonera, 
        resuena con la devoción de los fanáticos. Figuras legendarias como Maradona dejaron una huella , simbolizando 
        su grandeza. Además, la presencia de Riquelme, con su magia en la cancha, agrega a la mística del club. Boca Juniors 
        es un emblema de triunfo y rivalidad. Su legado inspira a fans de todo el mundo.`,
        "./src/img/IMG_4789 1.png",
        "River Plate",
        `Fundado en 1901 en Buenos Aires, cuatro veces campeon de América, “El millonario”, 
        destaca como otro de los grandes clubes. Gallardo, con su influencia como entrenador, ha dejado
         una huella imborrable en River, personificando su grandeza. Sumado a esto, su travesía está llena de éxitos 
         y rivalidades, como el mítico Superclásico con Boca, trascendiendo más allá del terreno de juego. Con logros
          locales e internacionales, River Plate encarna la excelencia y pasión en el fútbol.`,
      ],
      imgs: [
        {
          id: 1,
          url: "./src/img/river-boca/IMG_4669 2.png",
          name: "maradona con playera azul",
        },
        {
          id: 2,
          url: "./src/img/river-boca/IMG_4606 2.png",
          name: "maradona abrazo seleccion argentina",
        },
        {
          id: 3,
          url: "./src/img/river-boca/IMG_4672 2.png",
          name: "maradona con gorra roja",
        },
        {
          id: 4,
          url: "./src/img/river-boca/IMG_4944 1.png",
          name: "maradona con playera roja",
        },
        {
          id: 5,
          url: "./src/img/river-boca/IMG_4794 1.png",
          name: "maradona con cabello largo",
        },
        {
          id: 6,
          url: "./src/img/river-boca/IMG_4656 2.png",
          name: "casa de maradona interior",
        },

        {
          id: 7,
          url: "./src/img//river-boca/IMG_4678 2.png",
          name: "casa de maradona fachada",
        },
        {
          id: 8,
          url: "./src/img/river-boca/IMG_4939 1.png",
          name: "playeras de maradona en pared colgadas",
        },

        {
          id: 9,
          url: "./src/img/river-boca/IMG_4899 1.png",
          name: "interior de casa de maradona",
        },
        {
          id: 10,
          url: "./src/img/river-boca/IMG_4965 1.png",
          name: "la casa de dios",
        },
      ],
    },
    english: {
      infoExperience: [
        "Ubication",
        "Buenos Aires",
        "Duration",
        "6 hours",
        "Languages",
        "Spanish and English",
        "Available days",
        "Monday Wednesday and Friday",
      ],
      textExperience: [
        "About Experience",
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi    Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, nonsuscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus   ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
      Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
      iaculis arcu eros, eget tempus orci facilisis id.`,
      ],

      descriptionExperience: [
        "./src/img/Group 39814.png",
        "./src/img/IMG_4594 1.png",
        "./src/img/ggg.png",
        "./src/img/IMG_4859 1.png",
        "./src/img/IMG_4983 1.png",
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
        "I want to live the Boca-River Experience!",
        "Reserve yoyr next experience",
      ],
      curiosityExperience: [
        "Did you know ...",
        "./src/img/boca-juniors-1712628_1920 1.png",
        "Boca Juniors",
        `Founded in 1905 in Buenos Aires, the three-time world champion, Boca Juniors,
        is an iconic football club. With a rich history, it has been the cradle of talent and passion. The Bombonera,
        resonates with the devotion of the fans. Legendary figures like Maradona left their mark, symbolizing
        his greatness. In addition, the presence of Riquelme, with his magic on the field, adds to the mystique of the club. Boca Juniors
        it is an emblem of triumph and rivalry. His legacy inspires fans around the world.`,
        "./src/img/IMG_4789 1.png",
        "River Plate",
        `Founded in 1901 in Buenos Aires, four times champion of America, "El millonario",
        It stands out as another of the great clubs. Gallardo, with his influence as a coach, has left
         an indelible mark on River, personifying his greatness. Added to this, his journey is full of successes
         and rivalries, such as the mythical Superclásico with Boca, transcending beyond the pitch. with achievements
          local and international, River Plate embodies excellence and passion in soccer.`,
      ],
    },
  };

  return (
    <>
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
        <ImagesExperience imgs={content.spanish.imgs} />
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
