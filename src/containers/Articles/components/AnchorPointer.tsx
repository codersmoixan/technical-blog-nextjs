import Typography from "@mui/material/Typography";
import Box, { BoxProps } from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material";
import type { ReactNode } from "react";

interface AnchorPointerProps extends BoxProps {
  message?: ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    paddingLeft: theme.spacing(2),
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: 0,
      top: 0,
      width: 4,
      height: '100%',
      backgroundColor: theme.palette.primary.main
    },
    '& .MuiTypography-body1': {
      lineHeight: 1
    }
  }
}))

function AnchorPointer({ message, children, ...other }: AnchorPointerProps) {
  const classes = useStyles(other)

  return (
    <Box className={classes.root} {...other}>
      <Typography component="div" variant="body1" fontWeight="700">
        {message || children}
      </Typography>
    </Box>
  )
}

export default AnchorPointer
