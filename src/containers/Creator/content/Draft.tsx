import {makeStyles} from "@mui/styles";
import type {Theme} from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  root: {}
}))

function Draft() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      草稿箱
    </div>
  )
}

export default Draft
