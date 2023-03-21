import React, { useCallback, useState, useEffect } from 'react';
import './Header.scss';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { HeaderIcons } from '../HeaderIcons';
import close from '../../img/close.svg';
import burger from '../../img/burger.svg';
import { BurgerMenu } from '../BurgerMenu';

export const Header: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpened(current => !current);
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpened(false);
  }, [])

    useEffect(
      () =>
        isMenuOpened
          ? document.body.classList.add("page--with-menu")
          : document.body.classList.remove("page--with-menu"),
      [isMenuOpened]
    );

  return (
    <>
      <header className="header page__header">
        <div className="header__links">
          <div className="header__logo">
            <Logo />
          </div>
          <div className="header__nav">
            <Nav closeMenu={closeMenu} />
          </div>
        </div>

        <div className="header__menu-btn" onClick={toggleMenu}>
          {isMenuOpened ? (
            <img src={close} alt="close" />
          ) : (
            <img src={burger} alt="burger"/>
          )}
        </div>

        <div className="header__icons">
          <HeaderIcons closeMenu={closeMenu} />
        </div>
      </header>

      <BurgerMenu isMenuOpen={isMenuOpened} closeMenu={closeMenu} />
    </>
  );
};
