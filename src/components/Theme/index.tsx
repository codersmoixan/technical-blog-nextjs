import { ThemeProvider } from "@mui/material/styles";
import defaultTheme from "@/src/theme/defaultTheme";
import useSwitchTheme from "containers/App/hooks/useSwitchTheme";
import type { ReactNode } from "react";

interface ThemeProps {
  children: ReactNode
}

const theme = {
  one: defaultTheme,

}

function Theme({ children }: ThemeProps) {
  const { setting } = useSwitchTheme()

  console.log(setting, 98999);

  return (
    <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
  )
}

export default Theme
