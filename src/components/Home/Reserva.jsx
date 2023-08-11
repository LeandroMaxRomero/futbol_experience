import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";
import { Button } from "../Button/Button"

Button

export const Reserva = () => {
    const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();
  return (
    <>
    {
        lang==='castellano'
        ?
        <div className="container-reserva">
            <h3>Reserva ahora para conocer el futbol argentino de local</h3>
              <Button>Contacto</Button>
        </div>
        :
        <div className="container-reserva">
            <h3>Book now to get to know Argentine soccer at home</h3>
          <Button>Contact</Button>
        </div>
    }
    </>
  )
}
