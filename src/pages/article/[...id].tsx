import Box from '@mui/material/Box'
import makeStyles, { Theme } from 'core/makeStyles'
import ArticleContent, { Article } from 'containers/Articles/components/ArticleContent'
import ArticleAside from 'containers/Articles/components/ArticleAside'
import Content from 'components/Layout/Content'
import { useRouter } from 'next/router'
import MediaQuery from 'core/MediaQuery'
import { getArticle } from 'containers/Articles/api'
import isUndefined from 'lodash/isUndefined'
import { useMediaQuery } from '@mui/material'
import type { GetServerSidePropsContext } from 'next'
import PageHead from "components/Layout/PageHead";

interface ArticlePageProps {
	article: Article
}

const useStyles = makeStyles(
	(theme: Theme) => ({
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
				margin: 0,
        width: '100%'
			}
		},
		aside: {
			width: 275
		}
	}),
	'Articles'
)

function ArticlesPage({ article }: ArticlePageProps) {
	const classes = useStyles()
	const history = useRouter()
	const dark = useMediaQuery('(prefers-color-scheme: dark)')

  console.log(article, 1355);

  return (
		<PageHead title={article.articleName} content={article.articleName}>
      <Box className={classes.root}>
        <Content className={classes.content}>
          <ArticleContent className={classes.articleContent} article={article} />
          <MediaQuery media="pc">
            <ArticleAside className={classes.aside} />
          </MediaQuery>
        </Content>
        {/*<DynamicParticleClock width={500} height={500} />*/}
      </Box>
    </PageHead>
	)
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const id = context.params?.id as string

  if (isUndefined(id)) {
		return {
			props: {
				article: {}
			}
		}
	}

  const { data: article } = await getArticle(id)

  return {
		props: {
			article
		}
	}
}

export default ArticlesPage
