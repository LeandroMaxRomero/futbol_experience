import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LenguaContext = createContext();

// export default LenguaContext;

const LenguaProvider = ({ children }) => {
  
  const [lengua, setLengua] = useState('castellano');

  return (
    <LenguaContext.Provider value={{ lengua, setLengua }}>
      {children}
    </LenguaContext.Provider>
  );
};

LenguaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LenguaProvider };