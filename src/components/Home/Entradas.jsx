import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";
import { Button } from '../Button/Button'


export const Entradas = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();
return (
  <>
      <section className="container-entradas">
          {
          lang==='castellano'
          ?
          <div className="entradas">
            <h2>¿Querés conseguir entradas para partidos?</h2>
            <p>Contamos con tickets para partidos del fútbol argentino. Escribinos mencionando a qué equipo del fútbol argentino te gustaría ir a ver y te acompañamos al partido. Incluye el traslado (ida-vuelta) junto a un snack en las inmediaciones del estadio.</p>
            <Button>Contactanos</Button>
          </div>
          :
          <div className="entradas">
            <h2>Do you want to get tickets for matches?</h2>
            <p>We have tickets for Argentine soccer matches. Write us mentioning which Argentine soccer team you would like to go see and we will accompany you to the game. Includes transportation (round trip) along with snacks in the vicinity of the stadium.</p>
            <Button>Contact Us</Button>
          </div>
          }
      </section>
  </>
)
}
