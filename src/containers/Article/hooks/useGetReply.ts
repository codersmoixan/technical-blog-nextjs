import {useGetReplyListMutation} from "containers/Article/queries";

const useGetReply = () => {
  const { mutateAsync: getReplyList } = useGetReplyListMutation()

  return {
    getReplyList
  }
}

export default useGetReply
