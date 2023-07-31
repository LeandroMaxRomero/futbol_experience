import { useContext } from 'react';
import LenguaContext from '../../context/LenguaContext';


export const HomePage = () => {
    const useLengua = () => useContext(LenguaContext);
    const { lengua, setLengua, traduccion } = useLengua();
  
    const changeLengua = (lng) => {
      setLengua(lng);
    };
  
    const { welcome, about, contact } = traduccion[lengua];
  
    return (
      <div>
        <div>
          <button onClick={() => changeLengua('castellano')}>Español</button>
          <button onClick={() => changeLengua('english')}>English</button>
        </div>
        <h1>{welcome}</h1>
        <p>{about}</p>
        <p>{contact}</p>
      </div>
    );
}
