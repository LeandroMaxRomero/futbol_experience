import { useContext } from "react";
import { LenguaContext } from "../../../context/LenguaProvider";

export const SocialBox = () => {

    const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();
  return (

    <div className="container-social">
        {
            lang==='castellano'
            ?
            <p className="logo-texto">Conocenos</p>
            :
            <p className="logo-texto">Follow us</p>
        }
        <img className="logo-ig" src="src/img/Instagram.svg" alt="logo IG" />
    </div>

    
  )
}
