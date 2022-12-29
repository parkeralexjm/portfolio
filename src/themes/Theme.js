import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#72dbd1'
    },
    secondary: {
      main: '#fad037'
    },
    error: {
      main: '#f25641',
      contrastText: 'black'
    },
    action: {
      disabledBackground: '#dddddd',
      disabled: '#626262',
    }
  },
  typography: {
    h1: {
      fontSize: '3rem',
      '@media (min-width:700px)': {
        fontSize: '3.75rem',
      },
      fontWeight: '700',
      letterSpacing: '0.15rem',
      margin: '0',
      textAlign: 'center',
    },
    h2: {
      fontSize: '1.4rem',
      '@media (min-width:600px)': {
        fontSize: '1.7rem'
      },
      fontWeight: '400',
      textAlign: 'center',
      width: '80%'
    },
    h3: {
      fontSize: '2.5rem',
      '@media (min-width:600px)': {
        fontSize: '3.75rem'
      },
      fontWeight: '500',
      letterSpacing: '0.15rem'
    },
    h6: {
      fontSize: '0.65',
    },
    subtitle1: {
      fontSize: '1.25rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem'
      },
      fontWeight: '400'
    }
  }
});

export default theme;