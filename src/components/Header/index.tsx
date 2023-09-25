import { HeaderContainer } from "./styles";

import logoIgnite from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { Timer } from "@phosphor-icons/react";
import { Scroll } from "@phosphor-icons/react/dist/ssr/Scroll";

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIgnite} alt="" />
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
