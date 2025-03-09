import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './loginPage';
import HomePage from './pages/home-page';
import Community from './pages/community';
import PymeDetail from './pages/pyme-datails';
import ProductPurchase from './pages/product-purchase';
import MyPyme from './pages/my-pyme';
import MainLayout from './layout/ mainLayout';

const App = () => {
  const isAuthenticated = () => {
    const accessToken = sessionStorage.getItem('accessToken');
    return !!accessToken;
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public route: login page without MainLayout */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected routes wrapped with MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={isAuthenticated() ? <Navigate replace to="/home" /> : <Navigate replace to="/login" />} />
          <Route path="/community" element={<Community />} />
          <Route path="/pyme-details" element={<PymeDetail />} />
          <Route path="/landing-page" element={<HomePage />} />
          <Route path="/my-pyme" element={<MyPyme />} />
          <Route path="/home" element={isAuthenticated() ? <ProductPurchase /> : <Navigate replace to="/login" />} />
        </Route>

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to={isAuthenticated() ? "/home" : "/login"} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
