import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import store, { persistor } from '../../store/store';
import { routes } from './routes';
import HomePage from '../home-page/HomePage';
import BuyPage from '../buy-page/BuyPage';
import FavoritesPage from '../favorites-page/FavoritesPage';
import LoginPage from '../login-page/LoginPage';
import RegistrationPage from '../registration-page/RegistrationPage';
import ProductPage from '../product-page/ProductPage';
import AccountPage from '../account-page/AccountPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppRoutes: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null} />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path={routes.HOME_ROUTE} element={<HomePage />} />
          <Route path={routes.PRODUCT_ROUTE} element={<ProductPage />} />
          <Route path={routes.BUY_ROUTE} element={<BuyPage />} />
          <Route path={routes.FAVORITES_ROUTE} element={<FavoritesPage />} />
          <Route path={routes.LOGIN_ROUTE} element={<LoginPage />} />
          <Route path={routes.SIGN_UP_ROUTE} element={<RegistrationPage />} />
          <Route path={routes.ACCOUNT_ROUTE} element={<AccountPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default AppRoutes;
