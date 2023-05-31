import theme from "./theme";
import type { ThemeOptions } from "./types"

const blueTheme: ThemeOptions = {
  ...theme,
  colorPalette: {
    primary: {
      main: '#2065D1',
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
      opacity: (a) => `rgba(32, 101, 209, ${a})`
    },
    text: {
      main: '#2065D1',
      default: '#131313',
      textSecondary: '#6c6b7b',
      disabled: '#86909c',
      dark: '#131313',
      secondary: '#8c8c8c',
    },
    button: {
      main: '#2065D1',
      default: '#FFFFFF',
      background: '#2065D1',
      hover: 'rgba(32, 101, 209, .8)'
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
      active: 'rgba(32, 101, 209, 0.08)',
      activeHover: 'rgba(32, 101, 209, 0.15)',
    },
    gradient: {
      propagate: '-webkit-linear-gradient(300deg, rgb(32, 101, 209) 0%, rgb(255, 171, 0) 25%, rgb(32, 101, 209) 50%, rgb(255, 171, 0) 75%, rgb(32, 101, 209) 100%) 0% 0% / 400%',
      button: 'linear-gradient(76.35deg, rgb(32, 101, 209) 15.89%, rgb(255, 171, 0) 89.75%)',
      logo: 'linear-gradient(300deg, rgb(32, 101, 209) 0%, rgb(255, 171, 0) 100%)'
    }
  },
  palette: {
    primary: {
      main: '#2065D1',
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

export default blueTheme
