import type { EmptyObject } from '@/src/tb.types'
import type { RouteParam } from '@/src/routes'

export interface NavigateItemOption extends EmptyObject {
	id: string
	label: string
	route: string | ((id?: RouteParam) => string)
}
