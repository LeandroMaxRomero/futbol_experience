import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";
import { Button } from "../Button/Button";
import { generalContact } from "../../data/data";

export const Reserva = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  return (
    <>
      {lang === "castellano" ? (
        <div className="container-reserva">
          <h3>Reservá con nosotros y viví el fútbol como un argentino</h3>
          <Button buttonStyle={"btn-contacto"}>
            <a
              href={` https://wa.me/${generalContact.number}?text=${generalContact.spanish.message}`}
              target="_blank"
              rel="noreferrer"
            >
              Contactanos
            </a>
          </Button>
        </div>
      ) : (
        <div className="container-reserva">
          <h3>Book with us and experience football as an Argentinian</h3>
          <Button buttonStyle={"btn-contacto"}>
            <a
              href={` https://wa.me/${generalContact.number}?text=${generalContact.english.message}`}
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
