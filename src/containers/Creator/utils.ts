import isEmpty from 'lodash/isEmpty'
import type { EmptyObject } from '@/src/tb.types'

export interface FindMenuReturns {
	parent: number | string
	current: number | string
}

export const findMenu = (pathname: string, menus: any[], parentMenu: EmptyObject = {}): FindMenuReturns => {
	let find = {}

	menus.forEach(menu => {
		if (pathname === menu.route) {
			find = { parent: parentMenu.id, current: menu.id }
		}

		if (isEmpty(find) && menu.menus) {
			find = findMenu(pathname, menu.menus, menu)
		}
	})

	return find as FindMenuReturns
}
