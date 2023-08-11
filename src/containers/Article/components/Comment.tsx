/**
 * @author zhengji.su
 * @description Comment
 */

import type { ArticleComment, ArticleInfo } from 'containers/Article/types'
import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'
import CommentItem from 'containers/Article/components/CommentItem'
import { useGetCommentLikedRecordQuery, useGetReplyLikedRecordQuery } from 'containers/Article/queries'

const useStyles = makeStyles((theme: Theme) => ({
	root: {}
}))

interface CommentProps {
	list: ArticleComment[]
	articleId: ArticleInfo['articleId']
}

function Comment({ list = [], articleId, ...other }: CommentProps) {
	const classes = useStyles(other)
	useGetCommentLikedRecordQuery(articleId)
	useGetReplyLikedRecordQuery(articleId)

  return (
		<div className={classes.root}>
			{list.map(comment => (
				<CommentItem key={comment.commentInfo.id} comment={comment} />
			))}
		</div>
	)
}

export default Comment
