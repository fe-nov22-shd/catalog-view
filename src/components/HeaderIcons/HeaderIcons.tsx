import {  NavLink } from "react-router-dom";
import classnames from 'classnames';

import './HeaderIcons.scss';
import heart from '../../img/heart.svg';
import cart from '../../img/cart.svg';

export const HeaderIcons = () => {
  return (
    <nav className="header__icons">
      <NavLink
        className={({ isActive }) =>
          classnames("header__icon", {
            "header__icon--active": isActive,
          })
        }
        to="favourites"
      >
        <img src={heart} alt="heart" className='header__icon-img'/>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          classnames("header__icon", {
            "header__icon--active": isActive,
          })
        }
        to="cart"
      >
        <img src={cart} alt="heart" className='header__icon-img'/>
      </NavLink>
    </nav>
  );
};
