import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const LenguaContext = createContext();

// export default LenguaContext;

const LenguaProvider = ({ children }) => {
  const [english, setEnglish] = useState(() => {
    const language = localStorage.getItem("lang");
    if (language) return language;
    else return false;
  });

  /* echale un ojo pq no se que pueda estar pasando que aun teniendo el estado en false pone el idioma ingles */
  console.log(english);
  useEffect(() => {
    localStorage.setItem("lang", english);
  }, [english]);

  /* funcion que cambia de lengua */
  const changeLang = (lang) => {
    setEnglish(lang);
  };

  return (
    <LenguaContext.Provider value={{ english, changeLang }}>
      {children}
    </LenguaContext.Provider>
  );
};

LenguaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LenguaProvider };
