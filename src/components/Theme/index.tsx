import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import defaultTheme from "@/src/theme/defaultTheme";
import useSwitchTheme from "containers/App/hooks/useSwitchTheme";
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

  const [theme, setTheme] = useState(themePresets[presets])

  useEffect(() => {
    const themeOptions = themePresets[presets]
    if (mode === 'dark') {
      setTheme({
        ...themeOptions,
        ...darkTheme,
        colorPalette: {
          ...themeOptions.colorPalette,
          ...darkTheme.colorPalette
        },
      })
    } else {
      setTheme(themeOptions)
    }
  }, [mode, presets])

  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}

export default Theme
