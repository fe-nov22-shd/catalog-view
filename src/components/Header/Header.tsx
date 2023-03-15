import React, { useCallback, useState } from 'react';
import { Routes, Route, Navigate, NavLink } from 'react-router-dom';
import './Header.scss';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { HeaderIcons } from '../HeaderIcons';
import close from '../../img/close.svg';
import burger from '../../img/burger.svg';


export const Header: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpened(current => !current);
  }, [])

  return (
    <header className="header">
      <Logo />

      <Nav />

      <HeaderIcons />

      <div className="header__menu-btn">
        {isMenuOpened ? (
          <img src={close} alt="close" onClick={toggleMenu} />
        ) : (
          <img src={burger} alt="burger" onClick={toggleMenu} />
        )}
      </div>
    </header>
  );
};
