import React from 'react';
import ErrorBoundary from '/imports/ui/components/ErrorBoundary';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <ErrorBoundary>{children}</ErrorBoundary>
  );
}
