import useQuery from 'hooks/query/useQuery'
import { getArticle, getCommentList } from 'containers/Article/api'
import {PageParams} from "@/src/tb.types";
import {ArticleCommentResult} from "containers/Article/types";

export enum ARTICLE_QUERY_KEY {
	GET = 'article.get',
  GET_COMMENT = 'article.getComment'
}

export const useGetArticleQuery = <TData extends object>(id: string) => {
	const { data, ...other } = useQuery({
		queryKey: [ARTICLE_QUERY_KEY.GET],
		queryFn: () => getArticle(id)
	})

	return {
		article: data as TData,
		...other
	}
}

export const useGetArticleComment = (id: string, data: PageParams) => useQuery<ArticleCommentResult>({
  queryKey: [ARTICLE_QUERY_KEY.GET_COMMENT],
  queryFn: () => getCommentList(id, data)
})
