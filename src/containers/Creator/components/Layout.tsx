import Box from '@mui/material/Box'
import type { ReactNode } from 'react'
import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'
import Buttons from 'components/Buttons'
import Typography from '@mui/material/Typography'
import Content from 'components/Layout/Content'
import GradientLogo from 'components/Logo/GradientLogo'
import Menu from 'components/Menu'
import routes from '@/src/routes'
import { Article, AttachFile, Book, BookmarkBorder, Home, Queue } from '@mui/icons-material'
import { useRouter } from 'next/router'

export interface LayoutProps {
	children: ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(2)
	},
	header: {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: theme.config.navHeight,
		'& .header-box': {
			margin: '0 auto',
			width: 1300,
			height: '100%'
		}
	},
	headerTitle: {
		marginLeft: theme.spacing(2),
		color: theme.palette.primary.main,
		fontWeight: 700
	},
	content: {
		display: 'flex',
		marginTop: theme.config.navHeight
	},
	sidebar: {
		padding: theme.spacing(2, 1.5),
		marginRight: theme.spacing(2),
		width: 200,
		minHeight: 568,
		backgroundColor: theme.colorPalette.background.main,
		boxSizing: 'border-box',
		'& .edit-article': {
			borderRadius: 4,
			boxShadow: 'none'
		}
	},
	label: {
		color: theme.colorPalette.text.default
	}
}))

export const NAVIGATION_LIST = [
	{
		id: 'home',
		label: '首页',
		route: routes.creatorHome
	},
	{
		id: 'article',
		label: '内容管理',
		menus: [
			{
				id: 1,
				label: '文章管理',
				route: routes.creatorArticle
			}
		]
	},
	{
		id: 'data',
		label: '数据中心',
		menus: [
			{
				id: 1,
				label: '内容数据'
			}
		]
	},
	{
		id: 'help',
		label: '帮助中心',
		menus: [
			{
				id: 1,
				label: '常见问题'
			}
		]
	}
]

function Layout(props: LayoutProps) {
	const classes = useStyles(props)
	const { children } = props
	const history = useRouter()

	const handleToHome = () => {
		history.push(routes.home)
	}

  const handleNodeClick = (menu: any) => {
    if (menu.route) {
      history.push(menu.route)
    }
  }

	return (
		<div className={classes.root}>
			<header className={classes.header}>
				<Box className="header-box">
					<Box display="flex" alignItems="center" height="100%">
						<GradientLogo onClick={handleToHome} />
						<Typography className={classes.headerTitle} variant="h5">
							创作者中心
						</Typography>
					</Box>
				</Box>
			</header>
			<Content className={classes.content}>
				<div className={classes.sidebar}>
					<Buttons variant="contained" fullWidth color="primary" className="edit-article" href={routes.editor}>
						写文章
					</Buttons>
					<Menu
						menus={NAVIGATION_LIST}
						classes={{
							label: classes.label
						}}
						childKey="menus"
            onNodeClick={handleNodeClick}
            animate={false}
					/>
				</div>
				<div>{children}</div>
			</Content>
		</div>
	)
}

export default Layout
