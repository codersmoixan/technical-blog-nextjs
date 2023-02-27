import Box, {BoxProps} from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import type { Theme } from "@mui/material";
import Typography from "@mui/material/Typography";
import UserInfo from "containers/Articles/components/UserInfo";

interface ArticleContentProps extends BoxProps {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3),
    backgroundColor: theme.colorPalette.background.main
  },
  header: {

  },
  content: {
    padding: theme.spacing(2, 0)
  },
  articleInfo: {
    marginTop: theme.spacing(1)
  }
}))

function ArticleContent(props: ArticleContentProps) {
  const { className } = props
  const classes = useStyles(props)

  return (
    <Box className={clsx(className, classes.root)}>
      <Box className={classes.header}>
        <Typography variant="h2">
          Gas、ChatGPT对国内校园市场的启发
        </Typography>
        <UserInfo classes={{ root: classes.articleInfo }}>
          <Typography variant="body1" fontWeight={700} slot="main">
            孙凌Reborn
          </Typography>
          <Typography variant="caption" color="textSecondary" slot="description">
            2023.02.03 16:58:46 字数2,770 阅读2,306
          </Typography>
        </UserInfo>
      </Box>
      <Box component="aside" className={classes.content}>
        66666
      </Box>
    </Box>
  )
}

export default ArticleContent
