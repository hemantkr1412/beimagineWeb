import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fafafa',
      dark: '#212121',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          border: '1px solid #bdbdbd',
          borderRadius: '4px',
          // '& label.Mui-focused': {
          //   border: '#f44336',
          // },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'text' },
          style: (theme) => ({
            textTransform: 'none',
            fontSize: '1rem',
            // color: theme.palette.secondary.main
          }),
        },
        {
          props: { variant: 'contained' },
          style: (theme) => ({
            textTransform: 'none',
            fontSize: '1rem',
            border: '2px solid #fafafa',
            color: '#0E0E0E',
            '&:hover': {
              backgroundColor: '#0E0E0E',
              color: '#fafafa',
              border: '2px solid #fafafa',
            },
          }),
        },
      ],
    },
  },
});

export default theme;
