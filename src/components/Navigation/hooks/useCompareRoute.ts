import { useRouter } from 'next/router'
import { RouteParam } from '@/src/routes'
import isFunction from 'lodash/isFunction'

const useCompareRoute = () => {
	const history = useRouter()
  const pathname = history.pathname.split('/').slice(0, 2)

	const compare = (url: string | ((id?: RouteParam) => string)): boolean => {
    const route = (isFunction(url) ? url() : url).split('/').slice(0, 2)

		if (pathname.length === 1 && route.length === 1) {
			return route[0] === pathname[0]
		}

    return route.every(i => pathname.includes(i))
	}

	return {
		compare
	}
}

export default useCompareRoute
