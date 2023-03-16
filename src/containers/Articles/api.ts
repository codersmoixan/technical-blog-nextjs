import { GET } from '@/src/service'

export const getArticle = (id: string) => GET(`/blog/${id}`)
