import { ARTICLE_QUERY_KEY, useGetArticleCommentQuery, useSubmitCommentMutation } from 'containers/Article/queries'
import { useQueryClient } from '@tanstack/react-query'
import type { SubmitCommentParams } from 'containers/Article/types'

const useComment = (id: string) => {
	const queryClient = useQueryClient()
	const { data: comment, isLoading: getLoading } = useGetArticleCommentQuery(id, {
		page: 1,
		pageSize: 10
	})
	const { mutateAsync: submitComment, isLoading: submitLoading } = useSubmitCommentMutation()

	const submit = async (options: SubmitCommentParams) => {
		await submitComment(options)
		await queryClient.fetchQuery([ARTICLE_QUERY_KEY.GET_COMMENT])
	}

	return {
		comment: comment?.list ?? [],
		commentTotal: comment?.total ?? 0,
		getLoading,
		submit,
		submitLoading
	}
}

export default useComment
