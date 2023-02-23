import { createBreakpoints, Breakpoints } from "@mui/system";
import type { CSSProperties } from "@mui/styles";
import type { TypographyOptions } from "@mui/material/styles/createTypography";
import type { EmptyObject } from "@/src/tb.types"

export const breakpoints = createBreakpoints({
  values: {
    xs: 0,
    sm: 500,
    md: 800,
    lg: 1100,
    xl: 1350
  }
})

export interface ConfigOptions extends Required<typeof config> {}
export interface ThemeOptions {
  breakpoints: Breakpoints;
  typography: TypographyOptions;
  config: ConfigOptions;
  styles: {
    verticalCenter: CSSProperties;
    inlineCenter: CSSProperties;
    spaceBetweenCenter: CSSProperties;
    columnCenter: CSSProperties;
  };
  componentStyleOverrides: EmptyObject;
}

const TB_STATUS_TRANSITION_TIME = '.3s'
const TB_STATUS_TRANSITION = (t?: number) => t ? `all ${t}s` : `all ${TB_STATUS_TRANSITION_TIME}`

const config = {
  backdropHeight: 580,
  navWidth: 1200,
  contentWidth: 1200,
  navHeight: 88,
  transition: TB_STATUS_TRANSITION,
  transitionTime: TB_STATUS_TRANSITION_TIME,
}

const theme: ThemeOptions = {
  breakpoints,
  config,
  componentStyleOverrides: {},
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
  }
}

export default theme
