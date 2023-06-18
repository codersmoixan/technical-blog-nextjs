import { useQuery as useReactQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";

export const querySetting: UseQueryOptions = {
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  retry: 3,
  retryDelay: 3000
};

const useQuery = <T = any>({ queryKey, queryFn, enabled }: UseQueryOptions): UseQueryResult<T> => useReactQuery({
  queryKey,
  queryFn,
  enabled,
  ...querySetting
}) as UseQueryResult<T>

export default useQuery
