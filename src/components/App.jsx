import React from 'react';
// import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import MainLayout from './MainLayout'; // Импортируйте компоненты страниц
import MainPage from '../pages/MainPage';
import CatalogPage from '../pages/CatalogPage';
import FavoritesPage from '../pages/FavoritesPage';
// import NotFoundPage from './NotFoundPage';
// import Spinner from '../../components/Spinner/Spinner';
// import FavoritesPage from './FavoritesPage';

export default function App() {
  return (
    // <Suspense fallback={<Spinner />}>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    /* </Suspense> */
  );
}

// export default App;
//  <Route
//    path="account"
//    element={<PrivateRoute redirectTo="/login" component={<AccountPage />} />}
//  />;
