import { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

interface ThemeProps {
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

function Theme({ children }: ThemeProps) {
  const { presets, mode } = useSwitchTheme()

  const theme = useMemo(() => {
    const themeOptions = createTheme(themePresets[presets])

    return mode === 'dark' ? merge(themeOptions, darkTheme) : themeOptions

    // return mode === 'dark' ? {
    //   ...themeOptions,
    //   ...darkTheme,
    //   colorPalette: {
    //     ...themeOptions.colorPalette,
    //     ...darkTheme.colorPalette
    //   },
    // } : themeOptions
  }, [mode, presets])

  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}

export default Theme
