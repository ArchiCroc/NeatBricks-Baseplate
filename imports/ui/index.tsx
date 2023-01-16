import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import IndexPage from './pages/IndexPage';

export default function UI() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
    </DefaultLayout>
  );
}
