import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import IndexPage from './pages/IndexPage';
import SignInPage from './Users/pages/SignInPage';
import SignUpPage from './Users/pages/SignUpPage';
import ForgotPasswordPage from './Users/pages/ForgotPasswordPage';
import SignOutPage from './Users/pages/SignOutPage';
import ProfilePage from './Users/pages/ProfilePage';

export default function UI() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signout" element={<SignOutPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </DefaultLayout>
  );
}
