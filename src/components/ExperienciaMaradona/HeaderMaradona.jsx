import { useContext } from "react";
import { LenguaContext } from "../../context/LenguaProvider";
import { NavBar } from "../NavBar/NavBar"

export const HeaderMaradona = () => {
  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();
  return (
    <div className="header-maradona">
        <NavBar />
        {
            lang==='castellano'
            ?
            <h2>Experiencia Maradona</h2>
            :
            <h2>Maradona Experience</h2>
        }
    </div>
  )
}
