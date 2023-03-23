import { Breadcrumbs } from "../Breadcrumbs";
import './AccessoriesPage.scss';
import { Link } from "react-router-dom";

export const AccessoriesPage = () => {
  return (
    <>
    <Breadcrumbs />
      <div className="accessories-page">
        <div className="accessories-page__header">
          <h1 className="accessories-page__header-title">Under Construction</h1>
        </div>
        <div className="accessories-page__content">
          <p className="accessories-page__content-text">We're currently working on something awesome.¯\_(ツ)_/¯</p>
          <Link to="/" className="accessories-page__button">Back to home </Link>
        </div>
      </div>
    </>
  );
};
