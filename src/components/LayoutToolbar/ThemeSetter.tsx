import Box from '@mui/material/Box'
import makeStyles, { Theme } from 'core/makeStyles'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import clsx from 'clsx'
import useToolbar from 'components/LayoutToolbar/hooks/useToolbar'
import MaskIcon from 'components/MaskIcon'
import Grid from '@mui/material/Grid'
import { themePresets } from 'containers/App/constants'
import type { ToolbarSetterPresets } from 'components/LayoutToolbar/types'
import SystemThemeIcon from 'components/Icons/SystemThemeIcon'

interface MakeStylesProps {
	presets: ToolbarSetterPresets
}

const useStyles = makeStyles(
	(theme: Theme) => ({
		root: {
			width: 260
		},
		header: {
			padding: theme.spacing(2),
			borderBottom: '1px dashed rgba(145, 158, 171, 0.24)'
		},
		body: {
			padding: theme.spacing(2)
		},
		modeItems: {
			display: 'flex',
			justifyContent: 'space-between',
			marginTop: theme.spacing(1),
			'& .primary.active': {
				boxShadow: 'rgb(145 158 171 / 16%) 0px 12px 24px -4px'
			}
		},
		item: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: 8,
			border: '1px solid rgba(145, 158, 171, 0.24)',
			cursor: 'pointer',
			transition: theme.config.transition(),
			'&:hover': {
				backgroundColor: theme.colorPalette.setting.hover
			},
			'&.active': {
				backgroundColor: theme.colorPalette.setting.active,
				'&:hover': {
					backgroundColor: theme.colorPalette.setting.activeHover
				}
			}
		},
		modeItem: {
			width: 65,
			height: 65,
			color: theme.colorPalette.setting.colorSecondary,
			'&.active': {
				color: theme.palette.primary.main
			}
		},
		presets: {
			marginTop: theme.spacing(2),
			'& .items': {
				marginTop: theme.spacing(1)
			}
		},
		presetsItem: {
			width: 66,
			height: 46,
			'&.active': {
				backgroundColor: theme.colorPalette.setting.active,
				'& .preset': {
					width: 24,
					height: 24,
					boxShadow: (props: MakeStylesProps) => (props.presets ? `${theme.colorPalette.setting[props.presets]} 0px 4px 8px -3px` : 'none')
				}
			},
			'& .preset': {
				width: 12,
				height: 12,
				borderRadius: '50%',
				backgroundColor: 'currentColor',
				transition: theme.config.transition()
			}
		}
	}),
	'ThemeSetting'
)

function ThemeSetter() {
	const { storeMode, presets, switchMode, switchPresets } = useToolbar()
	const classes = useStyles({ presets })
	const theme = useTheme()

	return (
		<div className={classes.root}>
			<div className={classes.header}>
				<Typography variant="body1">主题设置</Typography>
			</div>
			<div className={classes.body}>
				<div className="mode">
					<Typography variant="caption" color={theme.palette.text.secondary}>
						模式
					</Typography>
					<Box className={classes.modeItems}>
						<Box
							className={clsx(classes.item, classes.modeItem, 'primary', {
								active: storeMode === 'light'
							})}
							onClick={() => switchMode('light')}
						>
							<MaskIcon url="/icons/setting/ic_sun.svg" />
						</Box>
						<Box
							className={clsx(classes.item, classes.modeItem, 'primary', {
								active: storeMode === 'system'
							})}
							onClick={() => switchMode('system')}
						>
							<SystemThemeIcon width={28} height={28} />
						</Box>
						<Box
							className={clsx(classes.item, classes.modeItem, 'secondary', {
								active: storeMode === 'dark'
							})}
							onClick={() => switchMode('dark')}
						>
							<MaskIcon url="/icons/setting/ic_moon.svg" />
						</Box>
					</Box>
				</div>
				<Box className={classes.presets}>
					<Typography variant="caption" color={theme.palette.text.secondary}>
						预设
					</Typography>
					<Box className="items">
						<Grid container spacing={1.5}>
							{themePresets.map((item: ToolbarSetterPresets) => (
								<Grid item key={item}>
									<Box
										className={clsx(classes.item, classes.presetsItem, {
											active: item === presets
										})}
										color={theme.colorPalette.setting[item]}
										onClick={() => switchPresets(item)}
									>
										<Box className="preset"></Box>
									</Box>
								</Grid>
							))}
						</Grid>
					</Box>
				</Box>
			</div>
		</div>
	)
}

export default ThemeSetter
