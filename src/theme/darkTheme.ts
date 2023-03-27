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
			six: '#FF3030',
		},
		text: {
			default: '#FFFFFF',
			textSecondary: '#FFFFFF',
			disabled: '#86909c',
			dark: 'rgb(22, 28, 36)',
			secondary: '#86909c'
		}
	},
	componentStyleOverrides: {
		App: {
			root: {
				background:
					'linear-gradient(rgba(22, 28, 36, 0.94), rgba(22, 28, 36, 0.94)) center center / cover no-repeat, url(/images/home/overlay_2.jpg)'
			}
		},
		Navigation: {
			focus: {
				backgroundColor: 'rgba(22, 28, 36, 0.8)',
				'& .tools': {
					'& .MuiOutlinedInput-notchedOutline': {
						backgroundColor: 'transparent'
					},
					'& .MuiButton-outlined': {
						backgroundColor: 'transparent'
					}
				}
			},
			btn: {
				'&.MuiButton-textPrimary': {
					color: '#FFFFFF'
				}
			}
		},
		AccordionMenu: {
			root: {
				border: '1px solid rgba(145, 158, 171, 0.16)',
				boxShadow: 'rgb(0 0 0 / 24%) -40px 40px 80px -8px'
			}
		},
		HomeTechnologySharing: {
			development: {
				[breakpoints.up('md')]: {
					boxShadow: 'rgb(0 0 0 / 40%) -40px 40px 80px'
				}
			}
		},
		HomeCategory: {
			content: {
				borderColor: 'rgba(145, 158, 171, 0.24)'
			},
			item: {
				borderColor: 'rgba(145, 158, 171, 0.24)'
			}
		},
		HomeCategoryList: {
			item: {
				color: '#FFFFFF'
			},
			button: {
				color: '#FFFFFF'
			}
		},
		HomeDesigner: {
			image: {
				boxShadow: 'rgb(0 0 0) -40px 80px 80px'
			}
		},
		SideSwiper: {
			prevBtn: {
				color: '#FFFFFF'
			},
			nextBtn: {
				color: '#FFFFFF'
			}
		},
		SharingCard: {
			root: {
				backgroundColor: 'rgb(22, 28, 36)',
				boxShadow: 'rgb(0 0 0 / 40%) 4px 4px 16px',
				'&:hover': {
					boxShadow: 'rgb(0 0 0) 0px 5px 15px'
				}
			}
		},
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
		},
		PopupLayer: {
			drawerPaper: {
				backgroundColor: 'rgba(22, 28, 36, 0.9)'
			}
		},
    Footer: {
      root: {
        background: 'linear-gradient(rgba(22, 28, 36, 0.94), rgba(22, 28, 36, 0.94)) center center / cover no-repeat, url(/images/home/overlay_2.jpg)'
      }
    }
	},
	palette: {
		mode: 'dark'
	},
	components: {
		MuiTypography: {
			defaultProps: {
				color: '#FFFFFF'
			}
		},
		MuiButton: {
			styleOverrides: {
				outlined: {
					'&.MuiButton-outlinedPrimary': {
						color: '#FFFFFF'
					}
				}
			}
		}
	},
}

export default darkTheme
