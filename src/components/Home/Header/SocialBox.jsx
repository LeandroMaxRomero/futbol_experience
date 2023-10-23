import { useContext } from "react";
import { LenguaContext } from "../../../context/LenguaProvider";

export const SocialBox = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();
  return (
    <a
      className="container-social"
      style={{ cursor: "pointer" }}
      href="https://www.instagram.com/futbolexperienceba"
      target="_blank"
      rel="noreferrer"
    >
      {lang === "castellano" ? (
        <p className="logo-texto">Conocenos</p>
      ) : (
        <p className="logo-texto">Follow us</p>
      )}
        <img src="img/Instagram.svg" alt="logo instagram"></img>
    </a>
  );
};
