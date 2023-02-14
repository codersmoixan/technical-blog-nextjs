import { createTheme } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";
import type { CSSProperties } from "@mui/styles";

const breakpoints = createBreakpoints({
  values: {
    xs: 0,
    sm: 500,
    md: 800,
    lg: 1100,
    xl: 1350
  }
})

interface ColorPaletteOptions extends Required<typeof colorPalette> {}
interface ConfigOptions extends Required<typeof config> {}

interface CustomThemeOptions {
  colorPalette: ColorPaletteOptions;
  config: ConfigOptions;
  styles: {
    verticalCenter: CSSProperties;
    inlineCenter: CSSProperties;
    spaceBetweenCenter: CSSProperties;
    columnCenter: CSSProperties;
  }
}

declare module '@mui/material/styles' {
  interface Theme extends CustomThemeOptions {}
  // allow configuration using `createTheme`
  interface ThemeOptions extends CustomThemeOptions {}
}

const TB_STATUS_TRANSITION_TIME = '.3s'
const TB_STATUS_TRANSITION = (t?: number) => t ? `all ${t}s` : `all ${TB_STATUS_TRANSITION_TIME}`

const config = {
  backdropHeight: 580,
  navWidth: 1408,
  contentWidth: 1376,
  navHeight: 88,
  transition: TB_STATUS_TRANSITION,
  transitionTime: TB_STATUS_TRANSITION_TIME,
}

const colorPalette = {
  primary: {
    main: '#7635dc',
    default: '#FFFFFF',
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
    default: '#FFFFFF',
    dark: '#131313',
    secondary: 'rgba(145, 158, 171, 0.08)'
  },
  text: {
    default: '#FFFFFF',
    textSecondary: '#737373',
    disabled: '#86909c',
    dark: '#131313',
    secondary: '#86909c',
  },
  button: {
    default: '#FFFFFF',
    background: 'linear-gradient(76.35deg, rgb(128, 26, 230) 15.89%, rgb(162, 26, 230) 89.75%)',
  }
}

const theme = createTheme({
  breakpoints,
  colorPalette,
  config,
  styles: {
    verticalCenter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inlineCenter: {
      display: 'flex',
      justifyContent: 'center'
    },
    spaceBetweenCenter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    columnCenter: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  palette: {
    primary: {
      main: '#7635dc',
    },
    background: {
      default: 'rgb(252, 252, 252)',
    },
    text: {
      primary: '#181622',
      secondary: '#86909c',
    },
  },
  typography: {
    fontFamily: [
      "Open Sans",
      'SourceHanSansSC',
      'Noto Sans CJK SC',
      'Hiragino Sans GB',
      'Roboto',
      'Helvetica',
      'Arial',
      'STXihei',
      '华文细黑',
      'Microsoft YaHei',
      'Microsoft YaHei UI',
      '微软雅黑',
      'Heiti',
      '黑体',
      '冬青黑体简体中文',
    ].join(','),
    h1: {
      fontSize: 'clamp(64px, 6vw, 96px)',
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h2: {
      fontSize: 'clamp(24px, 6vw, 36px)',
      fontWeight: 700,
      lineHeight: 1.5
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: 700,
      lineHeight: 1.5
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.5
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1.5
    },
    subtitle1: {
      fontSize: '1rem',
      lineHeight: 1.5
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: 1.5
    },
    button: {
      fontSize: '0.875rem',
      lineHeight: 1.5
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.5
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: '#181622'
      }
    }
  }
})

export default theme
