import { useContext } from "react";
import { Button } from "../../Button/Button";
import { LenguaContext } from "../../../context/LenguaProvider";

export const Legend = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();
  const contact = {
    number: "+5491168196200",
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
        <div className="container-legend">
          <h2>Viví el fútbol como un Argentino</h2>
          <h3>Conocé las experiencias que tenemos para vos</h3>
          <Button buttonStyle={"btn-contacto"}>
            <a
              href={` https://wa.me/${contact.number}?text=${contact.spanish.message}`}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Reserva
            </a>
          </Button>
        </div>
      ) : (
        <div className="container-legend">
          <h2>Live football like an Argentine</h2>
          <h3>Know the experiences we have for you</h3>
          <Button buttonStyle={"btn-contacto"}>
            {" "}
            <a
              href={` https://wa.me/${contact.number}?text=${contact.english.message}`}
              target="_blank"
              rel="noreferrer"
            >
              Reserve
            </a>
          </Button>
        </div>
      )}
    </>
  );
};
