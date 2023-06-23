import type {PageResult, UserInfo} from "@/src/tb.types"
import {Article} from "containers/Sharing/types";

export interface ReplyInfo {
  replyId: string
  createdAt: string
  id: number
  replyCommentId: string
  content: string
  replyToReplyId: string
  replyToUserId: string
  replyUserId: string
  liked: number
  replyCount: number
}

export interface ArticleReply {
  replyId: string
  replyInfo: ReplyInfo
  replyToUserInfo: UserInfo
  replyUserInfo: UserInfo
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

export interface ArticleInfo extends Article {
  content: string
}

export interface GetReplyParams {
  page: number
  pageSize: number
  articleId: string
  replyCommentId: string
}
export interface CommentReplyResult extends PageResult<any>{}
