import useQuery from "hooks/query/useQuery";
import { addTagApi, deleteTagApi, getTagListApi, updateTagApi } from "containers/Tag/api";
import useMutation from "hooks/query/useMutation";

export enum TAG_QUERY_KEY {
  GET = 'tag.get',
  ADD = 'tag.add',
  UPDATE = 'tag.update',
  DELETE = 'tag.delete'
}

export const useGetTagListQuery = () => useQuery({
  queryKey: [TAG_QUERY_KEY.GET],
  queryFn: () => getTagListApi()
})

export const useAddTagMutation = () => useMutation<any>({
  mutationKey: [TAG_QUERY_KEY.ADD],
  mutationFn: (data) => addTagApi(data)
})

export const useUpdateTagMutation = () => useMutation<any>({
  mutationKey: [TAG_QUERY_KEY.UPDATE],
  mutationFn: (data) => updateTagApi(data)
})

export const useDeleteTagMutation = () => useMutation<any>({
  mutationKey: [TAG_QUERY_KEY.DELETE],
  mutationFn: (data) => deleteTagApi(data)
})
