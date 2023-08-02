import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider"
useContext

export const AboutUs = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lengua } = useLengua();

  return (
    <div>
        {
          lengua === 'castellano'
          ?
          <section>
            <h1>Sobre nosotros</h1>
            <h3>Colocó las piezas en el tablero como si fuese a comenzar una nueva partida. Nunca antes había notado la profunda belleza que encerraba el ritual inmemorial de ocupar cada uno de los escaques con su pieza; gozaba como nunca la suavidad de su barniz en las yemas de los dedos; se sentía como el sacerdote de un viejo culto preparando los instrumentos para la ejecución de un ritual secreto y sagrado</h3>
          </section>
          :
          <section>
            <h1>About us</h1>
            <h3>Put the pies on the table as if it was to start a new game. He had never before noticed the profound beauty that enclosed the inmemorial ritual of occupying each one of the scaques with his pieza; he enjoyed the smoothness of sub-barniz in the yolks of the fingers like never before; he felt like the priest of an old cult preparing the instruments for the performance of a secret and sacred ritual</h3>
          </section>
        }
        
      </div>
  )
}
