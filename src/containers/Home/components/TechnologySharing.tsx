import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Content from 'components/Layout/Content'
import clsx from 'clsx'
import Image from 'next/image'
import ScrollInView from 'components/Layout/ScrollInView'
import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'

const useStyles = makeStyles((theme: Theme) => {
	const isDark = theme.palette.mode === 'dark'

	return {
		...theme.styles,
		root: {
			padding: theme.spacing(15, 0),
			[theme.breakpoints.down('md')]: {
				padding: theme.spacing(10, 2)
			}
		},
		title: {
			'& .MuiTypography-caption': {
				fontWeight: 700,
				color: theme.palette.text.secondary
			},
			'& .MuiTypography-h2': {
				marginTop: theme.spacing(3),
				textAlign: 'center'
			}
		},
		card: {
			margin: theme.spacing(0, 'auto'),
			paddingTop: theme.spacing(10),
			display: 'flex',
			justifyContent: 'space-between',
			maxWidth: 1152,
			height: 438,
			[theme.breakpoints.down('md')]: {
				display: 'block',
				paddingTop: theme.spacing(2),
				width: '100%',
				height: 'auto'
			}
		},
		item: {
			padding: theme.spacing(7, 5, 10),
			width: '33%',
			height: '100%',
			borderRadius: 16,
			boxSizing: 'border-box',
			[theme.breakpoints.down('md')]: {
				margin: theme.spacing(3, 0),
				width: '100%',
				boxShadow: 'rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px',
				transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
			}
		},
		development: {
			[theme.breakpoints.up('md')]: {
				boxShadow: isDark ? 'rgb(0 0 0 / 40%) -40px 40px 80px' : 'rgb(145 158 171 / 16%) -40px 40px 80px'
			}
		},
		description: {
			marginTop: theme.spacing(4),
			'& .MuiTypography-body1': {
				marginTop: theme.spacing(3),
				textAlign: 'center',
				color: theme.palette.text.secondary
			}
		}
	}
})

const initial = { transform: 'translateY(100px)' }

function TechnologySharing() {
	const classes = useStyles()

	return (
		<Content className={classes.root}>
			<Box className={clsx(classes.title, classes.columnCenter)}>
				<ScrollInView initial={initial}>
					<Typography variant="caption">TECHNOLOGY SHARING</Typography>
				</ScrollInView>
				<ScrollInView>
					<Typography variant="h2">
						在这里
						<br />
						分享你的技术经验
					</Typography>
				</ScrollInView>
			</Box>
			<ScrollInView initial={initial}>
				<Box className={classes.card}>
					<Box className={classes.item}>
						<Box className={classes.inlineCenter}>
							<Image src="/icons/home/ic_design.svg" alt="ic_development" width={48} height={48} />
						</Box>
						<Box className={clsx(classes.description, classes.columnCenter)}>
							<Typography variant="h5" fontWeight={700}>
								UI & Designer
							</Typography>
							<Typography variant="body1">
								如果你是一个UI设计师，
								<br />
								你可以在这里记录你的UI设计理念，
								<br />
								也可以分享你的设计灵感，
							</Typography>
						</Box>
					</Box>
					<Box className={clsx(classes.item, classes.development)}>
						<Box className={classes.inlineCenter}>
							<Image src="/icons/home/ic_development.svg" alt="ic_development" width={48} height={48} />
						</Box>
						<Box className={clsx(classes.description, classes.columnCenter)}>
							<Typography variant="h5" fontWeight={700}>
								开发 & 开发者
							</Typography>
							<Typography variant="body1">
								如果你是一个开发者，
								<br />
								你可以在这里分享你的开发经验。
								<br />
								如果你是一个初学者，
								<br />
								这里可以学习丰富的开发经验。
								<br />
								学习、分享能让你收获更多的开发乐趣。
							</Typography>
						</Box>
					</Box>
					<Box className={classes.item}>
						<Box className={classes.inlineCenter}>
							<Image src="/icons/home/ic_make_brand.svg" alt="ic_development" width={48} height={48} />
						</Box>
						<Box className={clsx(classes.description, classes.columnCenter)}>
							<Typography variant="h5" fontWeight={700}>
								记录
							</Typography>
							<Typography variant="body1">
								如果你是一个生活小管家，
								<br />
								你可以在这里分享你的生活小技巧。
								<br />
								留下你的记忆，
								<br />
								把快乐分享给更多的人。
							</Typography>
						</Box>
					</Box>
				</Box>
			</ScrollInView>
		</Content>
	)
}

export default TechnologySharing
