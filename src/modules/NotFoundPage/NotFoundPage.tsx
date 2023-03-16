import { Link } from 'react-router-dom';
import errorImage from '../../img/Error.gif'
import './NotFoundPage.scss'

export const NotFoundPage = () => (
  <div className="notFoundContainer">
      <img src={errorImage} alt="404 error" className="error-image" />
      <Link to="/">
        <button className="notFoundContainer__back-button">Go back to HOME</button>
      </Link>
    </div>
)
