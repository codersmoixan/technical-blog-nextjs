/**
 * @author zhengji.su
 * @description ReplyDetail
 */

import clsx from 'clsx'
import Typography from '@mui/material/Typography'
import LikedIcon from 'components/Icons/LikedIcon'
import CommentIcon from 'components/Icons/CommentIcon'
import FilledCommentIcon from 'components/Icons/FilledCommentIcon'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'
import type { UserInfo } from '@/src/tb.types'
import type { ReplyInfo } from 'containers/Article/types'
import If from 'components/Layout/If'
import { useState } from 'react'
import Buttons from 'components/Buttons'
import { ClickAwayListener } from '@mui/base'
import FormTextarea from 'components/Form/FormTextarea'
import Form from "core/Form";
import useForm from "core/Form/hooks/useForm";

interface ReplyDetailProps {
	userInfo: UserInfo
	replyInfo: ReplyInfo
	isShowAvatar?: boolean
	classes?: Partial<ReturnType<typeof useStyles>>
	className?: string
	onReply?: (data: any) => void
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
				height: 'auto',
				minWidth: 'auto',
				'&.active .data-item': {
					color: theme.colorPalette.primary.main
				}
			},
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
	},
  submit: {
    width: 92,
    height: 36,
    borderRadius: 4
  }
}))

function ReplyDetail({ userInfo, replyInfo, isShowAvatar, className, onReply, ...other }: ReplyDetailProps) {
	const classes = useStyles(other)
  const { observer, watch } = useForm()

	const [openReply, setOpenReply] = useState(false)

  const contentValue = watch('content')
	const isEmptyAvatar = !userInfo.avatar

	const handleToReply = () => {
		setOpenReply(!openReply)
		onReply?.(2)
	}

	const handleClickAway = () => {
		setOpenReply(false)
	}

  const handleSubmitReply = (options) => {
    console.log(options);
  }

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
					<Buttons className="btn">
						<Typography color="textSecondary" className="data-item">
							<LikedIcon />
							{replyInfo.liked ? replyInfo.liked : '点赞'}
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
							{openReply ? '取消回复' : replyInfo.replyCount ? replyInfo.replyCount : '回复'}
						</Typography>
					</Buttons>
				</div>
				<If factor={openReply}>
					<ClickAwayListener onClickAway={handleClickAway}>
						<Box mt={2}>
							<Form observer={observer} onFinish={handleSubmitReply}>
                <FormTextarea
                  name="content"
                  placeholder={`回复${userInfo.nickName}：`}
                  rows={2}
                  rules={{
                    required: true
                  }}
                />
                <Box mt={2} textAlign="right">
                  <Buttons
                    variant="contained"
                    type="submit"
                    className={classes.submit}
                    disabled={!contentValue}
                  >提交</Buttons>
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
