import BeforeRoute from 'core/BeforeRoute'
import BasicSpeedDial, { SpeedDialOption } from 'components/SuspendButtons/BasicSpeedDial'
import ThemeSettingIcon from 'containers/App/components/ThemeSettingIcon'
import Fab from '@mui/material/Fab'
import React from 'react'
import makeStyles, { Theme } from 'core/makeStyles'
import useSpeedDial from 'components/SuspendButtons/hooks/useSpeedDial'
import routes from '@/src/routes'
import type { SuspendActions } from 'components/SuspendButtons/types'

interface SuspendButtonsProps {
	actions: SuspendActions
}

const useStyles = makeStyles(
	(theme: Theme) => ({
		fab: {
			position: 'fixed',
			right: 64,
			bottom: 64,
			backgroundColor: theme.colorPalette.background.main,
			boxShadow: 'rgb(99 115 129 / 36%) -12px 12px 32px -4px',
			zIndex: 9999,
			'&:hover': {
				backgroundColor: theme.colorPalette.background.default
			},
			[theme.breakpoints.down('sm')]: {
				bottom: 12,
				right: 12
			}
		}
	}),
	'SuspendButtons'
)

function SuspendButtons({ actions = [] }: SuspendButtonsProps) {
	const classes = useStyles()
	const { updateSpeedDial } = useSpeedDial()

	const handleAction = ({ id }: SpeedDialOption) => {
		if (id === 'top') {
			document.body.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})

			return
		}

		if (id === 'editor') {
			return
		}

		updateSpeedDial(id)
	}

	return (
		<>
			<BeforeRoute exclude={[routes.editor, routes.login, routes.notFond, routes.register]}>
				<BasicSpeedDial options={actions} onChange={handleAction} />
			</BeforeRoute>
			<BeforeRoute include={[routes.login, routes.notFond, routes.register]}>
				<Fab className={classes.fab} onClick={() => updateSpeedDial('setting')}>
					<ThemeSettingIcon />
				</Fab>
			</BeforeRoute>
		</>
	)
}

export default SuspendButtons
