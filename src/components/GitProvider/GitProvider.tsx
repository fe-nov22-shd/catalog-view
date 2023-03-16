import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';

declare module '@mui/system' {
  interface BreakpointOverrides {
    // Your custom breakpoints
    mobile: true;
    tablet: true;
    tabletXL: true
    desktop: true;
    // Remove default breakpoints
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
  }
}
type Props = {
  children: React.ReactNode
}
export const GitProvider:React.FC<Props> = ({ children }) => (
  <ThemeProvider
    theme={createTheme({
      breakpoints: {
        values: {
          mobile: 0,
          tablet: 640,
          tabletXL: 768,
          desktop: 1280,
        },
      },
    })}
  >
  { children }
  </ThemeProvider>
);
