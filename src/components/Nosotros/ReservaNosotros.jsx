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
      <a
        href={` https://wa.me/+5491126597630?text="Hola, estoy interesado en reservar la experiencia..."`}
        target="_blank"
        rel="noreferrer"
      >
        <Button buttonStyle={"btn-contacto"}>Contacto</Button>
      </a>
    </div>
    :
    <div className="container-reservaNosotros">
      <h2>Book with us and experience argentina’s local football</h2>
      <a
        href={` https://wa.me/+5491126597630?text="Hello, I’m interested in booking an experience with Futbol Experience. "`}
        target="_blank"
        rel="noreferrer"
      >
        <Button buttonStyle={"btn-contacto"}>Contact Information</Button>
      </a>
    </div>
    }
    </>
  )
}
