import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";

export const DetrasDe = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();
  return (
    <>
      {lang === "castellano" ? (
        <div className="container-nosotros">
          <div className="detras-title">
            <h2>Detrás de Fútbol Experience</h2>
          </div>
          <div className="seccion-detras">
            <p>
              Soy Dan. El fútbol marca el termómetro de mi vida. Voy a la cancha
              desde que tengo uso de razón. Con mi papá, compartimos muchos
              viajes en moto yendo a conocer distintas canchas. Y hubo algo que
              siempre me llamó la atención: cómo 11 personas que patean una
              pelota movilizan tanta gente, a viajar miles de kilómetros por su
              equipo, a juntar a toda una familia en el sillón a ver un partido,
              a endiosar a figuras como Messi o Maradona, a ser el ser humano
              más feliz por una victoria y el más angustiado por una derrota. Yo
              no supe responder esa pregunta aún. ¿Qué es lo genera tanta
              locura, tanta emoción y tanto fanatismo? En esta experiencia
              futbolera, te invito a que encontremos juntos la respuesta.
            </p>
          </div>
          <div className="detrasDeNosotros-img">
            <img src="img/nosotros-dan.png" alt="Dan en la tribuna" />
          </div>
        </div>
      ) : (
        <div className="container-nosotros">
          <div className="detras-title">
            <h2>Behind Fútbol Experience</h2>
          </div>

          <div className="seccion-detras">
            <p>
              I`m Dan Soccer marks the thermometer of my life. I`ve been on the
              court for as long as I can remember. With my dad we shared many
              motorcycle trips going to see different fields. And there was
              something that always caught my attention: how 11 people who kick
              a ball mobilize so many people, to travel thousands of kilometers
              for their team, to gather an entire family on the sofa to watch a
              game, to deify figures like Messi or Maradona, being the happiest
              human being for a victory and the most anguished for a defeat. I
              still haven`t been able to answer that question. What is it that
              generates so much madness, so much emotion and so much fanaticism?
              In this soccer experience, I invite you to find the answer
              together.
            </p>
          </div>
          <div className="detrasDeNosotros-img">
            <img src="img/nosotros-dan.png" alt="Dan en la tribuna" />
          </div>
        </div>
      )}
    </>
  );
};
