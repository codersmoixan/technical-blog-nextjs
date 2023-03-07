import BeforeRoute from 'core/BeforeRoute'
import BasicSpeedDial from 'components/SuspendButtons/BasicSpeedDial'
import ThemeSettingIcon from 'containers/App/components/ThemeSettingIcon'
import Fab from '@mui/material/Fab'
import React from 'react'
import makeStyles, { Theme } from 'core/makeStyles'
import useSpeedDial from 'hooks/useSpeedDial'
import routes from '@/src/routes'

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

function SuspendButtons() {
	const classes = useStyles()
	const { updateSpeedDial } = useSpeedDial()

	return (
		<>
			<BeforeRoute exclude={[routes.editor, routes.login, routes.notFond, routes.register]}>
				<BasicSpeedDial />
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
