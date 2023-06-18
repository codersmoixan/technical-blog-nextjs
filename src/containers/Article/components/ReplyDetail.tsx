/**
 * @author zhengji.su
 * @description ReplyDetail
 */

import clsx from 'clsx'
import Typography from '@mui/material/Typography'
import LikedIcon from 'components/Icons/LikedIcon'
import CommentIcon from 'components/Icons/CommentIcon'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'
import type { UserInfo } from '@/src/tb.types'
import type { ReplyInfo } from 'containers/Article/types'
import If from 'components/Layout/If'

interface ReplyDetailProps {
	userInfo: UserInfo
	replyInfo: ReplyInfo
	isShowAvatar?: boolean
  classes?: Partial<ReturnType<typeof useStyles>>
  className?: string
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
	avatar: {
		...theme.styles.verticalCenter,
		marginRight: theme.spacing(2),
		width: 40,
		height: 40,
		borderRadius: '50%',
		color: theme.colorPalette.primary.default
	},
	defaultAvatar: {
		backgroundColor: theme.colorPalette.primary.main
	},
	content: {
		'& .content': {
			marginTop: theme.spacing(1)
		},
		'& .data': {
			display: 'flex',
			marginTop: theme.spacing(1),
			'& .data-item': {
				display: 'flex',
				alignItems: 'center',
				marginRight: theme.spacing(3),
				fontSize: 12,
				cursor: 'pointer',
				'&:hover': {
					color: theme.colorPalette.primary.main
				},
				'& svg': {
					marginRight: theme.spacing(0.5)
				}
			}
		}
	}
}))

function ReplyDetail({ userInfo, replyInfo, isShowAvatar, className, ...other }: ReplyDetailProps) {
	const classes = useStyles(other)

	const isEmptyAvatar = !userInfo.avatar

	return (
		<div className={clsx(className, classes.root)}>
			<If factor={!!isShowAvatar}>
				<div
					className={clsx(classes.avatar, {
						[classes.defaultAvatar]: isEmptyAvatar
					})}
				>
					{isEmptyAvatar ? (
						<Typography fontWeight={700} color="inherit">
							{userInfo.nickName?.[0]}
						</Typography>
					) : null}
				</div>
			</If>
			<div className={classes.content}>
				<div className="nick-name">
					<Typography fontWeight={500}>{userInfo.nickName}</Typography>
				</div>
				<div className="content">
					<Typography>{replyInfo.content}</Typography>
				</div>
				<div className="data">
					<Typography color="textSecondary" className="data-item">
						<LikedIcon />
						{replyInfo.liked ? replyInfo.liked : '点赞'}
					</Typography>
					<Typography color="textSecondary" className="data-item">
						<CommentIcon />
						{replyInfo.replyCount ? replyInfo.replyCount : '回复'}
					</Typography>
				</div>
			</div>
		</div>
	)
}

export default ReplyDetail
