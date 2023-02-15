import { makeStyles } from "@mui/styles";
import Box, { BoxProps } from "@mui/material/Box";
import clsx from "clsx";
import type { Theme } from "@mui/material";

interface MaskIconProps extends BoxProps {
  url: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "inline-block",
    backgroundColor: 'currentColor',
    '-webkit-mask': (props: MaskIconProps) => `url(${props.url || '/icons/common/ic_setting.svg'}) center center / contain no-repeat`
  }
}))

function MaskIcon(props: MaskIconProps) {
  const { className, width = 28, height = 28, ...other } = props
  const classes = useStyles(props)

  return (
    <Box
      component="span"
      className={clsx(className, classes.root)}
      width={width}
      height={height}
      {...other}
    />
  )
}

export default MaskIcon
