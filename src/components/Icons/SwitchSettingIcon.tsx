import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 24,
    height: 24,
    display: "inline-block",
    backgroundColor: 'currentColor',
    '-webkit-mask': 'url(/icons/common/ic_setting.svg) center center / contain no-repeat'
  }
}))

function SwitchSettingIcon() {
  const classes = useStyles()

  return <span className={classes.root}></span>
}

export default SwitchSettingIcon
