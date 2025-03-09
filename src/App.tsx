// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './loginPage';
import HomePage from './pages/home-page';
import ConfirmUserPage from './confirmUserPage';
import MainLayout from "./layout/ mainLayout";
import Community from './pages/community';
import PymeDetail from './pages/pyme-datails';
import ProductPurchase from './pages/product-purchase';
import MyPyme from './pages/my-pyme';

const App = () => {
  const isAuthenticated = () => {
    const accessToken = sessionStorage.getItem('accessToken');
    return !!accessToken;
  };

  return (
    <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route path="/" element={isAuthenticated() ? <Navigate replace to="/home" /> : <Navigate replace to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/community" element={<Community />} />
        <Route path="/pyme-details" element={<PymeDetail/>} />
        <Route path="/landing-page" element={<HomePage />} />
        <Route path="/my-pyme" element={<MyPyme />} />
        <Route path="/home" element={isAuthenticated() ? <ProductPurchase/>: <Navigate replace to="/login" />} />
        <Route path="*" element={<Navigate to="/home" replace={true} />}
        
        
        
    />
      </Routes>
    </MainLayout>
    </BrowserRouter>
  );
};

export default App;
