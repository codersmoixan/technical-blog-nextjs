import type {PageResult, UserInfo} from "@/src/tb.types"
import {Article} from "containers/Sharing/types";

export interface ArticleInfo extends Article {
  content: string
  authorInfo: UserInfo
}

export interface ArticleComment {
  commentInfo: {
    id: number
    createdAt: string
    articleId: string
    content: string
    commentId: string
    liked: number
    replyCount: number
    userId: string
  }
  userInfo: UserInfo
  replyInfos: ArticleReply[]
}
export interface ArticleCommentResult extends PageResult<ArticleComment>{}
export interface SubmitCommentParams {
  articleId: string
  content: string
}

export interface ReplyInfo {
  replyId: string
  articleId: string
  createdAt: string
  id: number
  content: string
  replyToReplyId: string
  replyToUserId: string
  replyUserId: string
  liked: number
  replyCount: number
  replyCommentId: string
  commentId?: string
}
export interface ArticleReply {
  isAuthor: boolean
  replyId: string
  replyInfo: ReplyInfo
  replyToUserInfo: UserInfo
  replyUserInfo: UserInfo
  parentReply?: ReplyInfo
}
export interface GetReplyParams {
  page: number
  pageSize: number
  articleId: string
  replyCommentId: string
}
export interface CommentReplyResult extends PageResult<any>{}
export interface SubmitReplyParams {
  articleId: string
  content: string
  replyCommentId: string
  replyToReplyId?: string
}
export interface CommentLikedParams {
  articleId: string
  commentId: string
}
export interface ReplyLikedParams {
  replyUserId: string
  articleId: string
  replyId: string
  replyCommentId: string
}
