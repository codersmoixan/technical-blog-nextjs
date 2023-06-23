import useQuery from 'hooks/query/useQuery'
import { getArticle, getCommentList, getReplyList, submitComment } from 'containers/Article/api'
import { PageParams } from '@/src/tb.types'
import {ArticleCommentResult, CommentReplyResult, GetReplyParams, SubmitCommentParams} from 'containers/Article/types'
import useMutation from 'hooks/query/useMutation'

export enum ARTICLE_QUERY_KEY {
	GET = 'article.get',
	GET_COMMENT = 'article.getComment',
	SUBMIT_COMMENT = 'article.submit.comment',
	GET_REPLY = 'article.getReply'
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

export const useGetReplyListMutation = () =>
	useMutation<GetReplyParams, CommentReplyResult>({
		mutationKey: [ARTICLE_QUERY_KEY.GET_REPLY],
		mutationFn: data => getReplyList(data)
	})

export const useSubmitCommentMutation = () =>
	useMutation<SubmitCommentParams>({
		mutationKey: [ARTICLE_QUERY_KEY.SUBMIT_COMMENT],
		mutationFn: data => submitComment(data)
	})
