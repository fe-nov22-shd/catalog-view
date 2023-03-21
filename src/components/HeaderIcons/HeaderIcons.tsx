import {  NavLink } from "react-router-dom";
import classnames from 'classnames';
import {useContext} from 'react';

import './HeaderIcons.scss';
import heart from '../../img/heart.svg';
import cart from '../../img/cart.svg';
import { Badge } from "@mui/material";
import { LocaleStorageContext } from "../Context";

export const HeaderIcons = () => {
  const { favoruites, cartItems } = useContext(LocaleStorageContext);

  const favLength = favoruites ? favoruites.length : 0;
  const cartLength = cartItems ? cartItems.reduce((acc, item) => acc + item.count, 0) : 0;



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
          badgeContent={favLength}
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
          badgeContent={cartLength}
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
