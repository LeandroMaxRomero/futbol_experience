import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";

export const HomePage = () => {
  const { english } = useContext(LenguaContext);

  return (
    <div>
      {!english ? (
        <section>
          <h1>Bienvenidos</h1>
          <h3>
            No había sido un error; recordaba perfectamente la posición de las
            piezas; recordaba también que su movimiento no sólo liberaba al rey
            del jaque, sino que ponía a las negras a la ofensiva; recordaba, por
            supuesto, que el movimiento era absolutamente válido y que, al
            momento de pensarlo, le había parecido obvio, casi fatal. El
            problema era que, al día siguiente, al querer reproducir la jugada,
            no sólo descubrió que la había olvidado, sino que era por completo
            imposible: el rey negro no sólo estaba en jaque, sino en jaque mate
          </h3>
        </section>
      ) : (
        <section>
          <h1>Welcome</h1>
          <h3>
            It hadnt been an error; I remembered perfectly the position of the
            pieces; he also remembered that his movement on the ground freed the
            jack king, a bell that put black women on the offensive; he
            remembered, of course, that the move was absolutely valid and that,
            at the moment of thinking about it, it had seemed obvious, even
            fatal. The problem was that, the next day, when wanting to reproduce
            the game, he didnt just discover that he had forgotten it, but that
            was completely impossible: the black king wasnt just in jack, bell
            in jack mate
          </h3>
        </section>
      )}
    </div>
  );
};
