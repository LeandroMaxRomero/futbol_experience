import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";
import { Button } from "../Button/Button";

export const Reserva = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  const contact = {
    number: "+5491126597630",
    spanish: {
      message: "Hola, estoy interesado en reservar las experiencias...",
    },
    english: {
      message: "Hi,I am interested in reserve the experiences",
    },
  };

  return (
    <>
      {lang === "castellano" ? (
        <div className="container-reserva">
          <h3>Reservá con nosotros y viví el fútbol como un argentino</h3>
          <Button buttonStyle={"btn-contacto"}>
            <a
              href={` https://wa.me/${contact.number}?text=${contact.spanish.message}`}
              target="_blank"
              rel="noreferrer"
            >
              Contactanos
            </a>
          </Button>
        </div>
      ) : (
        <div className="container-reserva">
          <h3>Book now to get to know Argentine soccer at home</h3>
          <Button buttonStyle={"btn-contacto"}>
            <a
              href={` https://wa.me/${contact.number}?text=${contact.english.message}`}
              target="_blank"
              rel="noreferrer"
            >
              Contact us
            </a>
          </Button>
        </div>
      )}
    </>
  );
};
