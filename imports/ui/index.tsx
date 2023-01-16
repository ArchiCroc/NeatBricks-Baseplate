import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import IndexPage from './pages/IndexPage';
import SignInPage from './Users/pages/SignInPage';
import SignUpPage from './Users/pages/SignUpPage';
import ForgotPasswordPage from './Users/pages/ForgotPasswordPage';

export default function UI() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </DefaultLayout>
  );
}
