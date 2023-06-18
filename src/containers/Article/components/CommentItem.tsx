/**
 * @author zhengji.su
 * @description CommentItem
 */

import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
import type { ArticleComment, ReplyInfo } from 'containers/Article/types'
import isEmpty from 'lodash/isEmpty'
import ReplyDetail from 'containers/Article/components/ReplyDetail'
import clsx from 'clsx'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import If from 'components/Layout/If'

interface CommentItemProps {
	comment: ArticleComment
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		margin: theme.spacing(4, 0)
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
	reply: {
		marginTop: theme.spacing(2),
		padding: theme.spacing(2),
		borderRadius: 4,
		backgroundColor: '#f7f8fb'
	},
	replyAvatar: {
		width: 30,
		height: 30
	},
	detail: {
    marginTop: theme.spacing(2),
    '&.first': {
      marginTop: 0
    }
  }
}))

function CommentItem({ comment, ...other }: CommentItemProps) {
	const classes = useStyles(other)
	const { commentInfo, userInfo, replyInfos } = (comment ?? {}) as ArticleComment

	if (isEmpty(comment)) {
		return null
	}

	const isEmptyAvatar = !userInfo.avatar

  console.log(comment);

  return (
		<div className={classes.root}>
			<Box display="flex">
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
				<Box flex={1}>
					<ReplyDetail userInfo={userInfo} replyInfo={commentInfo as any as ReplyInfo} />
					<If factor={!isEmpty(replyInfos)}>
						<div className={classes.reply}>
							{replyInfos.map((reply, index) => (
								<ReplyDetail
									key={reply.replyId}
									userInfo={reply.replyUserInfo}
									replyInfo={reply.replyInfo}
									isShowAvatar
									classes={{ avatar: classes.replyAvatar }}
                  className={clsx(classes.detail, {
                    first: index === 0
                  })}
								/>
							))}
						</div>
					</If>
				</Box>
			</Box>
		</div>
	)
}

export default CommentItem
