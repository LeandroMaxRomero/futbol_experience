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
    },
    {
      titulo1:"How can I book my experience?",
      titulo2:"How will I pay for the experience?",
      titulo3: "How long is each experience?",
      titulo4: "What languages do the guides speak?",
      titulo5: "What should I take into account? Should I bring any documentation?",
      titulo6: "Is it possible to make an exclusive group reservation? How many people can go on each tour?"
    },
    {
      conte1:"When selecting the experience you wish to book, our website will redirect you to our Customer Success team’s Whatsapp. They will let you know the available dates for each experience and they’ll share all the relevant details. ",
      conte2: "Once you have selected your experience, our website will redirect you to our Customer Success team’s Whatsapp. They will send you a secure payment link to complete your payment and book your experience. The same goes for any football games you wish to attend.",
      conte3: "The Boca - River Experience lasts approximately 6 hours. The Diego Maradona Experience lasts approximately 4 hours. Finally, if you choose a game, it will take 2 hours plus the transportation time.",
      conte4:"All our guides are fluent in Spanish and English.",
      conte5: "We recommend attending the experiences as light and comfortable as possible. Bring your personal documents and your experience reservation confirmation.",
      conte6: "Yes, you can book an exclusive group experience. We accept group reservations up to 15 people. Please contact us via Whatsapp for this option."
    }
  ]
  return (
    <div className="container-faqs">
      <h2>FAQS</h2>
      {
        lang==='castellano'
        ?
        <>
          <Acordeon tittle={texto[0].titulo1} contenido={texto[1].conte1} active={active} setActive={setActive} />
          <Acordeon tittle={texto[0].titulo2} contenido={texto[1].conte2} active={active} setActive={setActive} />
          <Acordeon tittle={texto[0].titulo3} contenido={texto[1].conte3} active={active} setActive={setActive} />
          <Acordeon tittle={texto[0].titulo4} contenido={texto[1].conte4} active={active} setActive={setActive} />
          <Acordeon tittle={texto[0].titulo5} contenido={texto[1].conte5} active={active} setActive={setActive} />
          <Acordeon tittle={texto[0].titulo6} contenido={texto[1].conte6} active={active} setActive={setActive} />
        </>
        :
        <>
          <Acordeon tittle={texto[2].titulo1} contenido={texto[3].conte1} active={active} setActive={setActive} />
          <Acordeon tittle={texto[2].titulo2} contenido={texto[3].conte2} active={active} setActive={setActive} />
          <Acordeon tittle={texto[2].titulo3} contenido={texto[3].conte3} active={active} setActive={setActive} />
          <Acordeon tittle={texto[2].titulo4} contenido={texto[3].conte4} active={active} setActive={setActive} />
          <Acordeon tittle={texto[2].titulo5} contenido={texto[3].conte5} active={active} setActive={setActive} />
          <Acordeon tittle={texto[2].titulo6} contenido={texto[3].conte6} active={active} setActive={setActive} />
        </>
      }
    </div>
  )
}
