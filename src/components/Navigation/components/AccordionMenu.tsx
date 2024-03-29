/**
 * @author zhengji.su
 * @description AccordionMenu
 */

import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import { VariantContent } from 'components/Animation/Variant'
import clsx from 'clsx'
import type { NavigateItemOption } from 'components/Navigation/types'
import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'

interface AccordionMenuProps {
	tab: NavigateItemOption | null
	className?: string
}

const useStyles = makeStyles((theme: Theme) => {
	const isDark = theme.palette.mode === 'dark'

	return {
		root: {
			position: 'absolute',
			left: '50%',
			top: 72,
			display: 'none',
			transform: 'translateX(-50%)',
			width: theme.config.contentWidth,
			height: 355,
			zIndex: -1,
			backgroundColor: theme.colorPalette.background.default,
			borderRadius: 16,
			backdropFilter: 'blur(6px)',
			opacity: 0,
      ...(isDark ? {
        border: '1px solid rgba(145, 158, 171, 0.16)',
        boxShadow: 'rgb(0 0 0 / 24%) -40px 40px 80px -8px'
      } : {})
		},
		accordionContent: {
			display: 'flex',
			padding: theme.spacing(4, 3),
			width: 980,
			height: 'auto'
		},
		menuTitle: {
			minWidth: 180,
			fontWeight: 700,
			color: theme.colorPalette.text.textSecondary
		},
		menuContent: {
			color: theme.palette.primary.main,
			cursor: 'pointer'
		},
		contentItem: {
			padding: theme.spacing(1, 0),
			color: theme.colorPalette.text.secondary
		}
	}
})

const rootVariants = {
	open: {
		display: 'block',
		opacity: 1
	},
	closed: {
		display: 'none',
		opacity: 0
	}
}

function AccordionMenu({ tab, className }: AccordionMenuProps) {
	const classes = useStyles()

	if (isEmpty(tab)) {
		return null
	}

	const menus = get(tab, 'menus', []) as NavigateItemOption[]

	return (
		<VariantContent className={clsx(className, classes.root, 'sm-accordion__menu')} variants={rootVariants}>
			<VariantContent
				key={tab.id}
				initial={{ y: 30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
				className={classes.accordionContent}
			>
				{menus.map(item => (
					<Box key={item.id}>
						<Typography className={classes.menuTitle}>{item.label}</Typography>
						<Box className={classes.menuContent}>
							{item.menus?.map((menu: any) => (
								<Box key={menu.id} className={classes.contentItem}>
									<Typography variant="body1" color="inherit">
										{menu.label}
									</Typography>
								</Box>
							))}
						</Box>
					</Box>
				))}
			</VariantContent>
		</VariantContent>
	)
}

export default AccordionMenu
