import type { ReplyInfo } from 'containers/Article/types'
import { saveReplyLiked as saveReplyLikedApi } from 'containers/Article/api'

const useReplyLiked = (replyInfo: ReplyInfo = {} as ReplyInfo) => {
	const saveLiked = async () => {
		try {
			const { replyId, replyCommentId, articleId, replyUserId } = replyInfo
			await saveReplyLikedApi({
				replyId,
				replyCommentId,
				articleId,
				replyUserId
			})
		} catch (err) {
			console.log(err)
		}
	}

	const cancelReplyLiked = () => {}

	return {
		saveLiked,
		cancelReplyLiked
	}
}

export default useReplyLiked
