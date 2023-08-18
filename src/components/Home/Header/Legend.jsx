import { useContext } from "react";
import { Button } from "../../Button/Button"
import { LenguaContext } from "../../../context/LenguaProvider";

export const Legend = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();
  return (
    <>
      {
      lang==='castellano'
      ?
      (
        <div className="container-legend">
          <h2>Viví el fútbol como un argentino</h2>
          <h3>Conocé las experiencias que tenemos para vos</h3>
          <Button buttonStyle={"btn-contacto"}>Reserva</Button>
        </div>
      )
      :
      (
        <div className="container-legend">
          <h2>Live football like an Argentine</h2>
          <h3>Know the experiences we have for you</h3>
          <Button buttonStyle={"btn-contacto"}>Reserve</Button>
        </div>
      )
      }
    </>
  )}
