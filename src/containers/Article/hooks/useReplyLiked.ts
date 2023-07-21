import type { ReplyInfo } from 'containers/Article/types'
import { saveReplyLiked, cancelReplyLiked } from 'containers/Article/api'

const useReplyLiked = (replyInfo: ReplyInfo = {} as ReplyInfo) => {
	const saveLiked = async () => {
		try {
			const { replyId, replyCommentId, articleId, replyUserId } = replyInfo
			await saveReplyLiked({
				replyId,
				replyCommentId,
				articleId,
				replyUserId
			})
		} catch (err) {
			console.log(err)
		}
	}

	const cancelLiked = async () => {
    const { replyId, replyCommentId, articleId, replyUserId } = replyInfo
    await cancelReplyLiked({
      replyId,
      replyCommentId,
      articleId,
      replyUserId
    })
  }

	return {
		saveLiked,
    cancelLiked
	}
}

export default useReplyLiked
