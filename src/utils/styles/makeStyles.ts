import { makeStyles as muiMakeStyles } from "@mui/styles";
import mergeStyles from "utils/styles/mergeStyles";
import type { Theme as MuiTheme } from "@mui/material";
import type { ComponentStyleOverridesKey } from "@/src/theme/types";
import type { Styles } from "@mui/styles/withStyles";
import type { StyleRules } from "@mui/styles/withStyles/withStyles";

export type Theme = MuiTheme

function makeStyles<
  Props extends object = {},
  ClassKey extends string = string,
>(styles: Styles<Theme, Props, ClassKey>, componentName: ComponentStyleOverridesKey) {

  return muiMakeStyles<Theme, Props, ClassKey>((theme: Theme) => {
    const componentStyles = typeof styles === 'function' ? styles(theme) : styles
    const styleOverrides = theme.componentStyleOverrides?.[componentName as ComponentStyleOverridesKey] as StyleRules<Props, ClassKey>

    return mergeStyles(componentStyles, styleOverrides)
  })
}

export default makeStyles
