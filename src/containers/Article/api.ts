import { GET, POST } from '@/src/service'
import type { PageParams } from '@/src/tb.types'
import type {
  GetReplyParams,
  SubmitCommentParams,
  SubmitReplyParams,
  ReplyLikedParams,
  CommentLikedParams,
  ArticleInfo
} from 'containers/Article/types'

export const getArticle = (id: ArticleInfo["articleId"]) => GET(`/article?id=${id}`)
export const getCommentList = (id: ArticleInfo["articleId"], data: PageParams) => POST(`/article/comment/list?id=${id}`, data)
export const submitComment = (data: SubmitCommentParams) => POST('/article/comment/submit', data)
export const saveCommentLiked = (data: CommentLikedParams) => POST('/article/comment/liked/save', data)
export const cancelCommentLiked = (data: CommentLikedParams) => POST('/article/comment/liked/cancel', data)
export const getCommentLikedRecord = (id: ArticleInfo["articleId"]) => GET(`/article/comment/liked/record?id=${id}`)
export const getReplyList = (data: GetReplyParams) => POST('/article/reply/list', data)
export const submitReply = (data: SubmitReplyParams) => POST('/article/reply/add', data)
export const saveReplyLiked = (data: ReplyLikedParams) => POST('/article/reply/liked/save', data)
export const cancelReplyLiked = (data: ReplyLikedParams) => POST('/article/reply/liked/cancel', data)
export const getReplyLikedRecord = (id: ArticleInfo["articleId"]) => GET(`/article/reply/liked/record?id=${id}`)
