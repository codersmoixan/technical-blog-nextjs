import theme from './theme'
import type { ThemeOptions } from './types'

const redTheme: ThemeOptions = {
	...theme,
	colorPalette: {
		primary: {
			main: '#FF3030',
			default: '#FFFFFF',
			secondary: 'rgba(229 230, 232, 1)',
			colorSecondary: '#d8dee3',
			transparent: 'transparent',
			dark: '#131313',
			sullenGrey: '#33323e',
			lightGrey: '#6c6b7b',
			lightPurple: '#853bce',
			error: '#d32f2f',
			placeholder: '#c1c5cd',
			disabled: '#86909c',
			darkPeach: '#f8f6f1'
		},
		background: {
			main: 'rgb(252, 252, 252)',
			default: '#FFFFFF',
			primary: '#131313',
			secondary: 'rgba(145, 158, 171, 0.08)'
		},
		text: {
			main: '#FF3030',
			default: '#131313',
			textSecondary: '#6c6b7b',
			disabled: '#86909c',
			dark: '#131313',
			secondary: '#86909c'
		},
		button: {
			main: '#FF3030',
			default: '#FFFFFF',
			background: '#FF3030',
			hover: 'rgba(255, 48, 48, .8)'
		},
		setting: {
			one: '#00AB55',
			two: '#078DEE',
			three: '#7635dc',
			four: '#2065D1',
			five: '#fda92d',
			six: '#FF3030',
			colorSecondary: 'rgba(99, 115, 129)',
			hover: 'rgba(186, 191, 200, 0.08)',
			active: 'rgba(255, 48, 48, 0.08)',
			activeHover: 'rgba(255, 48, 48, 0.15)'
		},
		gradient: {
			propagate:
				'-webkit-linear-gradient(300deg, rgb(255, 48, 48) 0%, rgb(255, 171, 0) 25%, rgb(255, 48, 48) 50%, rgb(255, 171, 0) 75%, rgb(255, 48, 48) 100%) 0% 0% / 400%',
			button:
				'linear-gradient(76.35deg, rgb(255, 48, 48) 15.89%, rgb(255, 171, 0) 89.75%)'
		}
	},
	palette: {
		primary: {
			main: '#FF3030'
		},
		background: {
			default: 'rgb(252, 252, 252)'
		},
		text: {
			primary: '#181622',
			secondary: '#86909c'
		}
	},
	components: {
		MuiTypography: {
			defaultProps: {
				color: '#181622'
			}
		}
	}
}

export default redTheme
