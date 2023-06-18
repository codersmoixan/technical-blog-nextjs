import {useAddShareMutation, useGetShareListQuery} from "containers/Sharing/queries";
import useNotifier from "core/Snackbar/hooks/useNotifier";
import type { AddSharingParam, Article } from "containers/Sharing/types";
import type { PageParams } from "@/src/tb.types";

export interface UseSharingProps extends PageParams {}

export interface UseSharingReturn {
  articles: Article[]
  loading: boolean
  addSharing: (data: AddSharingParam) => void
}

const useSharing = (props?: UseSharingProps): UseSharingReturn => {
  const { page = 1, pageSize = 10 } = props ?? {}

  const notify = useNotifier()
  const { data: articles, isLoading } = useGetShareListQuery({
    page,
    pageSize
  })
  const { mutateAsync: add, isLoading: addLoading } = useAddShareMutation()

  const addSharing = async (data: AddSharingParam) => {
    const result = await add(data)

    notify(result.msg)
    return true
  }

  return {
    articles: (articles?.list ?? []) as Article[],
    loading: isLoading || addLoading,
    addSharing
  }
}

export default useSharing
