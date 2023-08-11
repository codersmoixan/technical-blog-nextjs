import useQuery from 'hooks/query/useQuery'
import {
	getArticle,
	getCommentLikedRecord,
	getCommentList,
	getReplyLikedRecord,
	getReplyList,
	submitComment,
	submitReply
} from 'containers/Article/api'
import { PageParams } from '@/src/tb.types'
import type {
	ArticleComment,
	ArticleCommentResult,
	ArticleInfo,
	CommentReplyResult,
	GetReplyParams,
	SubmitCommentParams,
	SubmitReplyParams
} from 'containers/Article/types'
import useMutation from 'hooks/query/useMutation'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import { changeCommentLikedRecord, changeReplyLikedRecord } from 'containers/Article/slice'

export enum ARTICLE_QUERY_KEY {
	GET = 'article.get',
	GET_COMMENT = 'article.getComment',
	GET_COMMENT_LIKED_RECORD = 'article.getCommentLikedRecord',
	SUBMIT_COMMENT = 'article.submit.comment',
	GET_REPLY = 'article.getReply',
	GET_REPLY_LIKED_RECORD = 'article.getReplyLikedRecord',
	SUBMIT_REPLY = 'article.submit.reply'
}

export const useGetArticleQuery = <TData extends object>(id: ArticleInfo['articleId']) => {
	const { data, ...other } = useQuery({
		queryKey: [ARTICLE_QUERY_KEY.GET],
		queryFn: () => getArticle(id)
	})

	return {
		article: data as TData,
		...other
	}
}

export const useGetArticleCommentQuery = (id: ArticleInfo['articleId'], pageParams: PageParams) =>
	useQuery<ArticleCommentResult>({
		queryKey: [ARTICLE_QUERY_KEY.GET_COMMENT, pageParams.page],
		queryFn: () => getCommentList(id, pageParams)
	})

export const useGetCommentLikedRecordQuery = (id: ArticleInfo['articleId']) => {
	const dispatch = useDispatch()
	const { data, ...other } = useQuery({
		queryKey: [ARTICLE_QUERY_KEY.GET_COMMENT_LIKED_RECORD, id],
		queryFn: () => getCommentLikedRecord(id)
	})

	useEffect(() => {
		if (!isEmpty(data)) {
			dispatch(changeCommentLikedRecord(data))
		}
	}, [data])

	return { data, ...other }
}

export const useGetReplyLikedRecordQuery = (id: ArticleInfo['articleId']) => {
	const dispatch = useDispatch()
	const { data, ...other } = useQuery({
		queryKey: [ARTICLE_QUERY_KEY.GET_REPLY_LIKED_RECORD, id],
		queryFn: () => getReplyLikedRecord(id)
	})

	useEffect(() => {
		if (!isEmpty(data)) {
			dispatch(changeReplyLikedRecord(data))
		}
	}, [data])

	return { data, ...other }
}

export const useSubmitCommentMutation = () =>
	useMutation<SubmitCommentParams, ArticleCommentResult>({
		mutationKey: [ARTICLE_QUERY_KEY.SUBMIT_COMMENT],
		mutationFn: data => submitComment(data)
	})

export const useGetReplyListMutation = () =>
	useMutation<GetReplyParams, CommentReplyResult>({
		mutationKey: [ARTICLE_QUERY_KEY.GET_REPLY],
		mutationFn: data => getReplyList(data)
	})

export const useSubmitReplyMutation = () =>
	useMutation<SubmitReplyParams, CommentReplyResult>({
		mutationKey: [ARTICLE_QUERY_KEY.SUBMIT_REPLY],
		mutationFn: data => submitReply(data)
	})
