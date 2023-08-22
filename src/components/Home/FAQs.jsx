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
      titulo1:"How can I book an experience?",
      titulo2:"Where can I pay for the experience I chose?",
      titulo3: "How much time do I need to go through each experience?",
      titulo4: "What languages do the guides speak?",
      titulo5: "What should I consider? Do I have to bring any documentation?",
      titulo6: "Can you make a group and exclusive reservation? How many people can join each tour?"
    },
    {
      conte1:"When you choose the experience you want to book, our website will refer you to the WhatsApp of our customer service team. They will indicate the available dates of each experience with the pertinent details.",
      conte2: "Once you have chosen your experience, our website will refer you to the WhatsApp of our customer service team. They will send you the payment link so that you can pay and reserve the day of your experience. The same happens for the case of the matches you wish to attend.",
      conte3: "In the case of the Boca and River experience, the experience lasts about 6 hours. Diego Maradona's experience will last about 4 hours. Finally, if you choose a match, it will last 2 hours plus transfer time",
      conte4:"All our guides speak Spanish and English fluently.",
      conte5: "We recommend attending the experiences in the lightest and most comfortable way possible. Take your personal document and confirmation of the experience reservation with you.",
      conte6: "Yes, you can book an exclusive group experience. We accept groups of up to 15 people. Ask us on our WhatsApp for that possibility."
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
