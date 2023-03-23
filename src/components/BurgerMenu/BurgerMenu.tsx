import React from 'react';

import { Nav } from '../Nav';
import { HeaderIcons } from '../HeaderIcons';

import cn from "classnames";

import './BurgerMenu.scss';

type Props = {
  isMenuOpen: boolean;
  closeMenu: () => void;
}

export const BurgerMenu: React.FC<Props> = ({isMenuOpen, closeMenu}) => {

  return (
    <div className={cn("burger-menu", { "burger-menu--active": isMenuOpen })}>
      <Nav closeMenu={closeMenu} />
      
      <div className="burger-menu__icons">
        <HeaderIcons closeMenu={closeMenu} />
      </div>
    </div>
  );
 }
