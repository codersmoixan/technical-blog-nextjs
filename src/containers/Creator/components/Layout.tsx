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
import React, { useMemo } from 'react'
import type { EmptyObject } from '@/src/tb.types'
import isEmpty from 'lodash/isEmpty'
import BasicSpeedDial, {SpeedDialOption} from "components/SuspendButtons/BasicSpeedDial";
import ThemeSettingIcon from "containers/App/components/ThemeSettingIcon";
import VerticalAlignTop from "@mui/icons-material/VerticalAlignTop";
import useSpeedDial from "components/SuspendButtons/hooks/useSpeedDial";

export interface FindMenuReturns {
	parent: number | string
	current: number | string
}

export interface LayoutProps {
	children: ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
    minHeight: '100vh',
	},
	header: {
		position: 'fixed',
		top: 0,
		left: 0,
    padding: theme.spacing(0, 2),
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
		paddingTop: theme.config.navHeight
	},
	sidebar: {
    position: 'fixed',
    top: 104,
		padding: theme.spacing(2, 1.5),
		width: 200,
		minHeight: 568,
		backgroundColor: theme.colorPalette.background.default,
		boxSizing: 'border-box',
    borderRadius: 6,
		'& .edit-article': {
			borderRadius: 4,
			boxShadow: 'none'
		}
	},
  main: {
    marginLeft: theme.spacing(27.25),
    padding: theme.spacing(2, 0),
    minHeight: 568,
  },
	menu: {
		marginTop: theme.spacing(2)
	},
	label: {
		color: theme.colorPalette.text.default,
    '& .MuiTypography-root': {
      fontWeight: '700 !important'
    }
	},
  subItem: {
		height: 48,
		lineHeight: '48px',
    '& .MuiTypography-root': {
      marginLeft: theme.spacing(5.5),
      color: theme.colorPalette.text.textSecondary
    }
	},
  menuActive: {
		'& .MuiAccordionSummary-content': {
			backgroundColor: theme.colorPalette.setting.active,
      color: theme.colorPalette.text.main
		},
	},
  textActive: {
    '& .label': {
      color: theme.colorPalette.text.main
    },
    '& .MuiAccordionSummary-content': {
      color: theme.colorPalette.text.main
    }
  },
  subActive: {
    backgroundColor: theme.colorPalette.setting.active,
    '& .MuiTypography-root': {
      color: theme.colorPalette.text.main
    }
  },
  speedial: {

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
				id: 'article',
				label: '文章管理',
				route: routes.creatorArticle
			},
			{
				id: 'column',
				label: '专栏管理',
        route: routes.creatorColumn
			}
		]
	},
	{
		id: 'data',
		label: '数据中心',
		icon: Assessment,
		menus: [
			{
				id: 'content',
				label: '内容数据',
        route: routes.creatorContentData
			}
		]
	},
	{
		id: 'help',
		label: '帮助中心',
		icon: Help,
		menus: [
			{
				id: 'question',
				label: '常见问题',
        route: routes.creatorHelp
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

const actions: SpeedDialOption[] = [
  { id: 'setting', icon: <ThemeSettingIcon />, name: '主题设置' },
  { id: 'top', icon: <VerticalAlignTop /> }
];

function Layout(props: LayoutProps) {
	const classes = useStyles(props)
	const { children } = props
	const history = useRouter()
  const { updateSpeedDial } = useSpeedDial()

	const value = useMemo(() => {
		const pathname = history.pathname
		const { parent, current } = findMenu(pathname, NAVIGATION_LIST)

		return parent ? [parent, current] : [current]
	}, [history])

  const open = useMemo(() => NAVIGATION_LIST.map(item => item.id), [])

	const handleToHome = () => {
		history.push(routes.home)
	}

	const handleNodeClick = (option: (typeof NAVIGATION_LIST)[number]) => {
		if (option.route) {
			history.push(option.route)
		}
	}

  const handleSpeedDial = ({ id }: SpeedDialOption) => {
    if (id === 'top') {
      document.body.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })

      return
    }

    updateSpeedDial(id)
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
							label: classes.label,
							subItem: classes.subItem,
							active: value.length <= 1 ? classes.menuActive : classes.textActive,
              subActive: classes.subActive,
						}}
            subKey="menus"
						onNodeClick={handleNodeClick}
						animate={false}
						isBorder={false}
            open={open}
						value={value}
						expandIcon={<ExpandLess />}
						closeIcon={<ExpandMore />}
					/>
				</div>
				<div className={classes.main}>{children}</div>
			</Content>
      <BasicSpeedDial options={actions} onChange={handleSpeedDial} />
		</div>
	)
}

export default Layout
