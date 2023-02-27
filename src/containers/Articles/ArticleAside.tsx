import Box, { BoxProps } from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import type { Theme } from "@mui/material";
import UserInfo from "containers/Articles/components/UserInfo";
import Typography from "@mui/material/Typography";

interface ArticleAsideProps extends BoxProps {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.colorPalette.background.main
  },
  user: {
    padding: theme.spacing(2)
  },

}))

function ArticleAside(props: ArticleAsideProps) {
  const { className } = props
  const classes = useStyles(props)

  return (
    <Box className={clsx(className, classes.root)}>
      <Box className={classes.user}>
        <UserInfo>
          <Typography variant="body1" fontWeight={700} slot="main">
            孙凌Reborn
          </Typography>
          <Typography variant="caption" color="textSecondary" slot="description">
            总资产10
          </Typography>
        </UserInfo>
      </Box>
    </Box>
  )
}

export default ArticleAside
