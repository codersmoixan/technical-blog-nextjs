import routes from '@/src/routes'
import type { ThemeSettingPresets } from 'containers/App/types'
import type { NavigateItemOption } from 'components/Navigation/types'

export const themePresets: ThemeSettingPresets[] = ['one', 'two', 'three', 'four', 'five', 'six']

export const aboutUsList = [
	{ id: 'aboutUs', label: '关于我们' },
	{ id: 'contactUs', label: '联系我们' },
	{ id: 'terms', label: '条款和条件' }
]

export const documentList = [
	{ id: 'nextJs', label: 'NextJs', url: 'https://www.nextjs.cn/' },
	{ id: 'reactJs', label: 'ReactJs', url: 'https://www.nextjs.cn/' },
	{ id: 'js', label: 'JavaScript', url: '' },
	{ id: 'vueJs', label: 'VueJs', url: '' },
	{ id: 'nuxtJs', label: 'NuxtJs', url: '' }
]

export const NAVIGATION_LIST: NavigateItemOption[] = [
	{
		id: 'home',
		label: '首页',
		route: routes.home
	},
	{
		id: 'share',
		label: '分享',
		route: routes.sharing
	},
	{
		id: 'notes',
		label: '笔记',
		route: routes.notes
	},
	{
		id: 'links',
		label: '友链',
		route: routes.links
	},
	{
		id: 'about',
		label: '关于',
		route: routes.about
	}
]
