import { Link } from "react-router-dom";
import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";

export const Footer = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();

  const contact = {
    number: "+5491126597630",
    spanish: {
      message: "Hola, necesito información sobre las experiencias...",
    },
    english: {
      message: "Hi, I need information about experiences",
    },
  };

  return (
    <>
      {lang === "castellano" ? (
        <footer className="container-footer">
          <img
            src="img/banner-footer.png"
            alt="banner footer"
            className="imagen-fondo-footer"
          />

          <div className="footer-textos">
            <div className="footer-container">
              <div className="footer-logo">
                <img
                  src="img/LogoFooter.svg"
                  alt="Logo de Futbol Experience"
                  className="img-logo-footer"
                />
                <img
                  src="img/LogoFooterTablet.svg"
                  alt="Logo de Futbol Experience"
                  className="img-logo-footerTablet"
                />
                <img
                  src="img/LogoFooterMobile.svg"
                  alt="Logo de Futbol Experience"
                  className="img-logo-footerMobile"
                />
              </div>

              <div className="footer-columns">
                <div className="footer-navigation">
                  <strong>Navegación</strong>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/nosotros"}>Nosotros</Link>
                  </li>
                  <li>
                    <Link to={"experiencia-maradona"}>
                      Experiencia Maradona
                    </Link>
                  </li>
                  <li>
                    <Link to={"experiencia-boca-river"}>
                      Experiencia Boca River
                    </Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contacto</Link>
                  </li>
                </div>

                <div className="footer-rigth">
                  <div className="footer-contact">
                    <strong>Contacto</strong>
                    <li>
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
                  <br></br>
                  <div className="footer-network">
                    <strong>Redes</strong>
                    <div className="footer-network__svg">
                      <a
                        href={` https://wa.me/${contact.number}?text=${contact.spanish.message}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M11.9912 1.50855C6.27807 1.50855 1.50709 6.29141 1.50709 12.0034C1.50929 14.0711 2.12001 16.0923 3.26302 17.8148L1.50195 22.5034L7.39329 21.4371C8.82607 22.1335 10.3984 22.4946 11.9912 22.4931C17.7096 22.4966 22.4874 17.7206 22.4874 12.0051C22.4874 6.29655 17.7078 1.50512 11.9912 1.50855Z"
                            stroke="white"
                            strokeWidth="1.42857"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.5687 16.6286C13.9888 17.5389 15.4672 16.8754 16.4985 16.1057C17.2094 15.5743 17.1872 14.5509 16.579 13.9029L15.3799 12.6257C14.9259 13.08 14.0385 13.3063 13.4235 13.1177C12.0993 12.7149 11.5442 12.0257 11.0937 11.3229C10.5781 10.5171 11.1622 9.31372 11.6162 8.85943L10.28 7.63886C9.71637 7.12457 8.86153 7.03886 8.36987 7.62171C7.39684 8.77543 6.79383 10.5291 7.50819 11.6451C8.79301 13.6491 10.5661 15.3429 12.5687 16.6286Z"
                            stroke="white"
                            strokeWidth="1.42857"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/futbolexperienceba"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                        >
                          <path
                            d="M17.7313 6.24704C17.6176 6.24704 17.5086 6.20188 17.4283 6.12151C17.3479 6.04114 17.3027 5.93213 17.3027 5.81846C17.3027 5.7048 17.3479 5.59579 17.4283 5.51542C17.5086 5.43505 17.6176 5.38989 17.7313 5.38989"
                            stroke="white"
                            strokeWidth="1.42857"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17.7314 6.24704C17.8451 6.24704 17.9541 6.20188 18.0345 6.12151C18.1149 6.04114 18.16 5.93213 18.16 5.81846C18.16 5.7048 18.1149 5.59579 18.0345 5.51542C17.9541 5.43505 17.8451 5.38989 17.7314 5.38989"
                            stroke="white"
                            strokeWidth="1.42857"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1.49976 5.8818C1.49976 4.71197 1.96415 3.59005 2.79077 2.76286C3.6174 1.93566 4.73854 1.47095 5.90756 1.47095H17.6628C18.2417 1.47095 18.8148 1.58504 19.3496 1.8067C19.8844 2.02837 20.3703 2.35327 20.7796 2.76286C21.1889 3.17244 21.5136 3.65869 21.7351 4.19384C21.9566 4.72899 22.0706 5.30256 22.0706 5.8818V17.6452C22.0706 18.8151 21.6062 19.937 20.7796 20.7642C19.953 21.5914 18.8318 22.0561 17.6628 22.0561H5.90584C4.73682 22.0561 3.61568 21.5914 2.78906 20.7642C1.96244 19.937 1.49805 18.8151 1.49805 17.6452V5.88009L1.49976 5.8818Z"
                            stroke="white"
                            strokeWidth="1.42857"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.41699 11.7635C7.41699 12.3376 7.52998 12.906 7.74952 13.4364C7.96905 13.9668 8.29082 14.4487 8.69647 14.8546C9.10211 15.2605 9.58368 15.5825 10.1137 15.8022C10.6437 16.0219 11.2117 16.1349 11.7854 16.1349C12.3591 16.1349 12.9271 16.0219 13.4571 15.8022C13.9871 15.5825 14.4687 15.2605 14.8743 14.8546C15.28 14.4487 15.6017 13.9668 15.8213 13.4364C16.0408 12.906 16.1538 12.3376 16.1538 11.7635C16.1538 10.6041 15.6935 9.49225 14.8743 8.67245C14.0551 7.85265 12.944 7.39209 11.7854 7.39209C10.6268 7.39209 9.5157 7.85265 8.69647 8.67245C7.87723 9.49225 7.41699 10.6041 7.41699 11.7635Z"
                            stroke="white"
                            strokeWidth="1.42857"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                      <a /* href="http://https://www.tiktok.com/"
                       target="_blank"
                       rel="noreferrer" */
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                        >
                          <path
                            d="M14.498 16.6577V1.95599M14.498 16.6646C14.498 17.6454 14.2071 18.6043 13.6621 19.4199C13.1172 20.2354 12.3426 20.8711 11.4364 21.2465C10.5302 21.6218 9.53303 21.7201 8.571 21.5287C7.60896 21.3373 6.72528 20.865 6.03169 20.1714C5.3381 19.4778 4.86576 18.5941 4.6744 17.6321C4.48304 16.6701 4.58125 15.6729 4.95662 14.7667C5.33199 13.8605 5.96765 13.0859 6.78322 12.541C7.5988 11.996 8.55765 11.7051 9.53853 11.7051"
                            stroke="white"
                            strokeWidth="1.71429"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14.498 1.95428C14.4976 2.9199 14.6874 3.87615 15.0566 4.76839C15.4258 5.66063 15.9672 6.47139 16.6499 7.15434C17.3325 7.8373 18.143 8.37906 19.0351 8.74869C19.9271 9.11832 20.8833 9.30857 21.8489 9.30857"
                            stroke="white"
                            strokeWidth="1.71429"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="divisor-footer"></div>

            <div className="footer-terms">
              <p>
                TERMS & CONDITIONS | PRIVACY | LEGAL NOTICE.<br></br>
                all rights reserved © 2023
              </p>
            </div>
          </div>
        </footer>
      ) : (
        <footer className="container-footer">
          <img
            src="img/banner-footer.png"
            alt="banner footer"
            className="imagen-fondo-footer"
          />

          <div className="footer-textos">
            <div className="footer-container">
              <div className="footer-logo">
                <img
                  src="img/LogoFooter.svg"
                  alt="Logo de Futbol Experience"
                  className="img-logo-footer"
                />
                <img
                  src="img/LogoFooterTablet.svg"
                  alt="Logo de Futbol Experience"
                  className="img-logo-footerTablet"
                />
                <img
                  src="img/LogoFooterMobile.svg"
                  alt="Logo de Futbol Experience"
                  className="img-logo-footerMobile"
                />
              </div>

              <div className="footer-columns">
                <div className="footer-navigation">
                  <strong>Browser</strong>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/nosotros"}>About us</Link>
                  </li>
                  <li>
                    <Link to={"experiencia-maradona"}>Maradona Experience</Link>
                  </li>
                  <li>
                    <Link to={"experiencia-boca-river"}>
                      Boca River Experience
                    </Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                </div>

                <div className="footer-rigth">
                  <div className="footer-contact">
                    <strong>Contact</strong>
                    <li>
                      <a
                        href="mailto:contact@futbolexperience.com.ar?subject=Hi,%20I%20need%20information%20about%20experiences"
                        target="_blank"
                        rel="noreferrer"
                      >
                        contact@futbolexperience.com.ar
                      </a>
                    </li>
                    <li>Mobile phone: +54 9 11 2659-7630</li>
                  </div>
                  <br></br>
                  <div className="footer-network">
                    <strong>Social Networks</strong>
                    <div className="footer-network__svg">
                      <a
                        href={`https://web.whatsapp.com/send?phone=${contact.number}&text=${contact.english.message}&app_absent=0`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M11.9912 1.50855C6.27807 1.50855 1.50709 6.29141 1.50709 12.0034C1.50929 14.0711 2.12001 16.0923 3.26302 17.8148L1.50195 22.5034L7.39329 21.4371C8.82607 22.1335 10.3984 22.4946 11.9912 22.4931C17.7096 22.4966 22.4874 17.7206 22.4874 12.0051C22.4874 6.29655 17.7078 1.50512 11.9912 1.50855Z"
                            stroke="white"
                            strokeWidth="1.42857"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.5687 16.6286C13.9888 17.5389 15.4672 16.8754 16.4985 16.1057C17.2094 15.5743 17.1872 14.5509 16.579 13.9029L15.3799 12.6257C14.9259 13.08 14.0385 13.3063 13.4235 13.1177C12.0993 12.7149 11.5442 12.0257 11.0937 11.3229C10.5781 10.5171 11.1622 9.31372 11.6162 8.85943L10.28 7.63886C9.71637 7.12457 8.86153 7.03886 8.36987 7.62171C7.39684 8.77543 6.79383 10.5291 7.50819 11.6451C8.79301 13.6491 10.5661 15.3429 12.5687 16.6286Z"
                            stroke="white"
                            strokeWidth="1.42857"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                      <a
                        href="http://https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                        >
                          <path
                            d="M17.7313 6.24704C17.6176 6.24704 17.5086 6.20188 17.4283 6.12151C17.3479 6.04114 17.3027 5.93213 17.3027 5.81846C17.3027 5.7048 17.3479 5.59579 17.4283 5.51542C17.5086 5.43505 17.6176 5.38989 17.7313 5.38989"
                            stroke="white"
                            strokeWidth="1.42857"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17.7314 6.24704C17.8451 6.24704 17.9541 6.20188 18.0345 6.12151C18.1149 6.04114 18.16 5.93213 18.16 5.81846C18.16 5.7048 18.1149 5.59579 18.0345 5.51542C17.9541 5.43505 17.8451 5.38989 17.7314 5.38989"
                            stroke="white"
                            strokeWidth="1.42857"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1.49976 5.8818C1.49976 4.71197 1.96415 3.59005 2.79077 2.76286C3.6174 1.93566 4.73854 1.47095 5.90756 1.47095H17.6628C18.2417 1.47095 18.8148 1.58504 19.3496 1.8067C19.8844 2.02837 20.3703 2.35327 20.7796 2.76286C21.1889 3.17244 21.5136 3.65869 21.7351 4.19384C21.9566 4.72899 22.0706 5.30256 22.0706 5.8818V17.6452C22.0706 18.8151 21.6062 19.937 20.7796 20.7642C19.953 21.5914 18.8318 22.0561 17.6628 22.0561H5.90584C4.73682 22.0561 3.61568 21.5914 2.78906 20.7642C1.96244 19.937 1.49805 18.8151 1.49805 17.6452V5.88009L1.49976 5.8818Z"
                            stroke="white"
                            strokeWidth="1.42857"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.41699 11.7635C7.41699 12.3376 7.52998 12.906 7.74952 13.4364C7.96905 13.9668 8.29082 14.4487 8.69647 14.8546C9.10211 15.2605 9.58368 15.5825 10.1137 15.8022C10.6437 16.0219 11.2117 16.1349 11.7854 16.1349C12.3591 16.1349 12.9271 16.0219 13.4571 15.8022C13.9871 15.5825 14.4687 15.2605 14.8743 14.8546C15.28 14.4487 15.6017 13.9668 15.8213 13.4364C16.0408 12.906 16.1538 12.3376 16.1538 11.7635C16.1538 10.6041 15.6935 9.49225 14.8743 8.67245C14.0551 7.85265 12.944 7.39209 11.7854 7.39209C10.6268 7.39209 9.5157 7.85265 8.69647 8.67245C7.87723 9.49225 7.41699 10.6041 7.41699 11.7635Z"
                            stroke="white"
                            strokeWidth="1.42857"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                      <a /* href="http://https://www.tiktok.com/"
                       target="_blank"
                       rel="noreferrer" */
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                        >
                          <path
                            d="M14.498 16.6577V1.95599M14.498 16.6646C14.498 17.6454 14.2071 18.6043 13.6621 19.4199C13.1172 20.2354 12.3426 20.8711 11.4364 21.2465C10.5302 21.6218 9.53303 21.7201 8.571 21.5287C7.60896 21.3373 6.72528 20.865 6.03169 20.1714C5.3381 19.4778 4.86576 18.5941 4.6744 17.6321C4.48304 16.6701 4.58125 15.6729 4.95662 14.7667C5.33199 13.8605 5.96765 13.0859 6.78322 12.541C7.5988 11.996 8.55765 11.7051 9.53853 11.7051"
                            stroke="white"
                            strokeWidth="1.71429"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14.498 1.95428C14.4976 2.9199 14.6874 3.87615 15.0566 4.76839C15.4258 5.66063 15.9672 6.47139 16.6499 7.15434C17.3325 7.8373 18.143 8.37906 19.0351 8.74869C19.9271 9.11832 20.8833 9.30857 21.8489 9.30857"
                            stroke="white"
                            strokeWidth="1.71429"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="divisor-footer"></div>

            <div className="footer-terms">
              <p>
                TERMS & CONDITIONS | PRIVACY | LEGAL NOTICE.<br></br>
                all rights reserved © 2023
              </p>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};
