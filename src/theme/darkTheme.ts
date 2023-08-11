import { breakpoints } from './theme'
import type { ThemeOptions, ColorPaletteOptions } from '@/src/theme/types'
import type { PaletteOptions } from '@mui/material'

interface DarkTheme extends Pick<ThemeOptions, 'componentStyleOverrides' | 'components'> {
	colorPalette: {
		background: ColorPaletteOptions['background']
		setting: Partial<ColorPaletteOptions['setting']>
		text: Partial<ColorPaletteOptions['text']>
	}
	palette: PaletteOptions
}

const darkTheme: DarkTheme = {
	colorPalette: {
		background: {
			main: 'rgb(22, 28, 36)',
			default: 'rgba(22, 28, 36, 0.94)',
			primary: 'rgb(252, 252, 252)',
			secondary: 'rgba(145, 158, 171, 0.08)'
		},
		setting: {
			one: '#00AB55',
			two: '#078DEE',
			three: '#7635dc',
			four: '#2065D1',
			five: '#fda92d',
			six: '#FF3030'
		},
		text: {
			main: '#FFFFFF',
			default: '#E7EBF0',
			textSecondary: '#FFFFFF',
			disabled: '#86909c',
			dark: 'rgb(22, 28, 36)',
			secondary: '#8c8c8c'
		}
	},
	componentStyleOverrides: {
		Login: {
			fab: {
				boxShadow: 'rgb(0 0 0 / 36%) -12px 12px 32px -4px'
			},
			submit: {
				backgroundColor: 'rgb(252, 252, 252)',
				color: 'rgb(33, 43, 54)',
				'&.MuiButton-root:hover': {
					backgroundColor: 'rgba(252, 252, 252, 0.94)'
				}
			},
			example: {
				backgroundColor: 'rgb(0, 55, 104)',
				color: 'rgb(97, 243, 243)'
			}
		},
		Register: {
			submit: {
				backgroundColor: 'rgb(252, 252, 252)',
				color: 'rgb(33, 43, 54)',
				'&.MuiButton-root:hover': {
					backgroundColor: 'rgba(252, 252, 252, 0.94)'
				}
			}
		}
	},
	palette: {
		mode: 'dark'
	},
	components: {
		MuiTypography: {
			defaultProps: {
				color: '#E7EBF0'
			}
		},
		MuiButton: {
			styleOverrides: {
				outlined: {
					'&.MuiButton-outlinedPrimary': {
						color: '#E7EBF0'
					}
				}
			}
		}
	}
}

export default darkTheme
