import {useGetArticleComment} from "containers/Article/queries";

const useComment = (id: string) => {
  const {data: comment} = useGetArticleComment(id, {
    page: 1,
    pageSize: 10
  })

  return {
    comment: comment?.list ?? [],
    commentTotal: comment?.total ?? 0
  }
}

export default useComment
