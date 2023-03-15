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
      <div className="footer-container" >
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div>
        <nav className="footer-nav">
          <ul>
            <li>
              <Link className='link' to="https://github.com/fe-nov22-shd/catalog-view">GitHub</Link>
            </li>
            <li>
              <Link className='link' to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link
               className='link'
                to="/rights"
                >
                  Rights
                </Link>
            </li>
          </ul>
        </nav>
        </div>
        <div className="scroll-to-top">
          <p className='scroll-text'>Back to top</p>
          <button onClick={handleScrollToTop}>
            <img className='vector' src={vector} alt="Vector" />
          </button>
        </div>
      </div>
    </footer>
  );
}
