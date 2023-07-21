import { createSlice } from '@reduxjs/toolkit'
import type { EmptyObject } from '@/src/tb.types'
import type { RootState } from '@/src/store'
import type { CommentInfo, ReplyInfo } from 'containers/Article/types'

type ArticleState = {
	article: EmptyObject
	replyLikedRecord: ReplyInfo['replyId'][]
	commentLikedRecord: CommentInfo['commentId'][]
}

const initialState: ArticleState = {
	article: {},
	replyLikedRecord: [],
	commentLikedRecord: []
}

const articlesSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {
		changeArticle(state, action) {
			state.article = action.payload
		},
    changeReplyLikedRecord(state, action) {
      state.replyLikedRecord = action.payload
    },
    changeCommentLikedRecord(state, action) {
      state.commentLikedRecord = action.payload
    }
	}
})

export const { changeArticle, changeCommentLikedRecord, changeReplyLikedRecord } = articlesSlice.actions

export const selectArticle = (state: RootState) => state.article.article
export const selectReplyLikedRecord = (state: RootState) => state.article.replyLikedRecord
export const selectCommentLikedRecord = (state: RootState) => state.article.commentLikedRecord

export default articlesSlice
