import type { ReplyInfo } from 'containers/Article/types'
import {saveCommentLiked, saveReplyLiked as saveReplyLikedApi} from 'containers/Article/api'
import {useState} from "react";

const useReplyLiked = (replyInfo: ReplyInfo = {} as ReplyInfo) => {
  const [likedCount, setLikedCount] = useState(replyInfo.liked ?? 0)

	const saveReplyLiked = async () => {
    try {
      const { replyId, replyCommentId, articleId, replyUserId } = replyInfo
      const likedAction = replyId ? saveReplyLikedApi : saveCommentLiked
      const result = await likedAction({
        replyId,
        replyCommentId,
        articleId,
        replyUserId
      })
      setLikedCount(value => value + 1)
    } catch (err) {
      console.log(err);
    }
	}

	const cancelReplyLiked = () => {}

	return {
    likedCount,
		saveReplyLiked,
		cancelReplyLiked
	}
}

export default useReplyLiked
