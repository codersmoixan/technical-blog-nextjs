import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import SwitchSettingIcon from "components/Icons/SwitchSettingIcon";
import type { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.main
  }
}))

function ThemeSettingIcon() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <SwitchSettingIcon />
    </Box>
  )
}

export default ThemeSettingIcon
