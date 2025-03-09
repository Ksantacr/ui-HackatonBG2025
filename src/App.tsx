// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './loginPage';
import HomePage from './homePage';
import ConfirmUserPage from './confirmUserPage';
import './App.css'
import MainLayout from "./layout/ mainLayout";
import Community from './pages/community';
import PymeDetail from './pages/pyme-datails';

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
        <Route path="/confirm" element={<ConfirmUserPage />} />
        {/*<Route path="/home" element={isAuthenticated() ? <PymeDetail /> : <Navigate replace to="/login" />} />*/}
        {/*<Route path="/home" element={<PymeDetail />} />*/}
        <Route path="/home" element={<Community />} />
        <Route path="*" element={<Navigate to="/home" replace={true} />}
        
    />
      </Routes>
    </MainLayout>
    </BrowserRouter>
  );
};

export default App;
