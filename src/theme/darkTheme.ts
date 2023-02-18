import { breakpoints } from "./theme"

const darkTheme = {
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
      main: 'rgb(22, 28, 36)',
      default: 'rgba(22, 28, 36, 0.94)',
      dark: '#131313',
      secondary: 'rgba(145, 158, 171, 0.08)'
    },
    text: {
      main: '#00AB55',
      default: '#FFFFFF',
      textSecondary: '#FFFFFF',
      disabled: '#86909c',
      dark: '#131313',
      secondary: '#86909c',
    },
    setting: {
      one: '#00AB55',
      two: '#078DEE',
      three: '#7635dc',
      four: '#2065D1',
      five: '#fda92d',
      six: '#FF3030',
      colorSecondary: 'rgba(99, 115, 129)',
      bgSecondary: 'rgba(229 230, 232, .1)',
      bgActive: 'rgba(245, 239, 253, 1)',
    },
  },
  componentStyleOverrides: {
    Navigation: {
      root: {
        color: 'pink'
      }
    },
    HomeTechnologySharing: {
      development: {
        [breakpoints.up('md')]: {
          boxShadow: 'rgb(0 0 0 / 40%) -40px 40px 80px',
        }
      }
    },
    HomeCategory: {
      content: {
        borderColor: 'rgba(145, 158, 171, 0.24)'
      },
      item: {
        borderColor: 'rgba(145, 158, 171, 0.24)'
      }
    },
    HomeCategoryList: {
      item: {
        color: '#FFFFFF'
      },
      button: {
        color: '#FFFFFF'
      }
    },
    HomeDesigner: {
      image: {
        boxShadow: 'rgb(0 0 0) -40px 80px 80px'
      }
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: '#FFFFFF'
      }
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          '&.MuiButton-outlinedPrimary': {
            color: '#FFFFFF'
          }
        }
      }
    },
  }
}

export default darkTheme
