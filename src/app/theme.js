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
            color: 'white',
            textTransform: 'none',
            fontSize: '1rem',
            background: 'linear-gradient(90deg,#00e7e7,#8946df)',
            border: '2px solid',
            borderImage: 'linear-gradient(90deg, #00e7e7, #8946df)',
            borderImageSlice: 1,
            borderRadius: '4px',
            '&:hover': {
              border: '2px solid #fafafa',
            },
          }),
        },
      ],
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            color:'white',
            background: 'linear-gradient(90deg, #00e7e7, #8946df)',
          },
        },
      },
    },
  },
});

export default theme;
