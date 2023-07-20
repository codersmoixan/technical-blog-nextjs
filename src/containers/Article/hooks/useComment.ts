import { ARTICLE_QUERY_KEY, useGetArticleCommentQuery, useSubmitCommentMutation } from 'containers/Article/queries'
import { useQueryClient } from '@tanstack/react-query'
import type { SubmitCommentParams } from 'containers/Article/types'
import { useEffect, useState } from 'react'
import isEmpty from 'lodash/isEmpty'
import type { ArticleComment } from 'containers/Article/types'

const useComment = (articleId: string) => {
	const queryClient = useQueryClient()
	const { mutateAsync: submitComment, isLoading: submitLoading } = useSubmitCommentMutation()

	const [pageParam, setPageParam] = useState({
		page: 1,
		pageSize: 20
	})
	const [comment, setComment] = useState<ArticleComment[]>([])
	const [fetchMoreType, setFetchMoreType] = useState<'auto' | 'manual'>('manual')

	const { data: commentData, isLoading: getLoading } = useGetArticleCommentQuery(articleId, pageParam)

	useEffect(() => {
		if (!isEmpty(commentData) && !isEmpty(commentData?.list)) {
			setComment(value => value.concat(commentData.list))
		}
	}, [commentData])

	const submit = async (options: SubmitCommentParams) => {
		await submitComment(options)
		await queryClient.fetchQuery([ARTICLE_QUERY_KEY.GET_COMMENT])
	}

	return {
		comment,
		commentTotal: commentData?.total ?? 0,
		getLoading,
		fetchMoreType,
		submitLoading,
		submit,
		setPageParam,
		setFetchMoreType
	}
}

export default useComment
