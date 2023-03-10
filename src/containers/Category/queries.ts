import useQuery from "hooks/query/useQuery";
import {
  addCategoryApi,
  deleteCategoryApi,
  getCategoryApi,
  updateCategoryApi
} from "containers/Category/api";
import useMutation from "hooks/query/useMutation";
import type { AddOrUpdateCategoryParam } from './types'

export enum CATEGORY_QUERY_KEY {
  GET = 'category.get',
  ADD = 'category.add',
  UPDATE = 'category.update',
  DELETE = 'category.delete'
}


export const useGetCategoryQuery = () => useQuery({
  queryKey: [CATEGORY_QUERY_KEY.GET],
  queryFn: () => getCategoryApi()
})

export const useAddCategoryMutation = () => useMutation<AddOrUpdateCategoryParam>({
  mutationKey: [CATEGORY_QUERY_KEY.ADD],
  mutationFn: (data) => addCategoryApi(data)
})

export const useUpdateCategoryMutation = () => useMutation<AddOrUpdateCategoryParam>({
  mutationKey: [CATEGORY_QUERY_KEY.UPDATE],
  mutationFn: (data) => updateCategoryApi(data)
})

export const useDeleteCategoryMutation = () => useMutation<string>({
  mutationKey: [CATEGORY_QUERY_KEY.DELETE],
  mutationFn: (id) => deleteCategoryApi(id)
})
