import { HeaderContact } from "../Contact/HeaderContact";
import { AcercaDe } from "./AcercaDe";
import { DetrasDe } from "./DetrasDe";
import "../../scss/layout/_nosotros.scss";
import { ReservaNosotros } from "./ReservaNosotros";
import * as Scroll from "react-scroll";
import { useEffect } from "react";

export const Nosotros = () => {
  let scroll = Scroll.animateScroll;

  useEffect(() => {
    scroll.scrollToTop();
  });

  return (
    <>
      <HeaderContact
        imagen={"img/header-nosotros.png"}
        tittleES="Sobre Nosotros"
        tittleEN="About Us"
      />
      <div className="nosotros">
        <AcercaDe />
        <DetrasDe />
        <ReservaNosotros />
      </div>
    </>
  );
};
