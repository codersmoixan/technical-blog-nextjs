import routes from '@/src/routes'
import type { RouteParam } from '@/src/routes'
import type { OverridableComponent } from '@mui/types'

export interface MenuItem {
	id: number
	label: string
	menus?: MenuItem[]
}

export interface NavigationItem {
	id: string
	label: string
	route: string | ((id?: RouteParam) => string)
	icon?: OverridableComponent<any>
	menus?: MenuItem[]
}

export type NavigationList = NavigationItem[]

export const NAVIGATION_LIST: NavigationList = [
	{
		id: 'home',
		label: '首页',
		route: routes.home,
		// icon: Home
	},
	{
		id: 'share',
		label: '分享',
		route: routes.sharing,
	},
	{
		id: 'files',
		label: '归档',
		route: routes.category,
		// icon: Queue,
		menus: [
			{
				id: 1,
				label: '前端',
				menus: [{ id: 1, label: 'React' }]
			}
		]
	},
	{
		id: 'notes',
		label: '笔记',
		route: routes.notes,
		// icon: Book
	},
	{
		id: 'tags',
		label: '标签',
		route: routes.tags,
		// icon: BookmarkBorder,
		menus: [
			{
				id: 1,
				label: '前端',
				menus: [
					{ id: 1, label: 'React' },
					{ id: 2, label: 'Vue' },
					{ id: 4, label: 'JS' }
				]
			},
			{
				id: 2,
				label: '后端',
				menus: [
					{ id: 1, label: 'Go' },
					{ id: 2, label: 'Java' }
				]
			}
		]
	},
	{
		id: 'links',
		label: '友链',
		route: routes.links,
		// icon: AttachFile
	},
  {
    id: 'about',
    label: '关于',
    route: routes.about
  }
]
