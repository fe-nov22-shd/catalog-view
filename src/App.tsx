import './App.scss';

import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './modules/HomePage';
import { PhonesPage } from './modules/PhonesPage';
import { TabletsPage } from './modules/TabletsPage';
import { AccessoriesPage } from './modules/AccessoriesPage';
import { FavoritesPage } from './modules/FavoritesPage';
import { NotFoundPage } from './modules/NotFoundPage';
import { ShoppingCartPage } from './modules/ShoppingCartPage';
import { ProductDetailsPage } from './modules/ProductDetailsPage';
import { ContactUs } from './modules/ContactUsPage/ContactUs';
import { RightsPage } from './modules/RightsPage/Rights';

import { Footer } from '../src/components/Footer/Footer';
import { Header } from "../src/components/Header/Header";
import React from 'react';

export const App = () => {
  return (
      <div className="App">
        <Header />
        <main className='main'>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="phones">
              <Route index element={<PhonesPage />} />

              <Route path=":productId" element={<ProductDetailsPage />} />

            </Route>

            <Route path="tablets">
              <Route index element={<TabletsPage />} />

              <Route path=":productId" element={<ProductDetailsPage />} />
            </Route>

            <Route path="accessories" element={<AccessoriesPage />} />

            <Route path="cart" element={<ShoppingCartPage />} />

            <Route path="favourites" element={<FavoritesPage />} />

            <Route path="cart" element={<ShoppingCartPage />} />

            <Route path="home" element={<Navigate to="/" replace />} />

            <Route path="contact_us" element={<ContactUs />} />
            <Route path="rights" element={<RightsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
};
