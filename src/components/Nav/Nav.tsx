import { NavLink } from "react-router-dom";
import classnames from 'classnames';

import './Nav.scss';

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className='nav__list'>
        <li className='nav__item'>
          <NavLink
            className={({ isActive }) =>
              classnames("nav__link", {
                "nav__link--active": isActive,
              })
            }
            to="/"
          >
            Home
          </NavLink>
        </li>

        <li className='nav__item'>
          <NavLink
            className={({ isActive }) =>
              classnames("nav__link", {
                "nav__link--active": isActive,
              })
            }
            to="phones"
          >
            phones
          </NavLink>
        </li>

        <li className='nav__item'>
          <NavLink
            className={({ isActive }) =>
              classnames("nav__link", {
                "nav__link--active": isActive,
              })
            }
            to="tablets"
          >
            tablets
          </NavLink>
        </li>

        <li className='nav__item'>
          <NavLink
            className={({ isActive }) =>
              classnames("nav__link", {
                "nav__link--active": isActive,
              })
            }
            to="accessories"
          >
            accessories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
