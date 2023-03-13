import { useMemo } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import useSwitchTheme from "containers/App/hooks/useSwitchTheme";
import defaultTheme from "@/src/theme/defaultTheme";
import merge from "lodash/merge";
import cyanTheme from "@/src/theme/cyanTheme";
import purpleTheme from "@/src/theme/purpleTheme";
import orangeTheme from "@/src/theme/orangeTheme";
import blueTheme from "@/src/theme/blueTheme";
import redTheme from "@/src/theme/redTheme";
import darkTheme from "@/src/theme/darkTheme"
import type { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode
}

const themePresets = {
  one: defaultTheme,
  two: cyanTheme,
  three: purpleTheme,
  four: blueTheme,
  five: orangeTheme,
  six: redTheme
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const { presets, mode } = useSwitchTheme()

  const theme = useMemo(() => {
    const themeOptions = createTheme(themePresets[presets])

    return mode === 'dark' ? merge(themeOptions, darkTheme) : themeOptions
  }, [mode, presets])

  return (
    <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
  )
}

export default ThemeProvider
