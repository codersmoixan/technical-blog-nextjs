import {
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoryQuery,
  useUpdateCategoryMutation,
} from "containers/Category/queries";
import useNotifier from "core/Snackbar/hooks/useNotifier";
import useSpeedDial from "components/SuspendButtons/hooks/useSpeedDial";
import get from "lodash/get";
import type { EmptyObject } from "@/src/tb.types"

export interface CategoryOption extends EmptyObject {
  label: string
  id: string | number
}

export interface UseCategoryReturns {
  category: CategoryOption[];
  loading: boolean;
  add: (data: any) => void;
  update: (data: any) => void;
  remove: (id: string) => void;
  refetchCategory: () => void
}

const useCategory = (): UseCategoryReturns => {
  const notify = useNotifier()
  const { clearSpeedDial } = useSpeedDial()
  const { data: categoryData, refetch: refetchCategory, isLoading: getLoading } = useGetCategoryQuery()
  const { mutateAsync: addCategory, isLoading: addLoading } = useAddCategoryMutation()
  const { mutateAsync: updateCategory, isLoading: updateLoading } = useUpdateCategoryMutation()
  const { mutateAsync: deleteCategory, isLoading: deleteLoading } = useDeleteCategoryMutation()

  const add = async (data: any) => {
    const result = await addCategory(data)
    notify(result.msg)

    await refetchCategory()
    clearSpeedDial()
  }

  const update = async (data: any) => {
    const result = await updateCategory(data)
    notify(result.msg)

    await refetchCategory()
    clearSpeedDial()
  }

  const remove = async (id: string) => {
    const result = await deleteCategory(id)
    notify(result.msg)
  }

  return {
    category: get(categoryData, 'data.data', []).map((item: any) => ({ ...item, label: item.categoryName })),
    loading: getLoading || addLoading || updateLoading || deleteLoading,
    add,
    update,
    remove,
    refetchCategory
  }
}

export default useCategory
