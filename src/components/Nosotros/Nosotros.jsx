import { HeaderContact } from "../Contact/HeaderContact";
import { AcercaDe } from "./AcercaDe";
import { DetrasDe } from "./DetrasDe";
import '../../scss/layout/_nosotros.scss'
import { ReservaNosotros } from "./ReservaNosotros";

export const Nosotros = () => {
  return (
    <div className="nosotros">
      <HeaderContact imagen={"img/header-nosotros.png"} tittleES="Nosotros" tittleEN="About Us"/>
      <AcercaDe/>
      <DetrasDe/>
      <ReservaNosotros/>
    </div>
  )
};
