import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";

export const Contact = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  return (
    <div>
      {lang === "castellano" ? (
        <section>
          <h1>Contacto</h1>
          <h3>
            Era imposible pero real, absolutamente real. Había descubierto lo
            que por definición no existe: siguiendo las reglas que condenaban a
            su rey, siguiendo esas mismas reglas, había encontrado la forma de
            salvarlo. Absurdo, ilógico, imposible; todos esos adjetivos se
            sacudían en su mente…
          </h3>
        </section>
      ) : (
        <section>
          <h1>Contact</h1>
          <h3>
            It was imposible but real, absolutely real. He had discovered what
            by definition does not exist: following the rules that condemned his
            king, following those same rules, he had found the way to save him.
            Absurd, illogical, imposible; all these adjectives were shaken in
            his mind…
          </h3>
        </section>
      )}
    </div>
  );
};
