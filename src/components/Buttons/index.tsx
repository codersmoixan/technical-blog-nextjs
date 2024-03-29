/**
 * @author zhengji.su
 * @description Buttons
 */

import Button, { ButtonProps } from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import CircularProgress from "@mui/material/CircularProgress";
import type { Theme } from "@mui/material"
import type { ReactNode } from "react";

interface ButtonsProps extends ButtonProps{
  children: ReactNode;
  className?: string;
  space?: boolean;
  loading?: boolean;
  inline?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 42,
    borderColor: theme.palette.primary.main,
    textTransform: 'none',
    borderRadius: 8,
    fontSize: 14,
  },
  inline: {
    padding: 0,
    minWidth: 'auto',
    minHeight: 'auto',
    height: 'auto',
  },
  contained: {
    backgroundColor: theme.colorPalette.button.main,
    fontWeight: 400,
    '&.MuiButton-root:hover': {
      // backgroundColor: theme.colorPalette.button.hover,
    },
    '&.Mui-disabled': {
      backgroundColor: theme.colorPalette.button.disabled,
      color: theme.colorPalette.button.default
    }
  },
  text: {
    '&.MuiButton-root:hover': {
      backgroundColor: 'transparent',
      color: theme.colorPalette.button.hover,
    },
  },
  textPrimary: {
    color: theme.palette.text.primary,
  },
  emptySpace: {
    '&.MuiButtonBase-root': {
      padding: '0 !important',
      margin: '0 !important',
      width: 'auto',
      minWidth: 'auto',
      height: 'auto',
      minHeight: 'auto'
    }
  },
  loading: {
    marginRight: theme.spacing(2)
  }
}))

function Buttons(props: ButtonsProps) {
  const { children, className, space = true, variant, loading, inline, ...other } = props
  const classes = useStyles(props)

  return (
    <Button
      className={clsx(className, {
        [classes.emptySpace]: !space,
        [classes.inline]: inline,
      })}
      classes={{
        root: classes.root,
        text: classes.text,
        textPrimary: classes.textPrimary,
        contained: classes.contained,
      }}
      color="primary"
      variant={variant}
      disabled={loading}
      {...other}
    >
      {loading && <CircularProgress color="inherit" size={16} className={classes.loading} />}
      {children}
    </Button>
  )
}

export default Buttons
