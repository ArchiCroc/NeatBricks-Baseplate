import React from 'react';
import Container from '@mui/material/Container';

interface PageWrapperProps {
  children: React.ReactNode;
}
export default function PageWrapper(props: PageWrapperProps) {
  const { children } = props;
  return (<Container component="main" {...props}> {children}</Container >);
}
