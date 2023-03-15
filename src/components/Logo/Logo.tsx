import { NavLink } from 'react-router-dom';

import './Logo.scss';
import logo from "../../img/Logo.svg";

export const Logo = () => {
  return (
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
  );
}
