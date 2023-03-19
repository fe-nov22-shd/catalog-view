import React, { useCallback, useState } from 'react';
import './Header.scss';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { HeaderIcons } from '../HeaderIcons';
import close from '../../img/close.svg';
import burger from '../../img/burger.svg';
import Grid from "@mui/material/Grid";

export const Header: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpened(current => !current);
  }, [])

  return (
    <Grid container rowSpacing={1} columnSpacing={3}>
      <Grid item tablet={12} tabletXL={12} desktop={12} mobile={12}>
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
      </Grid>
    </Grid>
  );
};
