import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'
import CretorLayout from 'containers/Creator/components/CretorLayout'
import Typography from '@mui/material/Typography'
import { ReactNode } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const useStyles = makeStyles((theme: Theme) => ({
	root: {},
	header: {
		padding: theme.spacing(2),
		display: 'flex',
		backgroundColor: theme.colorPalette.background.default,
		borderRadius: 6,
		'& .avatar': {
			marginRight: theme.spacing(2),
			overflow: 'hidden',
			width: 72,
			height: 72,
			borderRadius: '50%'
		},
		'& .data': {
			display: 'flex',
			alignItems: 'center',
			'& .data-item': {
				display: 'flex',
				alignItems: 'center',
				'&:first-of-type::after': {
					content: '""',
					display: 'block',
					margin: theme.spacing(0, 2),
					width: 2,
					height: 14,
					backgroundColor: theme.colorPalette.primary.lightGrey
				}
			}
		}
	},
	card: {
		marginTop: theme.spacing(2),
		backgroundColor: theme.colorPalette.background.default,
		borderRadius: 6,
		'& .title': {
			padding: theme.spacing(2),
			borderBottom: `1px solid ${theme.colorPalette.primary.colorSecondary}`
		}
	},
	contentItem: {
		padding: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		minWidth: 205,
		height: 126,
		backgroundColor: theme.colorPalette.background.secondary,
		boxSizing: 'border-box',
		'& .notes': {
			color: theme.colorPalette.text.textSecondary
		},
    [theme.breakpoints.down('md')]: {
      minWidth: 'auto'
    }
	},
	publishContent: {
		height: 500
	}
}))

function HomePage() {
	const classes = useStyles()

	const overview = {
		fans: {
			title: '粉丝数',
			total: 0,
			trend: 0
		},
		article: {
			title: '文章展现树',
			total: 0,
			trend: 0
		},
		read: {
			title: '文章阅读数',
			total: 0,
			trend: 0
		},
		praise: {
			title: '文章点赞数',
			total: 0,
			trend: 0
		},
		comment: {
			title: '文章评论数',
			total: 0,
			trend: 0
		},
		likes: {
			title: '文章收藏数',
			total: 0,
			trend: 0
		}
	}

	return (
		<div className={classes.root}>
			<div className={classes.header}>
				<div className="avatar">
					<Image
						src="https://p3-passport.byteimg.com/img/user-avatar/0209f0b93fb05db5cc4547ace239b0a3~180x180.awebp"
						alt="avatar"
						width={72}
						height={72}
					/>
				</div>
				<Box display="flex" flexDirection="column" justifyContent="space-between" className="info">
					<Typography component="p" fontWeight={700} variant="h5">
						smoixan
					</Typography>
					<Box className="data">
						<div className="data-item">
							<Typography>0</Typography>
							<Typography>粉丝</Typography>
						</div>
						<div className="data-item">
							<Typography>0</Typography>
							<Typography>关注</Typography>
						</div>
					</Box>
				</Box>
			</div>
			<div className={classes.card}>
				<div className="title">
					<Typography variant="h5" fontWeight={700}>
						数据概览
					</Typography>
				</div>
				<Box p={2}>
					<Grid container spacing={2}>
						{Object.keys(overview).map(item => (
							<Grid item key={item} xs={6} md={6} lg={4}>
								<div className={classes.contentItem}>
									<Typography className="notes">总粉丝数</Typography>
									<Typography variant="h3">0</Typography>
									<Typography className="notes">较昨日 --</Typography>
								</div>
							</Grid>
						))}
					</Grid>
				</Box>
			</div>
			<div className={classes.card}>
				<div className="title">
					<Typography variant="h5" fontWeight={700}>
						近期发布
					</Typography>
				</div>
				<div className={classes.publishContent}></div>
			</div>
		</div>
	)
}

HomePage.getLayout = (page: ReactNode) => <CretorLayout>{page}</CretorLayout>

export default HomePage
