import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import type { Theme } from '@mui/material'
import clsx from 'clsx'
import Grid from '@mui/material/Grid'
import useToolbar from 'components/LayoutToolbar/hooks/useToolbar'

const useStyles = makeStyles((theme: Theme) => ({
	...theme.styles,
	root: {
		padding: theme.spacing(0, 2)
	},
	layoutItems: {
		paddingTop: theme.spacing(1.5)
	},
	item: {
		width: 106,
		height: 54,
		borderRadius: 8,
		border: '1px solid rgba(145, 158, 171, 0.24)',
		cursor: 'pointer',
		boxSizing: 'border-box',
    '&.active': {
      backgroundColor: theme.colorPalette.setting.active,
      '& div': {
        backgroundColor: theme.colorPalette.primary.main,
        boxShadow: `${theme.colorPalette.primary.main} 0px 4px 8px -3px`
      }
    }
	},
	row: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		padding: theme.spacing(0, 0.5),
		'& div': {
			width: 25,
			height: 25,
			borderRadius: 4,
			border: '1px solid rgba(145, 158, 171, 0.24)'
		}
	},
	column: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		padding: theme.spacing(1),
		'& div': {
			height: 6,
			borderRadius: 2,
			border: '1px solid rgba(145, 158, 171, 0.24)'
		}
	}
}))

function PageLayout() {
	const classes = useStyles()
	const theme = useTheme()
	const { layout, switchLayout } = useToolbar()

	return (
		<div className={classes.root}>
			<Typography variant="caption" color={theme.palette.text.secondary}>
				布局
			</Typography>
			<div className={clsx(classes.spaceBetweenCenter, classes.layoutItems)}>
				<Grid container spacing={1.5}>
					<Grid item>
						<div
							className={clsx(classes.item, classes.row, {
								active: layout === 'row'
							})}
							onClick={() => switchLayout('row')}
						>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</Grid>
					<Grid item>
						<div
							className={clsx(classes.item, classes.column, {
								active: layout === 'column'
							})}
							onClick={() => switchLayout('column')}
						>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	)
}

export default PageLayout
