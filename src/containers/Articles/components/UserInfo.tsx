import { makeStyles } from "@mui/styles";
import Box, {BoxProps} from "@mui/material/Box";
import type { Theme } from "@mui/material";
import Typography from "@mui/material/Typography";
import useSeparateChildren from "hooks/common/useSeparateChildren";

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
  const { main, description } = useSeparateChildren(props.children, ['main', 'description'])

  return (
    <Box className={classes.root} {...props}>
      <Box className={classes.avatar}></Box>
      <Box className={classes.info}>
        {main}
        {description}
      </Box>
    </Box>
  )
}

export default UserInfo
