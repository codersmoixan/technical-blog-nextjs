/**
 * @author zhengji.su
 * @description ReplyDetail
 */

import clsx from 'clsx'
import Typography from '@mui/material/Typography'
import LikedIcon from 'components/Icons/LikedIcon'
import LikedActiveIcon from 'components/Icons/LikedActiveIcon'
import CommentIcon from 'components/Icons/CommentIcon'
import FilledCommentIcon from 'components/Icons/FilledCommentIcon'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'
import type { UserInfo } from '@/src/tb.types'
import type { CommentReplyResult, ReplyInfo } from 'containers/Article/types'
import If from 'components/Layout/If'
import { useState } from 'react'
import Buttons from 'components/Buttons'
import { ClickAwayListener } from '@mui/base'
import FormTextarea from 'components/Form/FormTextarea'
import Form from 'core/Form'
import useForm from 'core/Form/hooks/useForm'
import useReply from 'containers/Article/hooks/useReply'
import { useSelector } from 'react-redux'
import { selectOpenLogin } from 'containers/App/slice'
import isEmpty from 'lodash/isEmpty'
import useReplyLiked from 'containers/Article/hooks/useReplyLiked'
import useCommentLiked from 'containers/Article/hooks/useCommentLiked'

export interface SubmitAfterEvent {
	result: CommentReplyResult
	type?: 'comment' | 'reply'
}

interface ReplyDetailProps {
	userInfo: UserInfo
	replyInfo: ReplyInfo
	parentReply?: ReplyInfo
	replyToUserInfo?: UserInfo
	isShowAvatar?: boolean
	classes?: Partial<ReturnType<typeof useStyles>>
	className?: string
	type?: 'comment' | 'reply'
	replyCount?: number
	isAuthor?: boolean
	onSubmitAfter?: (data: SubmitAfterEvent) => void
	onLiked?: (replyInfo: ReplyInfo) => void
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'flex'
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
		flex: 1,
		'& .content': {
			marginTop: theme.spacing(1)
		},
		'& .data': {
			display: 'flex',
			marginTop: theme.spacing(1),
			'& .btn': {
				padding: 0,
				marginRight: theme.spacing(3),
				height: 'auto',
				minWidth: 'auto',
				'&.active .data-item': {
					color: theme.colorPalette.primary.main
				}
			},
			'& .data-item': {
				display: 'flex',
				alignItems: 'center',
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
	},
	nickname: {
		display: 'flex'
	},
	parentNickname: {
		display: 'flex'
	},
	parentReply: {
		marginTop: theme.spacing(1),
		padding: theme.spacing(1),
		border: `1px solid ${theme.colorPalette.primary.secondary}`,
		borderRadius: 4,
		backgroundColor: theme.colorPalette.primary.colorSecondary
	},
	submit: {
		width: 92,
		height: 36,
		borderRadius: 4
	}
}))

function ReplyDetail(
	{
		isAuthor,
		userInfo,
		replyInfo,
		parentReply,
		replyToUserInfo,
		isShowAvatar,
		className,
		onSubmitAfter,
		type,
		replyCount,
		onLiked,
		...other
	}: ReplyDetailProps = {} as ReplyDetailProps
) {
	const isOpenDialog = useSelector(selectOpenLogin)
	const classes = useStyles(other)
	const { observer, watch, clearValues } = useForm()
	const { submit: submitReply, submitLoading } = useReply()
	const { likedCount, saveLiked: saveReplyLiked } = useReplyLiked(replyInfo)
	const { isLiked, saveLiked: saveCommentLiked } = useCommentLiked(replyInfo)

	const [openReply, setOpenReply] = useState(false)

	const contentValue = watch('content')
	const isEmptyAvatar = !userInfo?.avatar

	const handleToReply = () => {
		setOpenReply(!openReply)
	}

	const handleClickAway = () => {
		if (isOpenDialog) {
			return
		}
		setOpenReply(false)
	}

	const handleSubmit = async (options: any) => {
		const result = await submitReply({
			articleId: replyInfo.articleId,
			replyCommentId: replyInfo.replyCommentId ?? replyInfo.commentId,
			content: options.content,
			...(type === 'reply'
				? {
						replyToReplyId: replyInfo.replyId,
						replyToUserId: userInfo.userId
				  }
				: {})
		})
		clearValues('content')
		setOpenReply(false)
		onSubmitAfter?.({
			result,
			type
		})
	}

  const handleLiked = () => type === 'reply' ? saveReplyLiked() : saveCommentLiked()

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
							{userInfo?.nickName?.[0]}
						</Typography>
					) : null}
				</div>
			</If>
			<div className={classes.content}>
				<div className={classes.nickname}>
					<Box display="flex">
						<Typography fontWeight={500}>{userInfo?.nickName}</Typography>
						<If factor={!!isAuthor}>
							<Typography ml={1} color="textSecondary">
								(作者)
							</Typography>
						</If>
					</Box>
					<If factor={!isEmpty(replyToUserInfo)}>
						<div className={classes.parentNickname}>
							<Typography color="textSecondary" mx={1}>
								回复
							</Typography>
							<Typography fontWeight={500}>{replyToUserInfo?.nickName}</Typography>
						</div>
					</If>
				</div>
				<div className="content">
					<Typography>{replyInfo?.content}</Typography>
				</div>
				<If factor={!isEmpty(parentReply)}>
					<div className={classes.parentReply}>
						<Typography color="textSecondary">&#34;{parentReply?.content}&#34;</Typography>
					</div>
				</If>
				<div className="data">
					<Buttons className="btn" onClick={handleLiked}>
						<Typography color={isLiked ? 'primary' : 'textSecondary'} className="data-item">
							{isLiked ? <LikedActiveIcon /> : <LikedIcon />}
							{likedCount || '点赞'}
						</Typography>
					</Buttons>
					<Buttons
						className={clsx('btn', {
							active: openReply
						})}
						onClick={handleToReply}
					>
						<Typography color="textSecondary" className="data-item">
							{openReply ? <FilledCommentIcon /> : <CommentIcon />}
							{openReply ? '取消回复' : replyCount || '回复'}
						</Typography>
					</Buttons>
				</div>
				<If factor={openReply}>
					<ClickAwayListener onClickAway={handleClickAway}>
						<Box mt={2}>
							<Form observer={observer} onFinish={handleSubmit}>
								<FormTextarea
									name="content"
									placeholder={`回复${userInfo?.nickName}：`}
									rows={2}
									rules={{
										required: true
									}}
								/>
								<Box mt={2} textAlign="right">
									<Buttons variant="contained" type="submit" className={classes.submit} disabled={!contentValue} loading={submitLoading}>
										提交
									</Buttons>
								</Box>
							</Form>
						</Box>
					</ClickAwayListener>
				</If>
			</div>
		</div>
	)
}

export default ReplyDetail
