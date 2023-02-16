import { ThemeProvider } from "@mui/material/styles";
import defaultTheme from "@/src/theme/defaultTheme";
import useSwitchTheme from "containers/App/hooks/useSwitchTheme";
import cyanTheme from "@/src/theme/cyanTheme";
import purpleTheme from "@/src/theme/purpleTheme";
import orangeTheme from "@/src/theme/orangeTheme";
import blueTheme from "@/src/theme/blueTheme";
import redTheme from "@/src/theme/redTheme";
import type { ReactNode } from "react";

interface ThemeProps {
  children: ReactNode
}

const theme = {
  one: defaultTheme,
  two: cyanTheme,
  three: purpleTheme,
  four: blueTheme,
  five: orangeTheme,
  six: redTheme
}

function Theme({ children }: ThemeProps) {
  const { presets } = useSwitchTheme()

  return (
    <ThemeProvider theme={theme[presets]}>{children}</ThemeProvider>
  )
}

export default Theme
