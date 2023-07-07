import { useGetReplyListMutation, useSubmitReplyMutation } from 'containers/Article/queries'
import type { SubmitReplyParams, ArticleReply, ArticleComment } from 'containers/Article/types'
import { useState } from 'react'
import useDeepCompareEffect from 'hooks/effect/useDeepCompareEffect'
import isEmpty from 'lodash/isEmpty'

interface UseReplyProps extends ArticleComment {}

const useReply = ({ replyInfos: reply, commentInfo }: UseReplyProps = {} as UseReplyProps) => {
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
			replyCommentId: commentInfo.commentId
		})
		setReplyList((value: ArticleReply[]) => (page === 1 ? result.list : [...value, ...result.list]))

    return result
	}

	const getPageReplyList = async () => {
		const result = await getReplyList()
    if (isEmpty(result)) {
      return
    }
    const { page: resPage, pageSize, total } = result
    if (resPage * pageSize < total) {
      setPage(resPage + 1)
    }
  }

	const submit = async (options: SubmitReplyParams) => {
		const result = await submitReply(options)

		return result
	}

	return {
		replyList: replyList as ArticleReply[],
		submitLoading,
		setReplyList,
		getReplyList,
		getPageReplyList,
		submit
	}
}

export default useReply
