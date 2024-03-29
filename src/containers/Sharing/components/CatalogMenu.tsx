/**
 * @author zhengji.su
 * @description Catalog
 */

import React, { forwardRef, ReactEventHandler } from 'react'
import Box from '@mui/material/Box'
import MediaQuery from 'core/MediaQuery'
import Typography from '@mui/material/Typography'
import Menu from 'components/Menu'
import Search from '@mui/icons-material/Search'
import { makeStyles } from '@mui/styles'
import TransformIcon from 'components/TransformIcon'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import clsx from 'clsx'
import { Variant } from 'components/Animation/Variant'
import type { Theme } from '@mui/material'
import type { Variants } from 'framer-motion'
import useSwitchCatalog from 'containers/Sharing/hooks/useSwitchCatalog'

interface CatalogMenuProps {
	menus: any[]
	onSearchFocus?: ReactEventHandler
  classes?: Partial<ReturnType<typeof useStyles>>
}

const useStyles = makeStyles((theme: Theme) => ({
	...theme.styles,
	root: {
		position: 'relative',
		[theme.breakpoints.down('md')]: {
			margin: theme.spacing(0, -3),
			width: 'auto',
			minHeight: 72
		}
	},
	catalog: {
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(3),
			marginTop: theme.spacing(-3)
		},
		[theme.breakpoints.down('md')]: {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			minHeight: 72,
			zIndex: 89
		}
	},
	content: {
		position: 'relative',
		display: 'flex',
		height: 72,
		backgroundColor: theme.colorPalette.background.main,
		zIndex: 1,
	},
	menu: {
		width: 205,
		[theme.breakpoints.down('md')]: {
			padding: theme.spacing(0, 2),
			width: 'auto',
			backgroundColor: theme.colorPalette.background.main
		}
	},
  label: {
    color: theme.colorPalette.text.default
  },
	menuLabel: {
		padding: theme.spacing(0, 3),
		flex: 1,
    color: theme.colorPalette.text.default
	},
	searchBtn: {
		width: 72,
		height: '100%',
		color: theme.palette.primary.main,
		backgroundColor: theme.colorPalette.primary.darkPeach
	}
}))

export default forwardRef(function CatalogMenu({ menus, onSearchFocus, ...other }: CatalogMenuProps, ref) {
	const classes = useStyles(other)
	const { focus, selected, setFocus, onCheckedMenu } = useSwitchCatalog()

	const handleSearchFocus = (event: React.MouseEvent) => {
		setFocus(false)
		onSearchFocus?.(event)
	}

	const handleCatalogFocus = () => {
		setFocus(!focus)
	}

	return (
		<Box className={classes.root}>
			<MediaQuery media={['pc', 'pad']}>
				<Box className={classes.catalog}>
					<Variant>
						<Menu
							menus={menus}
							isBorder
							classes={{
								root: classes.menu,
								label: classes.label
							}}
							onNodeClick={onCheckedMenu}
							value={selected}
						/>
					</Variant>
				</Box>
			</MediaQuery>
			<MediaQuery media="mobile">
				<Box className={classes.catalog}>
					<Box
						className={clsx(classes.content, {
							focus: !focus
						})}
						ref={ref}
					>
						<Box className={clsx(classes.menuLabel, classes.spaceBetweenCenter)} onClick={handleCatalogFocus}>
							<Typography variant="h5" fontWeight={400} width="80%">
								前端
							</Typography>
							<TransformIcon color="inherit" focus={focus} originIcon={<ExpandLess />} finishIcon={<ExpandMore />} />
						</Box>
						<Box className={clsx(classes.searchBtn, classes.verticalCenter)} onClick={handleSearchFocus}>
							<Search />
						</Box>
					</Box>
					<Menu
						focus={focus}
						menus={menus}
						isBorder
						classes={{
							root: classes.menu,
							label: classes.label
						}}
						onNodeClick={onCheckedMenu}
					/>
				</Box>
			</MediaQuery>
		</Box>
	)
})
