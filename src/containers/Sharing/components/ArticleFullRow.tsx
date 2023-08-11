import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import clsx from 'clsx'
import ViewIcon from 'components/Icons/ViewIcon'
import LikedIcon from 'components/Icons/LikedIcon'
import CommentIcon from 'components/Icons/CommentIcon'
import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'
import type { Article } from "../types"
import dayjs from "dayjs";

interface ArticleFullRowProps {
	article: Article,
  classes?: Partial<ReturnType<typeof useStyles>>
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(2, 0),
    margin: theme.spacing(0, 3),
		borderBottom: `1px solid ${theme.colorPalette.primary.secondary}`,
	},
	articleHead: {
		display: 'flex',
		margin: theme.spacing(0, -1.5)
	},
	author: {
		position: 'relative',
		padding: theme.spacing(0, 1.5),
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'&::after': {
			content: '"|"',
			position: 'absolute',
			right: 0,
			top: '50%',
			transform: 'translateY(-50%)',
			fontSize: 12,
			color: theme.colorPalette.text.secondary
		}
	},
	tags: {
		position: 'relative',
		display: 'flex',
		paddingLeft: theme.spacing(0.5),
		'&::after': {
			content: '"|"',
			position: 'absolute',
			left: 0,
			top: '50%',
			transform: 'translateY(-50%)',
			fontSize: 12,
			color: theme.colorPalette.text.secondary
		}
	},
	articleTag: {
		position: 'relative',
		padding: theme.spacing(0, 1),
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'&.tag:first-of-type::after': {
			display: 'none'
		},
		'&::after': {
			content: '""',
			position: 'absolute',
			top: '50%',
			left: 0,
			display: 'block',
			width: 2,
			height: 2,
			borderRadius: '50%',
			backgroundColor: theme.colorPalette.text.textSecondary
		}
	},
	name: {
		marginBottom: theme.spacing(1)
	},
	cover: {
		marginLeft: theme.spacing(2),
		width: 120,
		height: 80,
		backgroundColor: theme.colorPalette.primary.main,
		borderRadius: 4
	},
	data: {
		display: 'flex',
		alignItems: 'center',
		color: theme.colorPalette.text.secondary,
		'& .data-item': {
			display: 'flex',
			alignItems: 'center',
			marginRight: theme.spacing(3),
			fontSize: 12,
			'& svg': {
				marginRight: theme.spacing(0.5)
			},
		}
	}
}))

function ArticleFullRow({ article }: ArticleFullRowProps) {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<div className={classes.articleHead}>
				<div className={classes.author}>
					<Typography variant="body2" color="textSecondary">
						{article.author}
					</Typography>
				</div>
				<Box px={1} display="flex" justifyContent="center" alignItems="center">
					<Typography variant="body2" color="textSecondary">
						{dayjs(article.updatedAt).format('YYYY-MM-DD')}
					</Typography>
				</Box>
				<div className={classes.tags}>
					{article.tags.map(tag => (
						<div className={clsx(classes.articleTag, 'tag')} key={tag.tagId}>
							<Typography variant="body2" color="textSecondary">
								{tag.tagName}
							</Typography>
						</div>
					))}
				</div>
			</div>
			<Box display="flex" justifyContent="space-between" mt={1}>
				<Box mt={1} flex={1}>
					<Typography variant="subtitle1" fontWeight={700} className={classes.name}>
						{article.articleName}
					</Typography>
					<Typography variant="body2" color="textSecondary">
						{article.description}
					</Typography>
				</Box>
				<div className={classes.cover}></div>
			</Box>
			<div className={classes.data}>
				<div className="data-item">
					<ViewIcon />
					{article.views}
				</div>
				<div className="data-item">
					<LikedIcon />
					{article.liked}
				</div>
				<div className="data-item">
					<CommentIcon />
					{article.views}
				</div>
			</div>
		</div>
	)
}

export default ArticleFullRow
