import { useContext, useEffect } from "react";
import * as Scroll from "react-scroll";
import { HeaderContact } from "../Contact/HeaderContact";
import { LenguaContext } from "../../context/LenguaProvider";

export const TermsAndCond = () => {
    let scroll = Scroll.animateScroll;

  useEffect(() => {
    scroll.scrollToTop();
  });

  const useLengua = () => useContext(LenguaContext);
  const { lang } = useLengua();
  return (
    <>
    <HeaderContact
        imagen={"img/header-nosotros.png"}
        tittleES="Términos y Condiciones"
        tittleEN="Terms & Conditions"
      />
      {
        lang==='castellano'
        ?
        <h2>Texto en catellano</h2>
        :
        <h2>Texto en Inglés</h2>
      }
    </>
  )
}
