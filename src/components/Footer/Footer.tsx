import './Footer.scss';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg'
import vector from '../../img/Vector.svg'
import { useCallback } from 'react';

export const  Footer = () => {

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[]);

  return (
    <footer className='footer'>
      <div className="footer__container container" >
        <div className="footer__logo logo">
          <img onClick={handleScrollToTop} src={logo} alt="Logo" />
        </div>
        <nav className="footer__navigation navigation">
              <Link className='navigation__link' to="https://github.com/fe-nov22-shd/catalog-view" target="_blank">GitHub</Link>
              <Link className='navigation__link' to="/contact_us">Contacts</Link>
              <Link className='navigation__link' to="/rights">Rights</Link>
        </nav>
        <div className="footer__scroll scroll">
          <p className='scroll__text'onClick={handleScrollToTop}>Back to top</p>
          <button className='scroll__button button' onClick={handleScrollToTop}>
            <img src={vector} alt="Vector" />
          </button>
        </div>
      </div>
    </footer>
  );
}
