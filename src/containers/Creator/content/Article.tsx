import {makeStyles} from "@mui/styles";
import type {Theme} from "@mui/material";
import Tags from "containers/Creator/components/Tags";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))

function Article() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Tags />
    </div>
  )
}

export default Article
