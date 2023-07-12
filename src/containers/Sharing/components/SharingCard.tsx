/**
 * @author zhengji.su
 * @description BlogCard
 */

import React, { useState, forwardRef, ReactElement, ReactNode, ForwardedRef } from 'react'
import { styled } from '@mui/material/styles'
import Card, { CardProps } from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Image, { StaticImageData } from 'next/image'
import ShareFour from 'assets/images/share/share-four.png'
import Typography from '@mui/material/Typography'
import MediaQuery from 'core/MediaQuery'
import Box from '@mui/material/Box'
import useSeparateChildren from 'hooks/useSeparateChildren'
import clsx from 'clsx'
import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'

interface SharingCardProps extends Pick<CardProps, 'onClick'> {
	title: ReactNode
	date: ReactNode
	avatar?: ReactNode
	image?: string | StaticImageData
	actions?: boolean
	className?: string
	children?: ReactElement | ReactElement[]
}

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean
}

export const DESCRIPTION = 'description'
export const EXPANDED = 'expanded'

const ExpandMore = styled((props: ExpandMoreProps) => {
	const { expand, ...other } = props
	return <IconButton {...other} />
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest
	})
}))

const useStyles = makeStyles((theme: Theme) => {
	const isDark = theme.palette.mode === 'dark'

	return {
		root: {
			display: 'flex',
			flexDirection: 'column',
			width: '100%',
			height: '100%',
			boxShadow: 'rgb(240 240 240 / 30%) 4px 4px 12px',
			borderRadius: 8,
			cursor: 'pointer',
			'&:hover': {
				boxShadow: 'rgb(220 220 220 / 70%) 4px 4px 14px'
			},
			[theme.breakpoints.up('sm')]: {
				maxWidth: 325
			},
			[theme.breakpoints.down('md')]: {
				boxShadow: 'rgb(240 240 240 / 30%) 4px 4px 12px',
				'&:hover': {
					boxShadow: 'rgb(220 220 220 / 70%) 4px 4px 12px'
				}
			},
			...(isDark
				? {
						backgroundColor: 'rgb(22, 28, 36)',
						boxShadow: 'rgb(0 0 0 / 30%) 4px 4px 12px',
						'&:hover': {
							boxShadow: 'rgb(0 0 0 / 70%) 4px 4px 14px'
						},
						[theme.breakpoints.down('md')]: {
							boxShadow: 'rgb(0 0 0 / 30%) 4px 4px 12px',
							'&:hover': {
								boxShadow: 'rgb(0 0 0 / 70%) 4px 4px 12px'
							}
						}
				  }
				: {})
		},
		header: {
			padding: theme.spacing(1, 2)
		},
		avatar: {
			backgroundColor: theme.colorPalette.background.main,
			color: theme.colorPalette.text.default
		},
		title: {},
		date: {
			color: theme.palette.text.secondary
		},
		image: {
			width: '100%',
			height: 180,
			[theme.breakpoints.up('sm')]: {
				maxWidth: 325
			}
		},
		description: {
			padding: theme.spacing(1, 2)
		},
		actions: {},
		content: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			flex: 1
		},
		expanded: {}
	}
})

const variants = {
	opacity: 1,
	x: 0,
	y: 0,
	transition: { type: 'spring', stiffness: 300, damping: 24 },
	duration: 0.5
}

export default forwardRef(function SharingCard(props: SharingCardProps, ref: ForwardedRef<any>) {
	const { title, avatar = 'S', image = ShareFour, date, actions, className, children, ...other } = props
	const classes = useStyles(props)
	const { description, expanded } = useSeparateChildren(children, ['description', 'expanded'])

	const [isExpanded, setIsExpanded] = useState(false)

	const handleExpandClick = () => {
		setIsExpanded(!isExpanded)
	}

	return (
		<Card className={clsx(className, classes.root)} ref={ref} {...other}>
			<Image className={classes.image} src={image} alt="" />
			<Box className={classes.content}>
				<Box display="flex" justifyContent="flex-start" flexDirection="column">
					<CardHeader
						avatar={<Avatar className={classes.avatar}>{avatar}</Avatar>}
						title={
							<Typography variant="body1" className={classes.title}>
								{title}
							</Typography>
						}
						subheader={
							<Typography variant="body1" className={classes.date}>
								{date}
							</Typography>
						}
						className={classes.header}
					/>
					{description && <CardContent className={classes.description}>{description}</CardContent>}
				</Box>
				{actions && (
					<CardActions disableSpacing className={classes.actions}>
						<IconButton>
							<FavoriteIcon />
						</IconButton>
						<IconButton>
							<ShareIcon />
						</IconButton>
						<MediaQuery media="mobile">
							{expanded ? (
								<ExpandMore expand={isExpanded} onClick={handleExpandClick} aria-expanded={isExpanded}>
									<ExpandMoreIcon />
								</ExpandMore>
							) : null}
						</MediaQuery>
					</CardActions>
				)}
			</Box>
			{expanded && (
				<Collapse in={isExpanded} timeout="auto" unmountOnExit className={classes.expanded}>
					<CardContent>{expanded}</CardContent>
				</Collapse>
			)}
		</Card>
	)
})
