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
          <h2>Viví el futbol</h2>
          <h3>Conocé la historia del fútbol argentino</h3>
          <Button >Reserva</Button>
        </div>
      )
      :
      (
        <div className="container-legend">
          <h2>Feel the football</h2>
          <h3>Be part of the history of Argentine soccer</h3>
          <Button >Reserve</Button>
        </div>
      )
      }
    </>
  )}
