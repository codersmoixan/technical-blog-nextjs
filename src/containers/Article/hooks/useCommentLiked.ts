import { saveCommentLiked } from 'containers/Article/api'
import type { ReplyInfo } from 'containers/Article/types'

const useCommentLiked = ({ articleId, commentId }: ReplyInfo) => {
	const saveLiked = async () => {
    if (!articleId || !commentId) {
      return
    }
		await saveCommentLiked({
			articleId,
			commentId
		})
	}

	return {
		saveLiked
	}
}

export default useCommentLiked
