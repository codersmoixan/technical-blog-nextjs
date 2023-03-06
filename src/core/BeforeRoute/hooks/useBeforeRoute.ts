import { useRouter } from 'next/router'
import { useMemo } from "react";

interface UseBeforeRouteProps {
  include?: string[];
  exclude?: string[];
}

const useBeforeRoute = ({ include, exclude }: UseBeforeRouteProps) => {
	const { route } = useRouter()

  return useMemo(() => {
    if (include) {
      return include.includes(route)
    }

    return exclude && !exclude.includes(route)
  }, [include, exclude, route])
}

export default useBeforeRoute
