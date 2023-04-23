import { Article, Assessment, Help, Home } from '@mui/icons-material'
import routes from '@/src/routes'

export const NAVIGATION_LIST = [
	{
		id: 'home',
		label: '首页',
		icon: Home,
		route: routes.creatorHome
	},
	{
		id: 'article',
		label: '内容管理',
		icon: Article,
		menus: [
			{
				id: 'article',
				label: '文章管理',
				route: routes.creatorArticle
			},
			{
				id: 'column',
				label: '专栏管理',
				route: routes.creatorColumn
			}
		]
	},
	{
		id: 'data',
		label: '数据中心',
		icon: Assessment,
		menus: [
			{
				id: 'content',
				label: '内容数据',
				route: routes.creatorContentData
			}
		]
	},
	{
		id: 'help',
		label: '帮助中心',
		icon: Help,
		menus: [
			{
				id: 'question',
				label: '常见问题',
				route: routes.creatorHelp
			}
		]
	}
]
