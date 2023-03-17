import React from 'react';
import heart from '../../img/heart.svg';
import cart from '../../img/cart.svg';
import { NavIcon } from '../NavIcon';

type Props = {
  closeMenu: () => void;
};

export const HeaderIcons: React.FC<Props> = ({ closeMenu }) => {
  return (
    <>
      <NavIcon
        to="favourites"
        title={<img src={heart} alt="heart" />}
        closeMenu={closeMenu}
      />
      <NavIcon
        to="cart"
        closeMenu={closeMenu}
        title={<img src={cart} alt="cart" />}
      />
    </>
  );
};
