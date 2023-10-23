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
            <h2>Behind the scenes of Futbol Experience</h2>
          </div>

          <div className="seccion-detras">
            <p>
            My name is Dan. Football is my life. I´ve been going to the stadium ever since I can remember. My dad and I have shared countless motorcycle rides to all the different stadiums. And there was something that always caught my attention: how 11 people kicking a ball can move so many people to travel thousands of kilometers for their team, to gather a whole family on the couch to watch a game, to deify figures like Messi or Maradona, to be the happiest person with a victory and the most tormented with a defeat. I haven’t been able to find an answer yet for what it is that creates so much madness, so much emotion, so much fanaticism? In this football experience, I invite you to find the answer together.
            </p>
          </div>
          <div className="detrasDeNosotros-img">
            <img src="img/nosotros-dan2.png" alt="Dan en la tribuna" />
          </div>
        </div>
      )}
    </>
  );
};
