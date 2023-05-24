import type { EmptyObject } from '@/src/tb.types'

export interface AddSharingParam {
  name: string;
  description: string;
  content: string;
  tag: string;
  category: string;
  blogImage: string;
}

export interface ArticleOption extends EmptyObject {
  id: string | number;
  name: string;
  description: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  view: number;
  liked: number;
  comment: number;
  cover?: string;
}
