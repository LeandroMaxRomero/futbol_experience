import { useContext, useEffect } from "react";
import * as Scroll from "react-scroll";
import { HeaderContact } from "../Contact/HeaderContact";
import { LenguaContext } from "../../context/LenguaProvider";
import '../../scss/layout/_terminos.scss';

export const TermsAndCond = () => {
    let scroll = Scroll.animateScroll;

  useEffect(() => {
    scroll.scrollToTop();
  });

  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  return (
    <>
      <HeaderContact
        imagen={"img/header-nosotros.png"}
        tittleES="Términos y Condiciones"
        tittleEN="Terms & Conditions"
      />
      {
        lang==='castellano'
        ?
        <div className="container-terminos">
          <h2>Términos y condiciones</h2>
          <h3>Datos personales recopilados</h3>
          <p>El público en general podrá navegar por la Plataforma sin necesidad de registrarse ni proporcionar sus datos personales, excepto aquellos que son recolectados en el formulario de contacto. Si usted completa los datos en dicho formulario, nos llegará su consulta a nuestra correo: contact@futbolexperience.com.ar</p>
          <p>Si usted se comunica con Fútbol Experience, Fútbol Experience puede recopilar:</p>
          <ol>
            <li>Datos de contacto. Nombre, apodo, teléfono, ciudad, estado y dirección de correo electrónico.</li>
            <li>Información que envíe. Información que nos envíe a través del formulario disponible (por ejemplo, quejas, sugerencias, críticas, felicitaciones, etc.).</li>
          </ol>

          <p>Ejemplos de cómo usamos los datos personales que usted incluye:</p>
          <ul>
            <li>Para responder a los requerimientos y consultas que realice a través de la Plataforma, como por ejemplo acerca de los servicios de Fútbol Experience.</li>
            <li>Para mantener contacto con los usuarios, atender los comentarios, quejas y sugerencias.</li>
            <li>Para cobrar y facturar las cantidades previstas en los servicios contratados por usted.</li>
            <li>Para comunicarnos con usted a un número de teléfono y/o dirección de correo electrónico proporcionados, con fines de soporte, resolución de problemas y, cuando sea necesario, para fines comerciales razonables, como enviarle información promocional de servicios de Fútbol Experience.</li>
            <li>Para hacer cumplir nuestros términos y condiciones de uso.</li>
          </ul>
          <h3>Términos y condiciones</h3>
          <p>Estos Términos y Condiciones de uso de la Plataforma Fútbol Experience regulan el uso del sitio web “futbolexperience.com.ar” y los servicios disponibles en la plataforma.</p>
          <p>Pedimos a los usuarios que lean detenidamente y se aseguren de que comprenden y aceptan todas las condiciones establecidas en estos términos y en los demás documentos incorporados en ellos por referencia (colectivamente, `Términos`), ya que las reglas, obligaciones y derechos previstos son vinculantes y son válidos para todos los usuarios de la Plataforma (`Usuario` o `Usted`). En caso de duda, el Usuario puede enviar un correo electrónico a contact@futbolexperience.com.ar.
          </p>
          <p>Al utilizar un Servicio en particular, usted estará sujeto a las pautas, términos y condiciones aplicables a ese Servicio. A menos que se indique lo contrario, cualquier característica nueva que aumente o mejore los Servicios actualmente disponibles, incluidas las nuevas versiones, estará sujeta automáticamente a los Términos.</p>
          <p>Durante el uso de la Plataforma, Fútbol Experience recopila y procesa ciertos datos personales. Las reglas relacionadas con el tratamiento de datos personales por parte de Fútbol Experience están estipuladas en Datos personales recopilados.</p>
          <p>El uso de la Plataforma solo está disponible para las personas físicas o jurídicas que tengan capacidad legal para contratar los Servicios y para que se les asigne automáticamente la condición de Usuario, e implica la aceptación, en su totalidad y sin reservas, de todas las disposiciones incluidas en los Términos en la versión vigente en el momento del acceso a la Plataforma.</p>
          <p>No es necesario registrarse en la Plataforma. El Usuario podrá consultar los servicios prestados por Fútbol Experience declarando, por tanto, haber leído, comprendido y aceptado los respectivos términos de uso de cada uno de estos servicios.</p>
          <h3>Descripción de servicios, precios y pago</h3>
          <p>Fútbol Experience no es un proveedor de ningún producto o servicio anunciado por los Usuarios. Fútbol Experience es un proveedor de servicios de recorridos turísticos de forma presencial. Dentro de la Plataforma, el Usuario encontrará la información pertinente para poder adquirir cada uno de nuestros servicios.</p>
          <p>El Usuario deberá pagar los Servicios prestados dentro de los términos y en la forma en que Fútbol Experience determine en el momento de la contratación. Los precios cobrados están sujetos a cambios en cualquier momento a discreción exclusiva de Fútbol Experience. Si hay un retraso en el pago de los Servicios, Fútbol Experience tendrá derecho, a su sola discreción, a suspender o cancelar así como a emprender acciones legales para recibir los montos pendientes. Esta medida tiene como objetivo garantizar la seguridad financiera y evitar pérdidas a Fútbol Experience.</p>
          <p>El equipo de atención al cliente de Fútbol Experience proveerá la información necesaria para que el Usuario pueda realizar el pago correspondiente. La factura por los Servicios contratados junto al ticket de confirmación de la experiencia, serán envíados a los datos provistos (casilla de email y/o teléfono celular) por el Usuario una vez confirmada la transacción. Fútbol Experience no enviará facturas por ningún otro medio.</p>
          <p>Los servicios de Fútbol Experience se abonan de manera pre-paga, es decir, se paga por anticipado por el uso del servicio. Para consultas en relación a cancelación, reembolso o modificación de fecha, revisar nuestras Políticas de cancelación y/o reembolso.</p>
          <h3>Políticas de cancelación y reembolso</h3>
          <p>En caso de que no pueda asistir, debe notificarlo con más de 7 días de antelación a la fecha en que inicia la experiencia. Para cancelar su reserva, envíe un correo a contact@futbolexperience.com.ar o comuniquese a nuestro equipo de atención al cliente vía whatsapp. Para las compras realizadas dentro de los 7 días anteriores al inicio de la experiencia, no hay posibilidad de reembolso.</p>
          <p>Esta misma situación, aplica a cambios de fecha. En caso de una notificación con más de 7 días de antelación a la experiencia, podremos gestionar un cambio de fecha.</p>
          <p>Sugerimos que pueda comprobar los detalles, días y horarios de la experiencia previo a la compra para evitar inconvenientes. Ante cualquier duda, quedamos atentos a nuestro canal de whatsapp y/o mail.</p>
          <h3>Licencia y responsabilidades</h3>
          <p>A menos que se indique lo contrario, Fútbol Experience y su licitante poseen los derechos de propiedad intelectual de todo el material disponible. Todos los derechos de propiedad intelectual están reservados.</p>
          <p>El Usuario no debe:</p>
          <ul>
            <li>Publicar material de futbolexperience.com.ar en otro sitio web.</li>
            <li>Vender, alquilar o sublicenciar material de futbolexperience.com.ar</li>
            <li>Reproducir, duplicar o copiar material de futbolexperience.com.ar</li>
            <li>Redistribuir el contenido de Fútbol Experience (a menos que el contenido esté específicamente diseñado para su redistribución).</li>
          </ul>
          <p>Nos reservamos el derecho a modificar estas condiciones de servicio y su política de enlaces en cualquier momento. Al continuar enlazando con nuestro sitio web, el Usuario se compromete a respetar las presentes condiciones. Por otro lado, sin la aprobación previa y el permiso expreso por escrito, no está permitido que el Usuario utilice técnicas que alteren de algún modo la presentación visual o el aspecto de nuestro sitio web.</p>
        </div>
        :
        <div className="container-terminos">
          <h2>Terms and conditions</h2>
          <h3>Personal data collected</h3>
          <p>The general public may browse the Platform without the need to register or provide their personal data, except those that are collected in the contact form. If you complete the data in this form, we will receive your inquiry to our email: contact@futbolexperience.com.ar</p>
          <p>If you communicate with Fútbol Experience, Fútbol Experience may collect:</p>
          <ol>
            <li>Contact details. Name, nickname, phone, city, state and email address.</li>
            <li>Information you send. Information you send us through the available form (for example, complaints, suggestions, criticisms, congratulations, etc.).</li>
          </ol>

          <p>Examples of how we use the personal data you include:</p>
          <ul>
            <li>To respond to the requirements and queries you make through the Platform, such as about Football Experience services.</li>
            <li>To maintain contact with users, attend to comments, complaints and suggestions.</li>
            <li>To collect and bill the amounts provided in the services contracted by you.</li>
            <li>To contact you at a telephone number and/or email address provided, for support purposes, troubleshooting and, where necessary, for reasonable commercial purposes, such as sending you promotional information for Football Experience services.</li>
            <li>To enforce our terms and conditions of use.</li>
          </ul>
          <h3>Terms and conditions</h3>
          <p>These Terms and Conditions of Use of the Football Experience Platform regulate the use of the website ´futbolexperience.com.ar´ and the services available on the platform.</p>
          <p>We ask users to read carefully and ensure that they understand and accept all conditions set forth in these terms and in the other documents incorporated therein by reference (collectively, `Terms`)as the rules, obligations and rights provided are binding and valid for all users of the Platform (`User` or `You`). In case of doubt, the User may send an email to contact@futbolexperience.com.ar.</p>
          <p>By using a particular Service, you will be subject to the guidelines, terms and conditions applicable to that Service. Unless otherwise stated, any new features that augment or enhance the Services currently available, including new versions, will automatically be subject to the Terms.</p>
          <p>During the use of the Platform, Fútbol Experience collects and processes certain personal data. The rules related to the processing of personal data by Fútbol Experience are stipulated in Personal data collected.</p>
          <p>Use of the Platform is only available to natural or legal persons who have the legal capacity to contract the Services and to be automatically assigned the status of User, and implies acceptance, in full and without reservations, of all provisions contained in the Terms in the version in force at the time of access to the Platform.</p>
          <p>There is no need to register on the Platform. The User may consult the services provided by Fútbol Experience declaring, therefore, having read, understood and accepted the respective terms of use of each of these services.</p>
          <h3>Description of services, prices and payment</h3>
          <p>Football Experience is not a supplier of any product or service advertised by Users. Fútbol Experience is a provider of tourist tour services in person. Within the Platform, the User will find the relevant information to purchase each of our services.</p>
          <p>The User shall pay for the Services provided within the terms and in the manner determined by Fútbol Experience at the time of hiring. Prices charged are subject to change at any time at the sole discretion of Football Experience. If there is a delay in payment for the Services, Fútbol Experience shall be entitled, in its sole discretion, to suspend or cancel as well as to take legal action to receive the outstanding amounts. This measure aims to ensure financial security and avoid losses to Fútbol Experience.</p>
          <p>The Football Experience customer support team will provide the information necessary for the User to make the corresponding payment. The invoice for the Services contracted with the experience confirmation ticket will be sent to the data provided (email box and/or cell phone) by the User once the transaction has been confirmed. Football Experience will not send invoices by any other means.</p>
          <p>Football Experience services are paid in advance, that is, you pay in advance for the use of the service. For inquiries regarding cancellation, refund or date modification, please review our Cancellation and/or Refund Policies.</p>
          <h3>Cancellation and refund policies</h3>
          <p>If you are unable to attend, you must notify us more than 7 days before the date the experience begins. To cancel your reservation, send an email to contact@futbolexperience.com.ar or contact our customer support team via whatsapp. For purchases made within 7 days prior to the start of the experience, there is no possibility of refund.</p>
          <p>The same applies to date changes. In case of a notification more than 7 days before the experience, we can manage a change of date.</p>
          <p>We suggest that you check the details, days and times of the pre-purchase experience to avoid inconvenience. If in doubt, we are attentive to our whatsapp and/or mail channel.</p>
          <h3>License and responsibilities</h3>
          <p>Unless otherwise stated, Fútbol Experience and its bidder own the intellectual property rights to all available material. All intellectual property rights are reserved.</p>
          <p>The User must not:</p>
          <ul>
            <li>Post futbolexperience.com.ar material on another website.</li>
            <li>Sell, rent or sublicense futbolexperience.com.ar material.</li>
            <li>Reproduce, duplicate or copy futbolexperience.com.ar material.</li>
            <li>Redistribute Football Experience content (unless the content is specifically designed for redistribution).</li>
          </ul>
          <p>We reserve the right to modify these Terms of Service and your link policy at any time. By continuing to link to our website, the User undertakes to respect these conditions. On the other hand, without prior approval and express written permission, the User is not allowed to use techniques that alter in any way the visual presentation or appearance of our website.</p>
        </div>
      }
    </>
  )
}
