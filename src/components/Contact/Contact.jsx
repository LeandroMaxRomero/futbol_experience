import { useContext, useEffect } from "react";
import { LenguaContext } from "../../context/LenguaProvider";

import Form from "../Form/Form";
import { HeaderContact } from "./HeaderContact";
import * as Scroll from "react-scroll";
import { generalContact } from "../../data/data";

export const Contact = () => {
  const { lang } = useContext(LenguaContext);

  let scroll = Scroll.animateScroll;

  useEffect(() => {
    scroll.scrollToTop();
  });

  return (
    <>
      <HeaderContact
        imagen={"img/header-contacto.png"}
        tittleES="Contacto"
        tittleEN="Contact"
      />
      <div className="contact-container">
        <h2 className="contact-title">
          {lang === "castellano" ? "Información de Contacto" : "Contact Info"}
        </h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info__email">
              <li>
                {lang === "castellano" ? "Correo: " : "Email: "}
                <a
                  href="mailto:contact@futbolexperience.com.ar?subject=Hola,%20necesito%20información%20sobre%20las%20experiencias"
                  target="_blank"
                  rel="noreferrer"
                >
                  contact@futbolexperience.com.ar
                </a>
              </li>
              <li>Tel: +54 9 11 2659-7630</li>
            </div>
            <div className="contact-info__svg">
              <div className="logo-container">
                <a
                  href={` https://wa.me/${generalContact.number}?text=${
                    lang === "castellano"
                      ? generalContact.spanish.message
                      : generalContact.english.message
                  }`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M24 3.0171C12.5657 3.0171 3.01712 12.5828 3.01712 24.0068C3.02152 28.1422 4.2438 32.1847 6.53141 35.6297L3.00684 45.0068L14.7977 42.8743C17.6652 44.267 20.8121 44.9893 24 44.9863C35.4446 44.9931 45.0068 35.4411 45.0068 24.0102C45.0068 12.5931 35.4411 3.01025 24 3.0171Z"
                      stroke="#0B2933"
                      strokeWidth="3.42857"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.1555 33.2571C27.9978 35.0777 30.9567 33.7509 33.0207 32.2114C34.4435 31.1486 34.399 29.1017 33.1818 27.8057L30.7818 25.2514C29.8733 26.16 28.0973 26.6126 26.8664 26.2354C24.2161 25.4297 23.1053 24.0514 22.2035 22.6457C21.1715 21.0343 22.3407 18.6274 23.2493 17.7189L20.575 15.2777C19.447 14.2491 17.7361 14.0777 16.7521 15.2434C14.8047 17.5509 13.5978 21.0583 15.0276 23.2903C17.599 27.2983 21.1475 30.6857 25.1555 33.2571Z"
                      stroke="#0B2933"
                      strokeWidth="3.42857"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <div className="logo-container">
                <a href="https://www.instagram.com/futbolexperienceba">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M35.4275 12.4938C35.2001 12.4938 34.9821 12.4035 34.8214 12.2428C34.6606 12.082 34.5703 11.864 34.5703 11.6367C34.5703 11.4094 34.6606 11.1913 34.8214 11.0306C34.9821 10.8698 35.2001 10.7795 35.4275 10.7795"
                      stroke="#0B2933"
                      strokeWidth="3.42857"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M35.4277 12.4938C35.6551 12.4938 35.8731 12.4035 36.0338 12.2428C36.1946 12.082 36.2849 11.864 36.2849 11.6367C36.2849 11.4094 36.1946 11.1913 36.0338 11.0306C35.8731 10.8698 35.6551 10.7795 35.4277 10.7795"
                      stroke="#0B2933"
                      strokeWidth="3.42857"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.94191 11.7635C2.94191 9.42382 3.87133 7.17999 5.52573 5.52559C7.18012 3.8712 9.42396 2.94177 11.7636 2.94177H35.2905C36.449 2.94177 37.5961 3.16995 38.6664 3.61329C39.7367 4.05662 40.7092 4.70642 41.5284 5.52559C42.3475 6.34476 42.9973 7.31726 43.4407 8.38756C43.884 9.45786 44.1122 10.605 44.1122 11.7635V35.2903C44.1122 37.63 43.1828 39.8738 41.5284 41.5282C39.874 43.1826 37.6301 44.1121 35.2905 44.1121H11.7602C9.42053 44.1121 7.17669 43.1826 5.5223 41.5282C3.8679 39.8738 2.93848 37.63 2.93848 35.2903V11.7601L2.94191 11.7635Z"
                      stroke="#0B2933"
                      strokeWidth="3.42857"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.7842 23.5269C14.7842 24.675 15.0103 25.8119 15.4497 26.8727C15.8891 27.9334 16.5331 28.8972 17.3449 29.709C18.1568 30.5209 19.1206 31.1649 20.1813 31.6043C21.242 32.0436 22.3789 32.2698 23.527 32.2698C24.6752 32.2698 25.8121 32.0436 26.8728 31.6043C27.9335 31.1649 28.8973 30.5209 29.7092 29.709C30.521 28.8972 31.165 27.9334 31.6044 26.8727C32.0438 25.8119 32.2699 24.675 32.2699 23.5269C32.2699 21.2082 31.3488 18.9844 29.7092 17.3448C28.0696 15.7052 25.8458 14.7841 23.527 14.7841C21.2083 14.7841 18.9845 15.7052 17.3449 17.3448C15.7053 18.9844 14.7842 21.2082 14.7842 23.5269Z"
                      stroke="#0B2933"
                      strokeWidth="3.42857"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <div className="logo-container">
                <a href="http://">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M28.8758 33.3154V3.91199M28.8758 33.3291C28.8758 35.2909 28.2941 37.2086 27.2042 38.8398C26.1143 40.4709 24.5652 41.7422 22.7527 42.493C20.9403 43.2437 18.9459 43.4401 17.0219 43.0574C15.0978 42.6747 13.3304 41.73 11.9433 40.3428C10.5561 38.9556 9.6114 37.1883 9.22868 35.2642C8.84596 33.3401 9.04238 31.3458 9.79312 29.5333C10.5439 27.7209 11.8152 26.1718 13.4463 25.0819C15.0775 23.992 16.9952 23.4103 18.9569 23.4103"
                      stroke="#0B2933"
                      strokeWidth="3.42857"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28.876 3.90857C28.8751 5.8398 29.2547 7.75229 29.9931 9.53678C30.7315 11.3213 31.8143 12.9428 33.1796 14.3087C34.5449 15.6746 36.1659 16.7581 37.95 17.4974C39.7341 18.2366 41.6465 18.6171 43.5777 18.6171"
                      stroke="#0B2933"
                      strokeWidth="3.42857"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};
