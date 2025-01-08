import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#739072', // Soft sage green
      light: '#96B6C5',
      dark: '#4F6F52',
    },
    secondary: {
      main: '#ADC4CE', // Soft blue-grey
      light: '#EEE0C9',
      dark: '#96B6C5',
    },
    background: {
      default: '#F8FAF9',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C3639',
      secondary: '#526D82',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'SF Pro Display',
      'Inter',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: [
        'SF Pro Display',
        '-apple-system',
        'BlinkMacSystemFont',
        'Inter',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
      ].join(','),
      fontSize: '3.5rem',
      fontWeight: 600, // Slightly reduced weight for softer look
      letterSpacing: '-0.025em',
    },
    h2: {
      fontFamily: [
        'SF Pro Display',
        '-apple-system',
        'BlinkMacSystemFont',
        'Inter',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
      ].join(','),
      fontSize: '2.5rem',
      fontWeight: 500,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: [
        'SF Pro Display',
        '-apple-system',
        'BlinkMacSystemFont',
        'Inter',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
      ].join(','),
      fontSize: '2rem',
      fontWeight: 500,
      letterSpacing: '-0.015em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      letterSpacing: '-0.01em',
      color: '#526D82',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          padding: '10px 24px',
          letterSpacing: '-0.01em',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

export default theme; 