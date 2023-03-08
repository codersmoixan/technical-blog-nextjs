import theme from "./theme";
import type { ThemeOptions } from "./types"

const defaultTheme: ThemeOptions = {
  ...theme,
  colorPalette: {
    primary: {
      main: '#00AB55',
      default: '#FFFFFF',
      secondary: 'rgba(229 230, 232, 1)',
      colorSecondary: '#d8dee3',
      transparent: 'transparent',
      dark: '#131313',
      sullenGrey: '#33323e',
      lightGrey: '#6c6b7b',
      lightPurple: '#853bce',
      error: '#d32f2f',
      placeholder: '#c1c5cd',
      disabled: '#86909c',
      darkPeach: '#f8f6f1',
    },
    background: {
      main: 'rgb(252, 252, 252)',
      default: '#FFFFFF',
      primary: 'rgb(252, 252, 252)',
      secondary: 'rgba(145, 158, 171, 0.08)',
    },
    text: {
      main: '#00AB55',
      default: '#131313',
      textSecondary: '#6c6b7b',
      disabled: '#86909c',
      dark: '#131313',
      secondary: '#86909c',
    },
    button: {
      main: '#00AB55',
      default: '#FFFFFF',
      background: '#00AB55',
      hover: 'rgba(0, 171, 85, .8)'
    },
    setting: {
      one: '#00AB55',
      two: '#078DEE',
      three: '#7635dc',
      four: '#2065D1',
      five: '#fda92d',
      six: '#FF3030',
      colorSecondary: 'rgba(99, 115, 129)',
      hover: 'rgba(186, 191, 200, 0.08)',
      active: 'rgba(0, 171, 85, 0.08)',
      activeHover: 'rgba(0, 171, 85, 0.15)',
    },
    gradient: {
      propagate: '-webkit-linear-gradient(300deg, rgb(0, 171, 85) 0%, rgb(255, 171, 0) 25%, rgb(0, 171, 85) 50%, rgb(255, 171, 0) 75%, rgb(0, 171, 85) 100%) 0% 0% / 400%',
      button: 'linear-gradient(76.35deg, rgb(0, 171, 85) 15.89%, rgb(255, 171, 0) 89.75%)',
    }
  },
  palette: {
    primary: {
      main: '#00AB55',
    },
    background: {
      default: 'rgb(252, 252, 252)',
    },
    text: {
      primary: '#181622',
      secondary: '#86909c',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: '#181622'
      }
    }
  }
}

export default defaultTheme
