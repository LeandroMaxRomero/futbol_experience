import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";

export const AcercaDe = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  return (
    <>
      {lang === "castellano" ? (
        <div className="container-acerca ">
          <div className="acerca-title">
            <h2>Acerca de Fútbol Experience</h2>
          </div>
          <div className="img_acercaDeNosotros">
            <img
              src="img/fermin-rodriguez-penelas-8cByMvS025k-unsplash 1.png"
              alt="Niño en hombros con playera de Messi"
            />
          </div>
          <div className="seccion-acerca">
            <p>
              “En Argentina nací, tierra de Diego y Lionel”. Fútbol Experience
              es un tour personalizado diseñado para turistas que integra mucho
              más que una experiencia acerca del fútbol argentino. La pelota es
              el primer juguete, el primer idioma. Aprendemos a patear y después
              a hablar. Es cultura, es pasión, son historias.
            </p>
            <p>
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
              incluidos.
            </p>
            <p>
              Elegí tu experiencia y nosotros nos ocupamos de que sea
              inolvidable.
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="container-acerca">
            <div className="acerca-title">
              <h2>About Fútbol Experience</h2>
            </div>
            <div className="img_acercaDeNosotros">
              <img
                src="img/fermin-rodriguez-penelas-8cByMvS025k-unsplash 1.png"
                alt="Niño en hombros con playera de Messi"
              />
            </div>

            <div className="seccion-acerca">
              <p>
              “En Argentina nací, tierra de Diego y Lionel”. Futbol Experience is a personalized tour designed for tourists that is much more than a simple experience about argentinian football. The ball is our first toy, our first language. We learn how to kick, before we learn how to talk. It’s about culture, it’s about passion, it’s about stories.
              </p>
              <p>
              With Fútbol Experience, you will have the opportunity to get to know the emblematic points of our country that every football fan should know. From the life of figures such as Diego Armando Maradona, to visiting the museums and stadiums of the most prestigious clubs, such as Boca and River. In addition, you can ask us about tickets to matches where we will take you to experience the Argentinian fans’ madness.
              </p>
              <p>
              As if this were not enough, you will be part of a complete experience that includes learning the most popular songs of the World Cup that Argentina won, videos and exclusive material, interactive activities and gifts at the end of your tour. All of this led by a bilingual guide who is a football fan and including transportation and meals.
              </p>
              <p>
              Choose your experience and we will make sure it is unforgettable.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
