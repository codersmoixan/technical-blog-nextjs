import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'

const useArticleStyles = makeStyles((theme: Theme) => ({
	root: {
		'& span': {
			lineHeight: 1.75
		},
		'& p, & span, & div, & li, & blockquote, & strong': {
			fontSize: 14,
			lineHeight: '25px'
		},
		'& h1 > span': {
			fontSize: '2.667rem'
		},
		'& h2 > span': {
			fontSize: 30
		},
		'& ul': {
			paddingLeft: theme.spacing(3.5)
		},
		'& hr': {
			margin: theme.spacing(1.25, 0),
			height: 1,
			backgroundColor: theme.colorPalette.primary.secondary,
			border: 'none'
		},
		'& blockquote': {
			padding: theme.spacing(1.5, 2.5),
			borderLeft: `4px solid ${theme.colorPalette.primary.main}`,
			backgroundColor: theme.colorPalette.background.opacity?.(0.1),
			color: theme.colorPalette.text.secondary,
			'& strong': {
				color: theme.colorPalette.primary.main
			}
		},
		'& pre > code': {
			fontSize: 12,
			'& span': {
				fontSize: 12
			}
		},
		'& a': {
			color: theme.colorPalette.primary.main,
			transition: 'all .3s',
			'&:hover': {
				color: '#078DEE'
			}
		}
	}
}))

export default useArticleStyles
