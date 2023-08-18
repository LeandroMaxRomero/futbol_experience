import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";

export const AcercaDe = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  return (
    <>
      {lang === "castellano" ? (
        <div className="container-nosotros ">
          <div className="img_acercaDeNosotros">
            <img
              src="img/fermin-rodriguez-penelas-8cByMvS025k-unsplash 1.png"
              alt="Niño en hombros con playera de Messi"
            />
          </div>
          <div className="seccion-acerca">
            <h2>Acerca de Fútbol Experience</h2>

            <p>
              “En Argentina nací, tierra de Diego y Lionel”. Fútbol Experience
              es un tour personalizado diseñado para turistas que integra mucho
              más que una experiencia acerca del fútbol argentino. La pelota es
              el primer juguete, el primer idioma. Aprendemos a patear y después
              a hablar. Es cultura, es pasión, son historias.
            </p>
            <p>
              {" "}
              A través de Fútbol Experience, tendrás la posibilidad de conocer
              puntos emblemáticos de nuestro país que todo fanático del fútbol
              debería conocer. Desde la vida de figuras como Diego Armando
              Maradona hasta visitar los museos y estadios de los clubes más
              reconocidos, como los de Boca y River. Sumado a ello, consultanos
              por entradas a partidos donde te acompañaremos a conocer la locura
              del hincha argentino.
            </p>
            <p>
              Y como si fuera poco, formarás parte de una experiencia completa
              que incluye aprenderte las canciones que fueron tendencia en el
              Mundial de la Copa que ganó la selección Argentina, vídeos y
              material exclusivo, actividades interactivas y regalos al
              finalizar tu recorrida. Todo esto acompañado de un guía bilingüe
              fanático del fútbol, donde el traslado y la comida también están
              incluidos. Elegí tu experiencia y nosotros nos ocupamos de que sea
              inolvidable.
            </p>
          </div>
        </div>
      ) : (
        <div className="container-nosotros">
          <img src="img/nosotros-marado.png" alt="Mural de Maradona" />
          <div className="seccion-acerca">
            <h2>About Fútbol Experience</h2>

            <p>
              `I was born in Argentina, land of Diego and Lionel.` Fútbol
              Experience is a personalized tour designed for tourists that
              integrates much more than an Argentine soccer experience. The ball
              is the first toy, the first language. We learn to kick and then to
              speak. It is culture, it is passion, it is stories.
            </p>
            <p>
              Through Fútbol Experience, you will have the opportunity to
              discover emblematic points of our country that every soccer fan
              should know. From the life of figures like Diego Armando Maradona
              to visiting the museums and stadiums of the most renowned clubs,
              such as those of Boca and River. Added to this, ask us for tickets
              for the matches where we will accompany you to discover the
              madness of the Argentine fan.
            </p>
            <p>
              And as if that were not enough, you will be part of a complete
              experience that includes learning the songs that were a trend in
              the World Cup won by the Argentine team, videos and exclusive
              material, interactive activities and gifts at the end of your
              tour. All this accompanied by a bilingual soccer fanatic guide,
              which also includes transportation and food. Choose your
              experience and we will make sure it is unforgettable.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
