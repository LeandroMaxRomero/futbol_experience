import { useContext } from "react";
import { Button } from "../../Button/Button";
import { LenguaContext } from "../../../context/LenguaProvider";
import { generalContact } from "../../../data/data";

export const Legend = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  return (
    <>
      {lang === "castellano" ? (
        <div className="container-legend">
          <h2>Viví el fútbol como un Argentino</h2>
          <h3>Conocé las experiencias que tenemos para vos</h3>
          <Button buttonStyle={"btn-contacto"}>
            <a
              href={` https://wa.me/${generalContact.number}?text=${generalContact.spanish.message}`}
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
          <h2>Experience football as an Argentinian</h2>
          <h3>Explore all the experiences we have for you</h3>
          <Button buttonStyle={"btn-contacto"}>
            {" "}
            <a
              href={` https://wa.me/${generalContact.number}?text=${generalContact.english.message}`}
              target="_blank"
              rel="noreferrer"
            >
              Book your experience
            </a>
          </Button>
        </div>
      )}
    </>
  );
};
