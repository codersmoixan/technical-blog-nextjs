import { saveCommentLiked, cancelCommentLiked } from 'containers/Article/api'
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

  const cancelLiked = async () => {
    if (!articleId || !commentId) {
      return
    }
    await cancelCommentLiked({
      articleId,
      commentId
    })
  }

	return {
		saveLiked,
    cancelLiked
	}
}

export default useCommentLiked
