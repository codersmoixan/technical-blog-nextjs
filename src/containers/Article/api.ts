import { GET, POST } from '@/src/service'
import type { PageParams } from '@/src/tb.types'
import type { GetReplyParams, SubmitCommentParams, SubmitReplyParams, ReplyLikedParams, CommentLikedParams } from 'containers/Article/types'

export const getArticle = (id: string) => GET(`/article?id=${id}`)
export const getCommentList = (id: string, data: PageParams) => POST(`/article/comment/list?id=${id}`, data)
export const submitComment = (data: SubmitCommentParams) => POST('/article/comment/submit', data)
export const saveCommentLiked = (data: CommentLikedParams) => POST('/article/comment/liked/save', data)
export const getReplyList = (data: GetReplyParams) => POST('/article/reply/list', data)
export const submitReply = (data: SubmitReplyParams) => POST('/article/reply/add', data)
export const saveReplyLiked = (data: ReplyLikedParams) => POST('/article/reply/liked/save', data)
