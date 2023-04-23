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
import FadeInVariantList from 'components/Animation/Variant/FadeInVariantList'
import type { Variants } from 'framer-motion'
import type { Theme } from '@mui/material'
import type { EmptyObject } from '@/src/tb.types'
import { toggle } from '@/src/utils'

export interface Option extends EmptyObject {
	id: number | string
	label: string
	child?: Array<Option>
}

export interface MenuProps<T = Option> {
	menus: T[]
	focus?: boolean
	active?: ((option: any) => boolean) | boolean
	open?: (string | number)[]
	uniqueOpened?: boolean
	classes?: Partial<ReturnType<typeof useStyles>>
	isBorder?: boolean
	onNodeClick?: (option: any, parent: any | null) => void
	subKey?: string
	expandIcon?: ReactNode
	closeIcon?: ReactNode
	className?: string
	value?: (string | number)[]
	animate?: boolean
	children?: (option: any) => ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {},
	accordion: {
		backgroundColor: theme.colorPalette.primary.transparent,
		backgroundImage: 'none',
		boxShadow: 'none',
		borderBottom: (props: MenuProps) => (props.isBorder ? `1px solid ${theme.colorPalette.primary.colorSecondary}` : 'none'),
		transition: 'all .3s',
		'&.MuiPaper-root': {
			borderRadius: 0
		},
		'&.Mui-expanded': {
			margin: 0
		},
		'&:last-of-type': {
			borderBottom: 'none'
		},
		'&::before': {
			content: '""',
			backgroundColor: (props: MenuProps) => (props.isBorder ? 'rgba(0, 0, 0, 0.12)' : 'transparent')
		}
	},
	summary: {
		padding: 0,
		minHeight: 48,
		'&.Mui-expanded': {
			minHeight: 48
		}
	},
	summaryContent: {
		padding: theme.spacing(0, 1.5),
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
		alignItems: 'center'
	},
	label: {
		display: 'flex',
		alignItems: 'center',
		'& svg': {
			width: 20,
			height: 20
		}
	},
	accordionDetails: {
		padding: 0
	},
	subItem: {
		display: 'block',
		height: 56,
		lineHeight: '56px',
		cursor: 'pointer',
		transition: 'all .3s',
		'& .MuiTypography-root': {
			marginLeft: theme.spacing(3)
		}
	},
	active: {},
	subActive: {
		'& .MuiTypography-root': {
			marginLeft: theme.spacing(3),
			color: theme.colorPalette.text.main
		}
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

function Menu<T extends Option>(props: MenuProps<T>) {
	const classes = useStyles(props)
	const {
		menus,
		focus,
		onNodeClick,
		className,
		subKey = 'child',
		expandIcon,
		closeIcon,
		value = [],
		active,
		open = [],
		uniqueOpened,
		animate
	} = props

	const [expanded, setExpanded] = useState<(string | number)[]>(open)

	// function init() {
	//   if (isEmpty(value)) {
	//     return
	//   }
	//
	//   const parent = menus.find(menu => menu.id == value[0]) ?? menus[0]
	//
	//   if (value.length === 2) {
	//     const child = parent.child?.find(c => c.id == value[1]) as T
	//     setExpanded([value[0]])
	//
	//     // return child && onNodeClick?.(child, parent)
	//   }
	//
	//   // return onNodeClick?.(parent, null)
	// }
	//
	// useDeepCompareEffect(() => {
	// 	init()
	// }, [value, menus, open])

	const handleOpenAccordion = (panel: string | number) => {
		if (uniqueOpened) {
			setExpanded(state => (state.includes(panel) ? [] : [panel]))
			return
		}

		setExpanded(state => toggle(state, panel))
	}

	return (
		<div className={clsx(className, classes.root)}>
			<FadeInVariantList animate={animate} list={menus} focus={focus} contentVariants={menuVariants}>
				{(menu: T) => {
					return (
						<Accordion
							expanded={expanded.includes(menu.id)}
							classes={{
								root: clsx(classes.accordion, {
									[classes.active]: value?.[0] === menu.id
								})
							}}
						>
							<AccordionSummary
								classes={{
									root: classes.summary,
									expanded: classes.expanded,
									content: classes.summaryContent
								}}
							>
								<div className={clsx(classes.label, 'label')}>
									{menu.icon && (
										<Typography lineHeight={1} fontSize={10} mr={1.5} color="inherit">
											<menu.icon />
										</Typography>
									)}
									<Typography
										lineHeight={1}
										flex={1}
										onClick={() => onNodeClick?.(menu, null)}
										fontWeight={value?.[0] === menu.id ? 700 : 400}
										color="inherit"
									>
										{menu.label}
									</Typography>
								</div>
								{menu[subKey] && (
									<Buttons color="inherit" variant="text" space={false} onClick={() => handleOpenAccordion(menu.id)}>
										<TransformIcon color="inherit" focus={expanded.includes(menu.id)} originIcon={expandIcon} finishIcon={closeIcon} />
									</Buttons>
								)}
							</AccordionSummary>
							{menu?.[subKey] && (
								<AccordionDetails classes={{ root: classes.accordionDetails }}>
									{menu?.[subKey].map((c: T) => (
										<div
											key={c.id}
											className={clsx(classes.subItem, {
												[classes.subActive]: value?.[1] === c.id
											})}
											onClick={() => onNodeClick?.(c, menu)}
										>
											<Typography component="span" fontWeight={value?.[1] === c.id ? 700 : 400}>
												{c.label}
											</Typography>
										</div>
									))}
								</AccordionDetails>
							)}
						</Accordion>
					)
				}}
			</FadeInVariantList>
		</div>
	)
}

export default Menu
