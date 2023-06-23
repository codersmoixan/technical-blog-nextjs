import { GET, POST } from '@/src/service'
import type { PageParams } from '@/src/tb.types'
import type { GetReplyParams, SubmitCommentParams } from 'containers/Article/types'

export const getArticle = (id: string) => GET(`/article?id=${id}`)
export const getCommentList = (id: string, data: PageParams) => POST(`/article/comment/list?id=${id}`, data)
export const getReplyList = (data: GetReplyParams) => POST('/article/reply/list', data)
export const submitComment = (data: SubmitCommentParams) => POST('/article/comment/submit', data)
