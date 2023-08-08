import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";
import { NavBar } from "../NavBar/NavBar";

export const HeaderContact = () => {
const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();
  return (
    <div className="header-contact">
            <NavBar />
        {
            lang==='castellano'
            ?
            <h2>Contacto</h2>
            :
            <h2>Contact</h2>
        }
    </div>
  )
}
