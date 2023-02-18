import { makeStyles as muiMakeStyles } from "@mui/styles";
import mergeStyles from "utils/styles/mergeStyles";
import type { Theme as MuiTheme } from "@mui/material";
import type { Styles } from "@mui/styles/withStyles";
import type { StyleRules } from "@mui/styles/withStyles/withStyles";
import type { WithStylesOptions } from "@mui/styles/withStyles";
import type { ComponentStyleOverridesKey } from "@/src/theme/types";

export type Theme = MuiTheme

function makeStyles<
  Props extends object = {},
  ClassKey extends string = string,
>(
  styles: Styles<Theme, Props, ClassKey>,
  componentName?: ComponentStyleOverridesKey,
  options?: Omit<WithStylesOptions<Theme>, 'withTheme'>
) {

  return muiMakeStyles<Theme, Props, ClassKey>((theme: Theme) => {
    const componentStyles = typeof styles === 'function' ? styles(theme) : styles

    if (componentName) {
      const styleOverrides = theme.componentStyleOverrides[componentName as ComponentStyleOverridesKey] as StyleRules<Props, ClassKey>

      return mergeStyles(componentStyles, styleOverrides)
    }

    return componentStyles
  }, options)
}

export default makeStyles
