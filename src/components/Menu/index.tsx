/**
 * @author zhengji.su
 * @description Menu
 */

import { useState, ReactNode } from 'react'
import Accordion from '@mui/material/Accordion'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import { AccordionDetails, AccordionSummary } from '@mui/material'
import Buttons from 'components/Buttons'
import clsx from 'clsx'
import TransformIcon from 'components/TransformIcon'
import useDeepCompareEffect from 'hooks/effect/useDeepCompareEffect'
import isEmpty from 'lodash/isEmpty'
import { isFunction } from 'lodash'
import FadeInVariantList from 'components/Animation/Variant/FadeInVariantList'
import type { Variants } from 'framer-motion'
import type { Theme } from '@mui/material'
import type { EmptyObject } from '@/src/tb.types'

export interface MenuItem extends EmptyObject {
	id: number | string
	label: string
	child?: MenuItem[]
}

interface MenuProps {
	menus: MenuItem[]
	focus?: boolean
	checked?: ((menuItem: MenuItem) => boolean) | boolean
	classes?: EmptyObject
	isBorder?: boolean
	onNodeClick?: (options: MenuItem, parent: MenuItem | null) => void
	childKey?: string
	expandIcon?: ReactNode
	closeIcon?: ReactNode
	className?: string
	value?: string[]
	children?: (option: MenuItem) => ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
    padding: theme.spacing(0, 3),
	},
	accordion: {
		backgroundColor: theme.colorPalette.primary.transparent,
		backgroundImage: 'none',
		boxShadow: 'none',
		borderBottom: (props: MenuProps) => (props.isBorder ? `1px solid ${theme.colorPalette.primary.colorSecondary}` : 'none'),
		'&.MuiPaper-root': {
			borderRadius: 0
		},
		'&.Mui-expanded': {
			margin: 0
		},
		'&:last-of-type': {
			borderBottom: 'none'
		}
	},
	checked: {},
	summary: {
		padding: 0,
		minHeight: 48,
		'&.Mui-expanded': {
			minHeight: 48
		}
	},
	summaryContent: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 56,
		margin: 0,
		'&.Mui-expanded': {
			margin: 0
		}
	},
	expanded: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 0
	},
	label: {
		display: 'flex',
		alignItems: 'center',
		'& svg': {
			width: 20,
			height: 20
		}
	},
	value: {
		padding: theme.spacing(0, 2, 2),
		'& > a': {
			display: 'block',
			height: 32,
			lineHeight: '32px'
		}
	},
	childItem: {
		display: 'block',
		height: 25,
		lineHeight: '25px',
		cursor: 'pointer'
	}
}))

const menuVariants: Variants = {
	open: {
		display: 'block',
		height: 'auto',
		opacity: 1,
		transition: {
			duration: 0.3
		}
	},
	closed: {
		height: 0,
		opacity: 0,
		transition: {
			duration: 0.3
		},
		transitionEnd: {
			display: 'none'
		}
	}
}

function Menu(props: MenuProps) {
	const classes = useStyles(props)
	const { menus, focus, onNodeClick, className, childKey = 'child', expandIcon, closeIcon, value = [], checked } = props

	const [expanded, setExpanded] = useState<string | number | false>(false)

	useDeepCompareEffect(() => {
		init()
	}, [value, menus])

	function init() {
		if (isEmpty(value)) {
			return
		}

		const parent = menus.find(menu => menu.id == value[0]) ?? menus[0]

		if (value.length === 2) {
			const child = parent?.child?.find(c => c.id == value[1])
			setExpanded(value[0])

			return child && onNodeClick?.(child, parent)
		}

		return onNodeClick?.(parent, null)
	}

	const handleOpenAccordion = (panel: string | number) => {
		setExpanded(expanded === panel ? false : panel)
	}

	return (
		<div className={clsx(className, classes.root)}>
			<FadeInVariantList list={menus} focus={focus} contentVariants={menuVariants}>
				{menu => (
					<Accordion
						expanded={expanded == menu.id}
						classes={{ root: classes.accordion }}
						className={clsx({
							[classes.checked]: isFunction(checked) ? checked(menu) : checked
						})}
					>
						<AccordionSummary
							classes={{
								root: classes.summary,
								expanded: classes.expanded,
								content: classes.summaryContent
							}}
						>
							<div className={classes.label}>
								{menu.icon && (
									<Typography lineHeight={1} fontSize={10} mr={2} color="inherit">
										<menu.icon />
									</Typography>
								)}
								<Typography
									lineHeight={1}
									flex={1}
									onClick={() => onNodeClick?.(menu, null)}
									fontWeight={value?.[0] == menu.id ? 700 : 400}
									color="inherit"
								>
									{menu.label}
								</Typography>
							</div>
							{menu[childKey] && (
								<Buttons variant="text" space={false} onClick={() => handleOpenAccordion(menu.id)}>
									<TransformIcon focus={expanded == menu.id} originIcon={expandIcon} finishIcon={closeIcon} />
								</Buttons>
							)}
						</AccordionSummary>
						{menu?.[childKey] && (
							<AccordionDetails classes={{ root: classes.value }}>
								{menu?.[childKey].map((c: MenuItem) => (
									<Typography
										component="a"
										key={c.id}
										className={classes.childItem}
										onClick={() => onNodeClick?.(c, menu)}
										fontWeight={value?.[1] == c.id ? 700 : 400}
									>
										{c.label}
									</Typography>
								))}
							</AccordionDetails>
						)}
					</Accordion>
				)}
			</FadeInVariantList>
		</div>
	)
}

export default Menu
