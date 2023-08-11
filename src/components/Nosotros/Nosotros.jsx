import { HeaderContact } from "../Contact/HeaderContact";
import { AcercaDe } from "./AcercaDe";
import { DetrasDe } from "./DetrasDe";
import '../../scss/layout/_nosotros.scss'
export const Nosotros = () => {
  return (
    <>
      <HeaderContact tittleES="Nosotros" tittleEN="About Us"/>
      <AcercaDe/>
      <DetrasDe/>
    </>
  )
};
