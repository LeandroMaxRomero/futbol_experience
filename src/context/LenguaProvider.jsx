import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const LenguaContext = createContext();

const LenguaProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const language = localStorage.getItem("lang");
    if (language) return language;
    else return "castellano";
  });

  /* echale un ojo pq no se que pueda estar pasando que aun teniendo el estado en false pone el idioma ingles */

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  /* funcion que cambia de lengua */
  const changeLang = (lang) => {
    setLang(lang);
  };

  return (
    <LenguaContext.Provider value={{ lang, changeLang }}>
      {children}
    </LenguaContext.Provider>
  );
};

LenguaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LenguaProvider };
