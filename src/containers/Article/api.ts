import { GET, POST } from '@/src/service'
import {PageParams} from "@/src/tb.types";

export const getArticle = (id: string) => GET(`/article?id=${id}`)
export const getCommentList = (id: string, data: PageParams) => POST(`/article/comment/list?id=${id}`, data)
