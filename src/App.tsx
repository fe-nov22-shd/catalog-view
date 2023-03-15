import './App.css';
import { Routes, Route, Navigate, NavLink } from 'react-router-dom';
import { HomePage } from './modules/HomePage';
import { PhonesPage } from './modules/PhonesPage';
import { TabletsPage } from './modules/TabletsPage';
import { AccessoriesPage } from './modules/AccessoriesPage';
import { FavoritesPage } from './modules/FavoritesPage';
import { NotFoundPage } from './modules/NotFoundPage';
import { ShoppingCartPage } from './modules/ShoppingCartPage';
import { ProductDetailsPage } from './modules/ProductDetailsPage';
import React from 'react';
import { Footer } from '../src/components/Footer/Footer'

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink to="/">Home</NavLink>
        <NavLink to="phones">phones</NavLink>
        <NavLink to="tablets">tablets</NavLink>
        <NavLink to="accessories">accessories</NavLink>
        <NavLink to="cart">cart</NavLink>
      </header>
      <main>

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="phones" >
            <Route index element={<PhonesPage />} />

            <Route path=":phoneId" element={<ProductDetailsPage />} />
          </Route>

          <Route path="tablets" element={<TabletsPage />} />

          <Route path="accessories" element={<AccessoriesPage />} />

          <Route path="cart" element={<ShoppingCartPage />} />

          <Route path="favorites" element={<FavoritesPage />} />

          <Route path="cart" element={<ShoppingCartPage />} />

          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
