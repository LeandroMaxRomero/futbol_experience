import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

Button;

export const Reserva = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();
  return (
    <>
      {lang === "castellano" ? (
        <div className="container-reserva">
          <h3>Reservá con nosotros y viví el fútbol como un argentino</h3>
          <Button buttonStyle={"btn-contacto"}>
            {" "}
            <Link to={"/contact"}>Contactanos</Link>
          </Button>
        </div>
      ) : (
        <div className="container-reserva">
          <h3>Book now to get to know Argentine soccer at home</h3>
          <Button buttonStyle={"btn-contacto"}>
            {" "}
            <Link to={"/contact"}>Contact us </Link>
          </Button>
        </div>
      )}
    </>
  );
};
