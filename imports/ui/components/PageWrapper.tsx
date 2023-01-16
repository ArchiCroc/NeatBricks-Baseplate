import React from 'react';
import Container from '@mui/material/Container';
import { Breakpoint } from '@mui/system';

interface PageWrapperProps {
  children: React.ReactNode;
  maxWidth?: Breakpoint | false;
}
export default function PageWrapper(props: PageWrapperProps) {
  const { children } = props;
  return (<Container component="main" {...props}> {children}</Container >);
}
