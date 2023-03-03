import Box from "@mui/material/Box";
import makeStyles, { Theme } from "utils/styles/makeStyles";
import ArticleContent from "containers/Articles/ArticleContent";
import ArticleAside from "containers/Articles/ArticleAside";
import Content from "components/Layout/Content";
import {useRouter} from "next/router";
import MediaQuery from "components/MediaQuery";
import DynamicParticleClock from "components/ParticleClock/DynamicParticleClock";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: theme.colorPalette.background.secondary
  },
  content: {
    display: 'flex',
    marginTop: theme.spacing(11),
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(8),
      padding: 0
    }
  },
  articleContent: {
    marginRight: theme.spacing(2),
    flex: 1,
    [theme.breakpoints.down('md')]: {
      margin: 0
    }
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
        <MediaQuery media="pc">
          <ArticleAside className={classes.aside} />
        </MediaQuery>
      </Content>
      {/*<DynamicParticleClock width={500} height={500} />*/}
    </Box>
  )
}

export default Articles
