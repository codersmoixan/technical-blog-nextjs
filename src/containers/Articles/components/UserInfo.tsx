import { makeStyles } from "@mui/styles";
import Box, {BoxProps} from "@mui/material/Box";
import useSeparateChildren from "hooks/useSeparateChildren";
import clsx from "clsx";
import type { Theme } from "@mui/material";

interface ArticleInfoProps extends BoxProps {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex'
  },
  avatar: {
    marginRight: theme.spacing(1),
    width: 50,
    height: 50,
    borderRadius: '50%',
    background: theme.palette.primary.main
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
}))

function UserInfo(props: ArticleInfoProps) {
  const classes = useStyles(props)
  const { className, children, ...other } = props
  const { main, description } = useSeparateChildren(children, ['main', 'description'])

  return (
    <Box className={clsx(className, classes.root)} {...other}>
      <Box className={classes.avatar}></Box>
      <Box className={classes.info}>
        {main}
        {description}
      </Box>
    </Box>
  )
}

export default UserInfo
