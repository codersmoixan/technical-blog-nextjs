import Buttons from 'components/Buttons'
import useFullScreen from 'components/LayoutToolbar/hooks/useFullScreen'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
import { Fullscreen, FullscreenExit } from '@mui/icons-material'

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(2),
		position: 'absolute',
		bottom: 0,
		width: '100%',
		boxSizing: 'border-box',
		borderTop: '1px dashed rgba(145, 158, 171, 0.24)'
	},
	btn: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
}))

function FullScreen() {
	const classes = useStyles()
	const { isFullScreen, toggleFullScreen } = useFullScreen()

	return (
		<div className={classes.root}>
			<Buttons className={classes.btn} variant="outlined" fullWidth onClick={toggleFullScreen}>
				{isFullScreen ? (
					<>
						关闭全屏
						<FullscreenExit />
					</>
				) : (
					<>
						开启全屏
						<Fullscreen />
					</>
				)}
			</Buttons>
		</div>
	)
}

export default FullScreen
