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
import { Article, Help, Home, Assessment } from '@mui/icons-material'
import { useRouter } from 'next/router'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { useMemo } from 'react'
import type { EmptyObject } from '@/src/tb.types'
import isEmpty from 'lodash/isEmpty'

export interface FindMenuReturns {
	parent: number | string
	current: number | string
}

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
		zIndex: 999,
		backgroundColor: theme.colorPalette.background.default,
		boxShadow: '0 0 16px rgba(0, 0, 0, 0.08)',
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
	menu: {
		marginTop: theme.spacing(2)
	},
	accordionDetails: {
		padding: theme.spacing(0, 5.5, 2)
	},
	label: {
		color: theme.colorPalette.text.default
	},
	childItem: {
		height: 48,
		lineHeight: '48px',
		color: theme.colorPalette.text.textSecondary
	},
	menuChecked: {
		'& .MuiAccordionSummary-content': {
			backgroundColor: theme.colorPalette.setting.active
		}
	}
}))

export const NAVIGATION_LIST = [
	{
		id: 'home',
		label: '首页',
		icon: Home,
		route: routes.creatorHome
	},
	{
		id: 'article',
		label: '内容管理',
		icon: Article,
		menus: [
			{
				id: 1,
				label: '文章管理',
				route: routes.creatorArticle
			},
			{
				id: 2,
				label: '专栏管理'
			}
		]
	},
	{
		id: 'data',
		label: '数据中心',
		icon: Assessment,
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
		icon: Help,
		menus: [
			{
				id: 1,
				label: '常见问题'
			}
		]
	}
]

const findMenu = (pathname: string, menus: any[], parentMenu: EmptyObject = {}): FindMenuReturns => {
	let find = {}

	menus.forEach(menu => {
		if (pathname === menu.route) {
			find = { parent: parentMenu.id, current: menu.id }
		}

		if (isEmpty(find) && menu.menus) {
			find = findMenu(pathname, menu.menus, menu)
		}
	})

	return find as FindMenuReturns
}

function Layout(props: LayoutProps) {
	const classes = useStyles(props)
	const { children } = props
	const history = useRouter()

	const value = useMemo(() => {
		const pathname = history.pathname
		const { parent, current } = findMenu(pathname, NAVIGATION_LIST)

		return parent ? [parent, current] : [current]
	}, [history])

	console.log(value, 125)

	const handleToHome = () => {
		history.push(routes.home)
	}

	const handleNodeClick = (option: (typeof NAVIGATION_LIST)[number]) => {
		if (option.route) {
			history.push(option.route)
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
							root: classes.menu,
							accordionDetails: classes.accordionDetails,
							label: classes.label,
							childItem: classes.childItem,
							checked: classes.menuChecked
						}}
						childKey="menus"
						onNodeClick={handleNodeClick}
						animate={false}
						isBorder={false}
						value={value}
						expandIcon={<ExpandLess />}
						closeIcon={<ExpandMore />}
					/>
				</div>
				<div>{children}</div>
			</Content>
		</div>
	)
}

export default Layout
