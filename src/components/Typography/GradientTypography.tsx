import Typography, {TypographyProps} from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material";
import clsx from "clsx";

export interface GradientTypographyProps extends TypographyProps {
  animate?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontFamily: 'Barlow Black',
    letterSpacing: 6,
    background: '-webkit-linear-gradient(300deg, rgb(118, 53, 220) 0%, rgb(255, 171, 0) 25%, rgb(118, 53, 220) 50%, rgb(255, 171, 0) 75%, rgb(118, 53, 220) 100%) 0% 0% / 400%',
    ['-webkit-background-clip']: 'text',
    color: theme.colorPalette.primary.transparent,
  },
  animate: {
    animation: `$gradientAnimate 20s linear infinite`
  },
  '@keyframes gradientAnimate': {
    '0%': {
      backgroundPosition: '0% center',
    },
    '50%': {
      backgroundPosition: '100% center',
    },
    '100%': {
      backgroundPosition: '0% center',
    }
  },
}))

function GradientTypography({ children, className, animate = true, ...other }: GradientTypographyProps) {
  const classes = useStyles()

  return (
    <Typography
      variant="h1"
      fontWeight={700}
      color="inherit"
      className={clsx(className, classes.root, {
        [classes.animate]: animate
      })}
      {...other}
    >
      {children}
    </Typography>
  )
}

export default GradientTypography
