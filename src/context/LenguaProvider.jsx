import { useState } from 'react';
import LenguaContext from './LenguaContext';
import PropTypes from 'prop-types';

const LenguaProvider = ({ children }) => {
  const traduccion = {
    english: {
      welcome: "Welcome to my website!",
      about: "About Us",
      contact: "Contact"
    },
    castellano: {
      welcome: "¡Bienvenido a mi sitio web!",
      about: "Acerca de nosotros",
      contact: "Contacto"
    }
  };

  const [lengua, setLengua] = useState('castellano');

  return (
    <LenguaContext.Provider value={{ lengua, setLengua, traduccion }}>
      {children}
    </LenguaContext.Provider>
  );
};

//! Me saltaba un error de Vite con el 'children'. Tuve que descargar PropTypes con 'npm install prop-types, importar esa librería y agregar estas línes de código:
LenguaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LenguaProvider };