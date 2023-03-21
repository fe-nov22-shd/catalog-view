import {  NavLink } from "react-router-dom";
import classnames from 'classnames';

import './HeaderIcons.scss';
import heart from '../../img/heart.svg';
import cart from '../../img/cart.svg';
import { Badge } from "@mui/material";

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
        <Badge
          badgeContent={0}
          color="primary"
          overlap="circular"
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: '#EB5757',
              border: `1px solid #fff`,
              fontSize: 9,
              height: 13,
              width: 13,
              minWidth: 0,
              borderRadius: '7px',
            },
          }}
        >
          <img src={heart} alt="heart" className='header__icon-img'/>
        </Badge>
        </NavLink>


      <NavLink
        className={({ isActive }) =>
          classnames("header__icon", {
            "header__icon--active": isActive,
          })
        }
        to="cart"
      >
        <Badge
          badgeContent={1}
          color="primary"
          overlap="circular"
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: '#EB5757',
              border: `1px solid #fff`,
              fontSize: 9,
              height: 13,
              width: 13,
              minWidth: 0,
              borderRadius: '7px',
            },
          }}
        >
          <img src={cart} alt="heart" className='header__icon-img'/>
        </Badge>
      </NavLink>
    </nav>
  );
};
