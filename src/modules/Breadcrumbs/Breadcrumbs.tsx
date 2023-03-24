import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.scss';
import logo from '../../icons/Home.svg';
import vector from '../../icons/VectorRight.svg';
import vectorLeft from '../../icons/VectorLeft.svg';


export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <nav aria-label="breadcrumbs">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/" className="breadcrumb-link">
            <img src={logo} alt="Home" />
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <li key={name} className="breadcrumb-item active actimel" aria-current="page">
              <img src={vector} alt="vector-right" className="vector"  />
              {name.slice(0, 1).toUpperCase() + name.slice(1).replace(/-/g, ' ')}
            </li>
          ) : (
            <li key={name} className="breadcrumb-item link-width">
              <Link to={routeTo} className="breadcrumb-link">
                <img
                  src={vector}
                  alt="vector-right"
                  className="vector"
                />
                {name.slice(0, 1).toUpperCase() + name.slice(1)}
              </Link>
            </li>
          );
        })}
      </ol>
      {pathnames.length > 1 && (<button onClick={handleBack} className="breadcrumb-button">
        <img src={vectorLeft} alt="Vector Left" />
        Back
      </button>)
      }
    </nav>
  );
};
