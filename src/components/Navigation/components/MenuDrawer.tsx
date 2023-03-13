/**
 * @author zhengji.su
 * @description MenuDrawer
 */

import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
import Menu, { MenuItem } from 'components/Menu'
import { useRouter } from 'next/router'
import isString from 'lodash/isString'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Variant, VariantContent } from 'components/Animation/Variant'
import { stiffnessVariants } from 'utils/variants'
import GlobalDrawer from 'components/GlobalDrawer'
import type { Theme } from '@mui/material'
import React from 'react'
import GradientLogo from 'components/Logo/GradientLogo'

interface MenuDrawerProps {
	menus: any[]
	open: boolean
	onClose?: () => void
}

const useStyles = makeStyles((theme: Theme) => ({
	drawer: {
		width: 260
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 3),
		height: 72
	},
	menu: {
		height: 'auto'
	},
	summaryContent: {
		padding: theme.spacing(1, 3),
    display: 'flex',
    alignItems: 'center',
		height: 'auto',
		'& > p': {
			fontSize: 14,
			color: theme.colorPalette.text.textSecondary
		},
		'& .transform-icon > div': {
			color: theme.colorPalette.text.textSecondary
		}
	},
	summaryValue: {
		padding: theme.spacing(0, 4),
		'& > a': {
			fontSize: 14,
			color: theme.colorPalette.text.textSecondary
		}
	},
  accordion: {
    '&::before': {
      display: 'none'
    },
  }
}))

function MenuDrawer(props: MenuDrawerProps) {
	const { open, menus, onClose } = props
	const classes = useStyles(props)
	const history = useRouter()

	const handleNodeClick = (options: MenuItem) => {
		const url = options.route
		onClose?.()
		return isString(url) ? history.push(url) : history.push(url())
	}

	return (
		<GlobalDrawer
			open={open}
			onClose={onClose}
			classes={{
				drawer: classes.drawer
			}}
		>
			<div slot="header" className={classes.header}>
				<GradientLogo width={25} height={25} />
			</div>
			<div slot="content">
				<Variant focus={open}>
					<Menu
						menus={menus}
						childKey="menus"
						onNodeClick={handleNodeClick}
						expandIcon={<ExpandLess />}
						closeIcon={<ExpandMore />}
						classes={{
              root: classes.menu,
							summaryContent: classes.summaryContent,
              value: classes.summaryValue,
              accordion: classes.accordion
						}}
					/>
				</Variant>
			</div>
		</GlobalDrawer>
	)
}

export default MenuDrawer
