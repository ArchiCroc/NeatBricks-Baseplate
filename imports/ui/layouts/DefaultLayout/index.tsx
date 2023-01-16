import React from 'react';
//import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import ErrorBoundary from '/imports/ui/components/ErrorBoundary';

import theme from './theme';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      {/* <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} /> */}
      <CssBaseline />
      <ErrorBoundary>
        <Header />
        {children}
        <Footer />
      </ErrorBoundary>
    </ThemeProvider>
  );
}
