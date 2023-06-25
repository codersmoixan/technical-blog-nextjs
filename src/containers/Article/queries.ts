import useQuery from 'hooks/query/useQuery'
import { getArticle, getCommentList, getReplyList, submitComment, submitReply } from 'containers/Article/api'
import { PageParams } from '@/src/tb.types'
import type {
	ArticleCommentResult,
	CommentReplyResult,
	GetReplyParams,
	SubmitCommentParams,
	SubmitReplyParams
} from 'containers/Article/types'
import useMutation from 'hooks/query/useMutation'

export enum ARTICLE_QUERY_KEY {
	GET = 'article.get',
	GET_COMMENT = 'article.getComment',
	SUBMIT_COMMENT = 'article.submit.comment',
	GET_REPLY = 'article.getReply',
	SUBMIT_REPLY = 'article.submit.reply'
}

export const useGetArticleQuery = <TData extends object>(id: string) => {
	const { data, ...other } = useQuery({
		queryKey: [ARTICLE_QUERY_KEY.GET],
		queryFn: () => getArticle(id)
	})

	return {
		article: data as TData,
		...other
	}
}

export const useGetArticleCommentQuery = (id: string, data: PageParams) =>
	useQuery<ArticleCommentResult>({
		queryKey: [ARTICLE_QUERY_KEY.GET_COMMENT],
		queryFn: () => getCommentList(id, data)
	})

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
