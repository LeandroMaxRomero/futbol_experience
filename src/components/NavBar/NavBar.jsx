import { Logo } from "./Logo";
import { LogoCompleto } from "./LogoCompleto";
import { LogoMobile } from "./LogoMobile";
import NavDesplegable from "./NavDesplegable";
import { NavList } from "./NavList";

export const NavBar = () => {  
  return (
    <div className="container-navbar"> 
      <Logo />
      <LogoCompleto />
      <LogoMobile />
      <NavList />
      <NavDesplegable/>
    </div>
  )
};
