import { ARTICLE_QUERY_KEY, useGetReplyListMutation, useSubmitReplyMutation } from 'containers/Article/queries'
import type {SubmitReplyParams, ArticleReply, ArticleComment} from 'containers/Article/types'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import useDeepCompareEffect from 'hooks/effect/useDeepCompareEffect'
import isEmpty from 'lodash/isEmpty'
import type { EmptyObject } from '@/src/tb.types'

interface UseReplyProps extends EmptyObject {
	reply: ArticleReply[]
	articleId: string
	replyCommentId: string
}

const useReply = ({ replyInfos: reply, commentInfo }: ArticleComment = {} as ArticleComment) => {
	const queryClient = useQueryClient()
	const { mutateAsync: getList } = useGetReplyListMutation()
	const { mutateAsync: submitReply, isLoading: submitLoading } = useSubmitReplyMutation()

	const [page, setPage] = useState(1)
	const [replyList, setReplyList] = useState<ArticleReply | any>([])

	useDeepCompareEffect(() => {
		if (!isEmpty(reply)) {
			setReplyList(reply)
		}
	}, [])

	const getReplyList = async () => {
    if (isEmpty(commentInfo)) {
      return
    }

		const result = await getList({
			page,
			pageSize: 10,
      articleId: commentInfo.articleId,
      replyCommentId: commentInfo.commentId,
		})
		setReplyList((value: ArticleReply[]) => (page === 1 ? result.list : [...value, ...result.list]))
	}

  const getPageReplyList = async () => {
    await getReplyList()
    setPage(page + 1)
  }

	const submit = async (options: SubmitReplyParams) => {
		const result = await submitReply(options)

		await queryClient.fetchQuery([ARTICLE_QUERY_KEY.GET_COMMENT])
    await getReplyList()

		return result
	}

	return {
		replyList: replyList as ArticleReply[],
		submitLoading,
		getReplyList,
    getPageReplyList,
		submit
	}
}

export default useReply
