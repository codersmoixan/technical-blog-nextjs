import type { EmptyObject } from '@/src/tb.types'

export interface AddSharingParam {
  articleName: string;
  description: string;
  content: string;
  tags: string[];
  category: string;
  articleCoverUrl: string;
  articleCoverKey: string;
}

export interface Article {
  tags: {
    tagId: string
    tagName: string
  }[]
  articleName: string
  articleCoverKey: string
  articleCoverUrl: string
  author: string
  category: string
  description: string
  favors: number
  id: number
  articleId: string
  shares: number
  status: number
  views: number
  liked: number
  updatedAt: string
}

export interface ShareResult {
  list: Article[]
  page: number
  pageSize: number
  total: number
}
