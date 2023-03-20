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

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      tabletXL: 768,
      desktop: 1200,
    },
  },
  palette: {
    primary: {
      main: '#313237'
    },
    secondary: {
      main: '#89939a'
    }
  },
  typography: {
    fontFamily: 'Mont'
  },
  shape: {
    borderRadius: 0
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: '#fff',
          borderRadius: '0'
        },
      },
    },
    // MuiPaginationItem: {
    //   styleOverrides: {
    //     // Name of the slot
    //     root: {
    //       // Some CSS
    //       backgroundColor: '#fff',
    //       borderRadius: '0'
    //     },
    //   },
    // },
  },
});

export const GitProvider:React.FC<Props> = ({ children }) => (
  <ThemeProvider
    theme={theme}
  >
  { children }
  </ThemeProvider>
);
