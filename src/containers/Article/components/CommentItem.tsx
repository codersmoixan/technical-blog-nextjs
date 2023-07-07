/**
 * @author zhengji.su
 * @description CommentItem
 */

import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
import type { ArticleComment, ReplyInfo } from 'containers/Article/types'
import isEmpty from 'lodash/isEmpty'
import ReplyDetail, { SubmitAfterEvent } from 'containers/Article/components/ReplyDetail'
import clsx from 'clsx'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import If from 'components/Layout/If'
import Buttons from 'components/Buttons'
import { KeyboardArrowDown } from '@mui/icons-material'
import useReply from 'containers/Article/hooks/useReply'
import { ArticleReply } from 'containers/Article/types'
import { useState } from 'react'
import useDeepCompareEffect from 'hooks/effect/useDeepCompareEffect'

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
	const { getPageReplyList, setReplyList, replyList } = useReply(comment)

	const [replyCount, setReplyCount] = useState(0)

	const { commentInfo, userInfo } = (comment ?? {}) as ArticleComment

	useDeepCompareEffect(() => {
		if (!isEmpty(commentInfo)) {
			setReplyCount(commentInfo.replyCount)
		}
	}, [commentInfo])

	if (isEmpty(comment)) {
		return null
	}

	const isEmptyAvatar = !userInfo.avatar

	const handleSubmit = async ({ result }: SubmitAfterEvent) => {
		setReplyList((value: ArticleReply[]) => [...value, result])
    setReplyCount(value => value + 1)
	}

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
					<ReplyDetail
						type="comment"
						userInfo={userInfo}
						replyInfo={commentInfo as any as ReplyInfo}
						onSubmitAfter={handleSubmit}
						replyCount={replyCount}
					/>
					<If factor={!isEmpty(replyList)}>
						<div className={classes.reply}>
							{replyList.map((reply, index) => (
								<ReplyDetail
									key={reply.replyId}
									userInfo={reply.replyUserInfo}
									replyInfo={reply.replyInfo}
									parentReply={reply.parentReply}
									replyToUserInfo={reply.replyToUserInfo}
									isShowAvatar
									classes={{ avatar: classes.replyAvatar }}
									className={clsx(classes.detail, {
										first: index === 0
									})}
									onSubmitAfter={handleSubmit}
									type="reply"
                  isAuthor={reply.isAuthor}
								/>
							))}
							<If factor={commentInfo.replyCount > 2 && replyList.length < commentInfo.replyCount}>
								<Box mt={2}>
									<Buttons space={false} onClick={getPageReplyList}>
										<Typography color="inherit">查看更多回复</Typography>
										<KeyboardArrowDown width={12} height={12} />
									</Buttons>
								</Box>
							</If>
						</div>
					</If>
				</Box>
			</Box>
		</div>
	)
}

export default CommentItem
