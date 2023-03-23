import { FC } from 'react';
import cn from 'classnames';
import { NavLink, To } from 'react-router-dom';

interface Props {
  to: To;
  title: string;
}

export const NavItem: FC<Props> = ({ to, title }) => (
  <li className='nav__item'>
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn('nav__link', {
          'nav__link--active': isActive,
        })
      }
    >
      {title}
    </NavLink>
  </li>
);
