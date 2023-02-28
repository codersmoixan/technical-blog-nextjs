import Box from "@mui/material/Box";
import makeStyles, { Theme } from "utils/styles/makeStyles";
import ArticleContent from "containers/Articles/ArticleContent";
import ArticleAside from "containers/Articles/ArticleAside";
import Content from "components/Layout/Content";
import {useRouter} from "next/router";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: theme.colorPalette.background.secondary
  },
  content: {
    display: 'flex',
    marginTop: theme.spacing(11),
    justifyContent: 'space-between'
  },
  articleContent: {
    marginRight: theme.spacing(2),
    flex: 1
  },
  aside: {
    width: 275
  }
}), 'Articles')

function Articles() {
  const classes = useStyles()
  const history = useRouter()

  console.log(history, 66566)

  return (
    <Box className={classes.root}>
      <Content className={classes.content}>
        <ArticleContent className={classes.articleContent} />
        <ArticleAside className={classes.aside} />
      </Content>
    </Box>
  )
}

export default Articles
