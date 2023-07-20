import { saveCommentLiked } from 'containers/Article/api'
import type { ReplyInfo } from 'containers/Article/types'
import {useState} from "react";

const useCommentLiked = ({ articleId, commentId }: ReplyInfo) => {
  const [isLiked, setIsLiked] = useState(true)

	const saveLiked = async () => {
    if (!articleId || !commentId) {
      return
    }
		const result = await saveCommentLiked({
			articleId,
			commentId
		})

    setIsLiked(true)
	}

	return {
    isLiked,
		saveLiked
	}
}

export default useCommentLiked
