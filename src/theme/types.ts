import type { ConfigOptions } from "@/src/theme/theme";
import type { CSSProperties } from "@mui/styles";
import type { EmptyObject } from "@/src/tb.types"

export interface CustomThemeOptions {
  config: ConfigOptions;
  styles: {
    verticalCenter: CSSProperties;
    inlineCenter: CSSProperties;
    spaceBetweenCenter: CSSProperties;
    columnCenter: CSSProperties;
  },
  componentStyleOverrides: ComponentStyleOverrides;
}

export interface ColorPaletteOptions {
  primary: {
    main: string;
    default: string;
    secondary: string;
    colorSecondary: string;
    transparent: string;
    dark: string;
    sullenGrey: string;
    lightGrey: string;
    lightPurple: string;
    error: string;
    placeholder: string;
    disabled: string;
    darkPeach: string;
  };
  background: {
    main: string;
    default: string;
    primary: string;
    secondary: string;
  };
  text: {
    main: string;
    default: string;
    textSecondary: string;
    disabled: string;
    dark: string;
    secondary: string;
  };
  button: {
    main: string;
    default: string;
    background: string;
    hover: string;
  };
  setting: {
    one: string;
    two: string;
    three: string;
    four: string;
    five: string;
    six: string;
    colorSecondary: string;
    bgSecondary: string;
    bgActive: string;
  },
  gradient: {
    propagate: string;
    button: string;
  }
}

export interface DefaultThemeOptions extends CustomThemeOptions {
  colorPalette: ColorPaletteOptions;
}

declare module '@mui/material/styles' {
  interface Theme extends DefaultThemeOptions {}
  // allow configuration using `createTheme`
  interface ThemeOptions extends DefaultThemeOptions {}
}

export interface ComponentStyleOverrides {
  App?: EmptyObject;
  Navigation?: EmptyObject;
  HomeTechnologySharing?: EmptyObject;
  HomeCategory?: EmptyObject;
  HomeCategoryList?: EmptyObject;
  HomeDesigner?: EmptyObject;
  SideSwiper?: EmptyObject;
  SharingCard?: EmptyObject;
  AccordionMenu?: EmptyObject;
  Articles?: EmptyObject;
}
export type ComponentStyleOverridesKey = keyof ComponentStyleOverrides
