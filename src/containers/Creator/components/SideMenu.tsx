import Buttons from 'components/Buttons'
import routes from '@/src/routes'
import Menu from 'components/Menu'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import React, { useMemo } from 'react'
import { makeStyles } from '@mui/styles'
import { NAVIGATION_LIST } from '../constants'
import { useRouter } from 'next/router'
import { findMenu } from 'containers/Creator/utils'
import type { Theme } from '@mui/material'

interface SideMenuProps {
  classes?: Partial<ReturnType<typeof useStyles>>
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
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
		}
	},
	textActive: {
		'& .label': {
			color: theme.colorPalette.text.main
		},
		'& .MuiAccordionSummary-content': {
      '& .MuiButtonBase-root > .MuiTypography-root': {
        color: theme.colorPalette.text.main
      }
		}
	},
	subActive: {
		backgroundColor: theme.colorPalette.setting.active,
		'& .MuiTypography-root': {
			color: theme.colorPalette.text.main
		}
	}
}))

function SideMenu(props: SideMenuProps) {
	const classes = useStyles(props)
	const history = useRouter()

	const value = useMemo(() => {
		const pathname = history.pathname
		const { parent, current } = findMenu(pathname, NAVIGATION_LIST)

		return parent ? [parent, current] : [current]
	}, [history])

	const open = useMemo(() => NAVIGATION_LIST.map(item => item.id), [])

	const handleNodeClick = (option: (typeof NAVIGATION_LIST)[number]) => {
		if (option.route) {
			history.push(option.route)
		}
	}

	return (
		<div className={classes.root}>
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
					subActive: classes.subActive
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
	)
}

export default SideMenu
