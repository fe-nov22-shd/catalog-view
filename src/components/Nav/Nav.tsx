import React from 'react';

import { NavItem } from '../NavItem';

import './Nav.scss';

type Props = {
  closeMenu: () => void;
}

export const Nav: React.FC<Props> = ({closeMenu}) => {
  return (
    <nav className="nav" onClick={closeMenu}>
      <ul className="nav__list">
        <NavItem to="/" title="Home" />
        <NavItem to="phones" title="Phones" />
        <NavItem to="tablets" title="Tablets" />
        <NavItem to="accessories" title="Accessories" />
      </ul>
    </nav>
  );
}
