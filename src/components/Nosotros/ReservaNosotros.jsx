import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";
import { Button } from "../Button/Button"

export const ReservaNosotros = () => {
    const useLengua = () => useContext(LenguaContext);
    const { lang } = useLengua();
  return (
    <>
    {lang==='castellano'
    ?
    <div className="container-reservaNosotros">
        <h2>Reserva con nosotros para conocer el fútbol argentino local</h2>
        <Button buttonStyle={"btn-contacto"}>Contacto</Button>
    </div>
    :
    <div className="container-reservaNosotros">
        <h2>Book with us to discover local Argentine soccer.</h2>
        <Button buttonStyle={"btn-contacto"}>Contact</Button>
    </div>
    }
    </>
  )
}
