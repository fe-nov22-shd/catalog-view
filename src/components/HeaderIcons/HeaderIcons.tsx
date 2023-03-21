
import React from 'react';
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { useContext } from "react";
import { LocaleStorageContext } from "../../components/Context";
import heart from "../../img/heart.svg";
import cart from "../../img/cart.svg";
import { Badge } from "@mui/material";

type Props = {
  closeMenu: () => void;
}

export const HeaderIcons: React.FC<Props> = ({closeMenu}) => {
  const { favoruites, cartItems } = useContext(LocaleStorageContext);

  return (
    <nav className="header__icons">
    <NavLink
        onClick={closeMenu}
        className={({ isActive }) =>
          classnames("header__icon", {
            "header__icon--active": isActive,
          })
        }
        to="favourites"
      >

        <Badge
          badgeContent={favoruites.length}
          color="primary"
          overlap="circular"
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#EB5757",
              border: `1px solid #fff`,
              fontSize: 9,
              height: 13,
              width: 13,
              minWidth: 0,
              borderRadius: "7px",
            },
          }}
        >
          <img src={heart} alt="heart" className="header__icon-img" />
        </Badge>
      </NavLink>

      <NavLink
        onClick={closeMenu}
        className={({ isActive }) =>
          classnames("header__icon", {
            "header__icon--active": isActive,
          })
        }
        to="cart"
      >
        <Badge
          badgeContent={cartItems.length}
          color="primary"
          overlap="circular"
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#EB5757",
              border: `1px solid #fff`,
              fontSize: 9,
              height: 13,
              width: 13,
              minWidth: 0,
              borderRadius: "7px",
            },
          }}
        >
          <img src={cart} alt="heart" className="header__icon-img" />
        </Badge>
      </NavLink>
    </nav>
  );
};
