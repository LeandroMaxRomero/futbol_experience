import { useContext, useState } from "react";
import { LenguaContext } from "../../context/LenguaProvider";
import { Acordeon } from "./Acordeon";


export const FAQs = () => {
  const [active, setActive] = useState("");
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  const texto=[
    {
      titulo1:"¿Cómo puedo reservar una experiencia?",
      titulo2:"¿Dónde puedo abonar la experiencia que elegí?",
      titulo3: "¿Cuánto tiempo necesito para recorrer cada experiencia?",
      titulo4: "¿Qué idiomas hablan los guías?",
      titulo5: "¿Qué debo tener en cuenta? ¿Debo llevar alguna documentación?",
      titulo6: "¿Se puede realizar una reserva grupal y exclusiva? ¿Cuántas personas pueden sumarse a cada tour?"
    },
    {
      conte1:"Al elegir la experiencia que deseas reservar, nuestra página web te derivará al whatsapp de nuestro equipo de atención al cliente. Ellos mismos te comentarán las fechas disponibles de cada experiencia con los detalles pertinentes.",
      conte2: "Una vez que hayas elegido tu experiencia, nuestra página web te derivará al whatsapp de nuestro equipo de atención al cliente. Ellos mismos te enviarán el link de pago para que puedas abonar y reservar el día de tu experiencia. Lo mismo ocurre para el caso de los partidos que desees asistir.",
      conte3: "En el caso de la experiencia de Boca y River, la experiencia lleva alrededor de 6 horas. La experiencia de Diego Maradona llevará alrededor de 4 horas. Por último, si eliges un partido, el mismo durará 2 horas sumado al tiempo de traslado.",
      conte4:"Todos nuestros guías hablan fluidamente en español como en inglés.",
      conte5: "Recomendamos asistir a las experiencias lo más livianos y cómodos posibles. Traiga consigo su documento personal y la confirmación de la reserva de la experiencia.",
      conte6:"Sí, se puede reservar una experiencia grupal y exclusiva. Aceptamos grupos de hasta 15 personas. Consultanos a nuestro whatsapp por esa posibilidad."
    }
  ]
  return (
    <div className="container-faqs">
      <h2>FAQS</h2>
      {
        lang==='castellano'
        ?
        <>
          <div className="divisor"></div>
          <Acordeon tittle={texto[0].titulo1} contenido={texto[1].conte1} active={active} setActive={setActive} />
          <Acordeon tittle={texto[0].titulo2} contenido={texto[1].conte2} active={active} setActive={setActive} />
          <Acordeon tittle={texto[0].titulo3} contenido={texto[1].conte3} active={active} setActive={setActive} />
          <Acordeon tittle={texto[0].titulo4} contenido={texto[1].conte4} active={active} setActive={setActive} />
          <Acordeon tittle={texto[0].titulo5} contenido={texto[1].conte5} active={active} setActive={setActive} />
          <Acordeon tittle={texto[0].titulo6} contenido={texto[1].conte6} active={active} setActive={setActive} />
        </>
        :
        <>
          <Acordeon tittle={texto[0].titulo1} contenido={texto[1].conte1} active={active} setActive={setActive} />
          <Acordeon tittle={texto[0].titulo2} contenido={texto[1].conte2} active={active} setActive={setActive} />
          <Acordeon tittle={texto[0].titulo3} contenido={texto[1].conte3} active={active} setActive={setActive} />
          <Acordeon tittle={texto[0].titulo4} contenido={texto[1].conte4} active={active} setActive={setActive} />
          <Acordeon tittle={texto[0].titulo5} contenido={texto[1].conte5} active={active} setActive={setActive} />
          <Acordeon tittle={texto[0].titulo6} contenido={texto[1].conte6} active={active} setActive={setActive} />
        </>
      }
    </div>
  )
}
