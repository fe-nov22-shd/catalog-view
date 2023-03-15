import './Footer.scss';
import { Link } from 'react-router-dom';
import logo from '../../img/Logo.svg'
import vector from '../../img/Vector.svg'

export const  Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='footer'>
      <div className="footer_container container" >
        <div className="footer_logo logo">
          <img onClick={handleScrollToTop} src={logo} alt="Logo" />
        </div>
        <nav className="footer_nav nav">
              <Link className='nav_link' to="https://github.com/fe-nov22-shd/catalog-view">GitHub</Link>
              <Link className='nav_link' to="/contacts">Contacts</Link>
              <Link className='nav_link' to="/rights">Rights</Link>
        </nav>
        <div className="footer_scroll scroll">
          <p className='scroll_text'>Back to top</p>
          <button className='scroll_button button' onClick={handleScrollToTop}>
            <img src={vector} alt="Vector" />
          </button>
        </div>
      </div>
    </footer>
  );
}
