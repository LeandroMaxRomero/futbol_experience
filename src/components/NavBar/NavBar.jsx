import { Logo } from "./Logo";
import { LogoCompleto } from "./LogoCompleto";
import { NavList } from "./NavList";

export const NavBar = () => {  
  return (
    <div className="container-navbar"> 
      <Logo />
      <LogoCompleto />
      <NavList />
    </div>
  )
};
