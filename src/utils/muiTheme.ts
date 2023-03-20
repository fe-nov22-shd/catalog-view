import {createTheme } from '@mui/material/styles';

export const theme = createTheme({
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
      main: "#313237"
    },
    secondary: {
      main: "#89939a"
    }
  },

  typography: {
    fontFamily: ['Mont', 'Arial', 'sans-serif'].join(',')
  },

  shape: {
    borderRadius: 0
  },

  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          "&.Mui-selected": {
            backgroundColor: '#fff',
            "&:hover": {
              backgroundColor: '#FAFBFC',
            }
          },
          "&:hover": {
            backgroundColor: '#FAFBFC',

          }
        }
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          borderColor: '#fff',
          "&.Mui-selected": {
            backgroundColor: '#313237',
            borderColor: '#313237',
            color: '#fff',
            "&:hover": {
              borderColor: '#313237',
              backgroundColor: '#313237',
            }
          },
          "&:hover": {
            backgroundColor: '#fff',
            borderColor: '#313237',
          }
        }
      },
    },
  },
});
