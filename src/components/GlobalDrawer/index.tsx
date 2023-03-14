/**
 * @author zhengji.su
 * @description GlobalDrawer
 */

import Drawer, { DrawerProps } from '@mui/material/Drawer'
import { makeStyles } from '@mui/styles'
import Buttons from 'components/Buttons'
import CloseIcon from 'components/Icons/CloseIcon'
import Box from '@mui/material/Box'
import useSeparateChildren from 'hooks/useSeparateChildren'
import type { Theme } from '@mui/material'
import type { ReactElement } from 'react'
import type { EmptyObject } from '@/src/tb.types'

interface GlobalDrawerProps extends DrawerProps {
	open: boolean
	children: ReactElement | ReactElement[]
	classes?: EmptyObject
	bgColor?: string
	onClose?: () => void
	onConfirm?: () => void
}

const useStyles = makeStyles((theme: Theme) => ({
	drawer: {
		'&.MuiDrawer-root': {
			bottom: 'initial',
			height: '100vh'
		}
	},
	header: {
		position: 'sticky',
		top: 0,
		padding: theme.spacing(0, 3),
		height: 72,
		textAlign: 'right',
		lineHeight: '72px',
		backgroundColor: (props: GlobalDrawerProps) => (props.bgColor ? props.bgColor : theme.colorPalette.background.main),
		zIndex: 999,
		'& > button.MuiButtonBase-root': {
			color: theme.colorPalette.text.default
		}
	},
	paper: {
		'&.MuiPaper-root': {
			position: 'static',
			height: '100%',
			backgroundColor: (props: GlobalDrawerProps) => (props.bgColor ? props.bgColor : theme.colorPalette.background.default),
      backgroundImage: 'none'
		}
	}
}))

function GlobalDrawer(props: GlobalDrawerProps) {
	const { open, children, onClose, classes: propClasses, ...other } = props
	const classes = useStyles(props)
	const { header, content, footer } = useSeparateChildren(children, ['header', 'content', 'footer'])

	return (
		<Drawer
			open={open}
			anchor="left"
			classes={{
				root: classes.drawer,
				paper: classes.paper
			}}
      onClose={onClose}
			{...other}
		>
			{header ?? (
				<Box className={classes.header}>
					<Buttons variant="text" space={false} onClick={onClose}>
						<CloseIcon />
					</Buttons>
				</Box>
			)}
			{content}
			{footer}
		</Drawer>
	)
}

export default GlobalDrawer
