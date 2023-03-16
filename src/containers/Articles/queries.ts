import useQuery from 'hooks/query/useQuery'
import { getArticle } from 'containers/Articles/api'

export enum ARTICLE_QUERY_KEY {
	GET = 'article.get'
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
