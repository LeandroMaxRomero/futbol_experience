import { useContext, useEffect } from "react";
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
import * as Scroll from "react-scroll";

export const RiverExperience = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  let scroll = Scroll.animateScroll;

  useEffect(() => {
    scroll.scrollToTop();
  });

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
        `En esta experiencia, podrás adentrarte en la historia de los dos clubes más grandes de Argentina: Boca y River, rivales de toda una vida. Si querés conocer más acerca de quienes conforman el clásico más pasional del mundo, esta experiencia es para vos.`,
        `La primera parada es el Museo de la pasión Boquense, donde tendrás acceso a ver cortometrajes acerca de la historia del club, conocerás a las principales figuras y verás las camisetas que tuvo con el paso del tiempo, trofeos y objetos invaluables que cuentan historias. Sumado a ello, te brindaremos un tiempo para que puedas ver la tienda oficial del club.`,
        `Posterior a ello, continuaremos en el pintoresco barrio de La Boca para almorzar en “Lo de Diego”, un bar temático que habla por sí solo. Ambientado de fútbol con piso de césped sintético, asientos con butacas de la cancha y un sinfín de imágenes y réplicas, este lugar representa a uno de los ídolos máximos de nuestro fútbol argentino como lo es Diego Armando Maradona. Una vez terminado el almuerzo, nos tomaremos un rato para visitar “Caminito”, una calle museo y un pasaje tradicional de gran valor cultural y turístico de nuestro país, lugar donde se mezcla el fútbol, el arte y el tango.`,
        ` Después de allí, nos dirigiremos a la zona de Nuñez para ingresar al Museo de River. A través de un túnel del tiempo, conoceremos los más de 100 años de historia del club, los principales jugadores y leyendas que representaron la institución, su vitrina de trofeos y camisetas a lo largo del tiempo. Además, veremos dos cortos que reflejan la grandeza de River. Y una de las perlitas para culminar, el “Estadio Más Monumental”. Vas a tener la oportunidad de conocer las tribunas, el vestuario y el campo de juego del estadio más grande del país, aquel que recibe a más de 80.000 hinchas todos los domingos. Para finalizar, te brindaremos un tiempo para que puedas ver la tienda oficial del club. `,
      ],
      descriptionExperience: [
        "img/Group 39814.png",
        "img/ggg.png",
        "img/IMG_4594 1.png",
        "img/IMG_4983 1.png",
        "img/IMG_4859 1.png",
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
        "img/boca-juniors-1712628_1920 1.png",
        "Boca Juniors",
        `Fundado en 1905 en Buenos Aires, el tres veces campeón del mundo, Boca Juniors, 
        es un icónico club de fútbol. Con una historia rica, ha sido cuna de talento y pasión. La Bombonera, 
        resuena con la devoción de los fanáticos. Figuras legendarias como Maradona dejaron una huella , simbolizando 
        su grandeza. Además, la presencia de Riquelme, con su magia en la cancha, agrega a la mística del club. Boca Juniors 
        es un emblema de triunfo y rivalidad. Su legado inspira a fans de todo el mundo.`,
        "img/IMG_4789 1.png",
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
          url: "img/river-boca/IMG_4669 2.png",
          name: "maradona con playera azul",
        },
        {
          id: 2,
          url: "img/river-boca/IMG_4606 2.png",
          name: "maradona abrazo seleccion argentina",
        },
        {
          id: 3,
          url: "img/river-boca/IMG_4672 2.png",
          name: "maradona con gorra roja",
        },
        {
          id: 4,
          url: "img/river-boca/IMG_4944 1.png",
          name: "maradona con playera roja",
        },
        {
          id: 5,
          url: "img/river-boca/IMG_4794 1.png",
          name: "maradona con cabello largo",
        },
        {
          id: 6,
          url: "img/river-boca/IMG_4656 2.png",
          name: "casa de maradona interior",
        },

        {
          id: 7,
          url: "img//river-boca/IMG_4678 2.png",
          name: "casa de maradona fachada",
        },
        {
          id: 8,
          url: "img/river-boca/IMG_4939 1.png",
          name: "playeras de maradona en pared colgadas",
        },

        {
          id: 9,
          url: "img/river-boca/IMG_4899 1.png",
          name: "interior de casa de maradona",
        },
        {
          id: 10,
          url: "img/river-boca/IMG_4965 1.png",
          name: "la casa de dios",
        },
      ],
      contact: {
        number: "+5491126597630",
        message: "hola, estoy interesado en reservar la experiencia Boca-River",
      },
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
        `In this experience, you will be able to delve into the history of the two biggest clubs in Argentina: Boca and River, rivals of a lifetime. If you want to know more about those who make up the most passionate classic in the world, this experience is for you.`,
        `The first stop is the Museo de la pasión Boquense, where you will have access to watch short films about the history of the club, you will meet the main figures and you will see the shirts it had over time, trophies and priceless objects that tell stories. In addition to this, we will give you time so that you can see the official club store.`,
        `After that, we will continue in the picturesque neighborhood of La Boca to have lunch at "Lo de Diego", a theme bar that speaks for itself. Soccer-themed with a synthetic grass floor, seats with field seats and endless images and replicas, this place represents one of the greatest idols of our Argentine soccer, Diego Armando Maradona. Once lunch is over, we will take some time to visit "Caminito", a museum street and a traditional passage of great cultural and tourist value in our country, a place where soccer, art and tango are mixed.`,
        ` After there, we will go to the Nuñez area to enter the River Museum. Through a tunnel of time, we will learn about the club's more than 100 years of history, the main players and legends that represented the institution, its trophy case and shirts over time. In addition, we will see two shorts that reflect the greatness of River. And one of the pearls to culminate, the "Most Monumental Stadium". You will have the opportunity to visit the stands, the dressing room and the playing field of the largest stadium in the country, the one that receives more than 80,000 fans every Sunday. Finally, we will give you some time so that you can see the official club store. `,
      ],

      descriptionExperience: [
        "img/Group 39814.png",
        "img/IMG_4594 1.png",
        "img/ggg.png",
        "img/IMG_4859 1.png",
        "img/IMG_4983 1.png",
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
        "Reserve your next experience",
      ],
      curiosityExperience: [
        "Did you know ...",
        "img/boca-juniors-1712628_1920 1.png",
        "Boca Juniors",
        `Founded in 1905 in Buenos Aires, the three-time world champion, Boca Juniors,
        is an iconic football club. With a rich history, it has been the cradle of talent and passion. The Bombonera,
        resonates with the devotion of the fans. Legendary figures like Maradona left their mark, symbolizing
        his greatness. In addition, the presence of Riquelme, with his magic on the field, adds to the mystique of the club. Boca Juniors
        it is an emblem of triumph and rivalry. His legacy inspires fans around the world.`,
        "img/IMG_4789 1.png",
        "River Plate",
        `Founded in 1901 in Buenos Aires, four times champion of America, "El millonario",
        It stands out as another of the great clubs. Gallardo, with his influence as a coach, has left
         an indelible mark on River, personifying his greatness. Added to this, his journey is full of successes
         and rivalries, such as the mythical Superclásico with Boca, transcending beyond the pitch. with achievements
          local and international, River Plate embodies excellence and passion in soccer.`,
      ],
      contact: {
        number: "+5491126597630",
        message: "hi, I am interested in reserve the Boca-River experience",
      },
    },
  };

  return (
    <>
      <CommonHeader
        ownStyle={"header-boca-river"}
        experienceTittleES={"Experiencia Boca - River"}
        experienceTittleEN={"Boca - River Experience"}
        image={"img/Home-Exp-RivBoc.png"}
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

        <Slider data={content.spanish.imgs} />
        <ReserveExperience
          content={
            lang === "castellano"
              ? content.spanish.reserveExperience
              : content.english.reserveExperience
          }
          reserve={
            lang === "castellano"
              ? content.spanish.contact
              : content.english.contact
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
