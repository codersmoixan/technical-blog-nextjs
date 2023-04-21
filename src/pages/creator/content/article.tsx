import Layout from 'containers/Creator/components/Layout'
import type { ReactNode } from 'react'
import { makeStyles } from '@mui/styles'
import Tabs from 'components/Tabs'
import TabPane from 'components/Tabs/TabPane'
import { Theme } from 'core/makeStyles'
import Article from "containers/Creator/content/Article";
import Draft from "containers/Creator/content/Draft";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
    minHeight: 568,
    boxSizing: 'border-box',
		borderRadius: 6,
		backgroundColor: theme.colorPalette.background.default
	},
	flexContainer: {
		justifyContent: 'flex-start'
	},
	tabs: {
    marginBottom: 0,
    overflow: 'initial',
		borderBottom: `1px solid ${theme.colorPalette.primary.colorSecondary}`,
    '& .MuiTabs-scroller': {
      overflow: 'initial !important',
    }
	},
	tab: {
		margin: theme.spacing(0, 2),
		minWidth: 'auto'
	},
  indicator: {
    bottom: -1.5
  }
}))

function ArticlePage() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Tabs classes={{
        flexContainer: classes.flexContainer,
        tab: classes.tab,
        tabs: classes.tabs,
        indicator: classes.indicator
      }}>
				<TabPane label="文章" name="article">
					<Article />
				</TabPane>
				<TabPane label="草稿箱(4)" name="draft">
					<Draft />
				</TabPane>
			</Tabs>
		</div>
	)
}

ArticlePage.getLayout = (page: ReactNode) => <Layout>{page}</Layout>

export default ArticlePage
