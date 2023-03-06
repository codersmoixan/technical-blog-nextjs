/**
 * @author zhengji.su
 * @description BeforeRoute
 */

import useBeforeRoute from 'core/BeforeRoute/hooks/useBeforeRoute'
import isEmpty from 'lodash/isEmpty'

interface BeforeRouteProps {
	children: JSX.Element
	include?: string[]
	exclude?: string[]
}

function BeforeRoute({ include, exclude, children }: BeforeRouteProps) {
	const access = useBeforeRoute({ include, exclude })

	if (!isEmpty(exclude)) {
		return access ? children : null
	}

  return access ? children : null
}

export default BeforeRoute
