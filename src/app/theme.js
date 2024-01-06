import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fafafa',
      dark: '#212121',
    },
  },
  components: {
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
