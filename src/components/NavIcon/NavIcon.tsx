import { FC } from "react";
import cn from "classnames";
import { NavLink, To } from "react-router-dom";

interface Props {
  to: To;
  title: React.ReactNode;
  closeMenu: () => void;
}

export const NavIcon: FC<Props> = ({ to, title, closeMenu }) => (
  <li className="nav__item">
    <NavLink
      to={to}
      onClick={closeMenu}
      className={({ isActive }) =>
        cn("nav__link", {
          "nav__link--active": isActive,
        })
      }
    >
      {title}
    </NavLink>
  </li>
);
