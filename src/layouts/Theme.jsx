import { createTheme } from '@mui/material'

const mainRed = '#A80022'
const secondaryRed = '#651A1A'

export default createTheme({
  palette: {
    common: {
      red: `${mainRed}`,
      secondary: `${secondaryRed}`,
    },
    primary: {
      main: `${mainRed}`,
    },
    secondary: {
      main: `${secondaryRed}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
  },
})
