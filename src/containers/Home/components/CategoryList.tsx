import Box, { BoxProps } from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import clsx from 'clsx'
import TickIcon from 'components/Icons/TickIcon'
import Buttons from 'components/Buttons'
import AngleRightIcon from 'components/Icons/AngleRightIcon'
import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'

interface CategoryListProps extends BoxProps {
	title: string
	list?: any[]
	sinkerColor?: string
}

const useStyles = makeStyles((theme: Theme) => {
	const isDark = theme.palette.mode === 'dark'

	return {
		root: {
			padding: theme.spacing(10, 5, 5),
			boxSizing: 'border-box'
		},
		title: {
			position: 'relative',
			marginTop: theme.spacing(2),
			'&::before': {
				content: '""',
				display: 'block',
				position: 'absolute',
				left: 0,
				bottom: 2,
				width: 40,
				height: 8,
				opacity: 0.48,
				background: (props: CategoryListProps) => props.sinkerColor || theme.palette.primary.main
			}
		},
		list: {
			marginTop: theme.spacing(5)
		},
		item: {
			display: 'flex',
			alignItems: 'center',
			marginBottom: theme.spacing(2),
			color: isDark ? theme.colorPalette.text.default : theme.colorPalette.primary.sullenGrey,
			'& .MuiTypography-body1': {
				marginLeft: theme.spacing(1)
			}
		},
		footer: {
			marginTop: theme.spacing(5),
			textAlign: 'right'
		},
		button: {
			padding: 0,
			height: 'auto',
			fontWeight: 700,
			fontSize: 13,
			color: isDark ? theme.colorPalette.text.default : theme.colorPalette.primary.lightGrey,
			'& svg': {
				marginLeft: theme.spacing(1),
				fontSize: 20
			}
		}
	}
})

const initList = [
	{ id: 1, label: '前端' },
	{ id: 2, label: '后端' },
	{ id: 3, label: 'Golang' },
	{ id: 4, label: 'Java' },
	{ id: 5, label: 'JavaScript' },
	{ id: 6, label: 'TypeScript' }
]

function CategoryList(props: CategoryListProps) {
	const { className, title, list = initList } = props
	const classes = useStyles(props)
	const theme = useTheme()

	return (
		<Box className={clsx(className, classes.root, 'category-list')}>
			<Typography variant="body1" fontWeight={700} color={theme.palette.text.secondary}>
				LICENSE
			</Typography>
			<Typography variant="h4" className={classes.title}>
				{title}
			</Typography>
			<Box className={classes.list}>
				{list.map(item => (
					<Box className={classes.item} key={item.id}>
						<TickIcon />
						<Typography variant="body1" color="currentColor">
							{item.label}
						</Typography>
					</Box>
				))}
			</Box>
			<Box className={classes.footer}>
				<Buttons className={classes.button}>
					查看更多
					<AngleRightIcon />
				</Buttons>
			</Box>
		</Box>
	)
}

export default CategoryList
