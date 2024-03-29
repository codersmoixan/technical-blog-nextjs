/**
 * @author zhengji.su
 * @description SharingLayout
 */

import React, { useRef, ReactElement } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import ArrowBack from '@mui/icons-material/ArrowBack'
import MediaQuery from 'core/MediaQuery'
import CatalogMenu from 'containers/Sharing/components/CatalogMenu'
import Content from 'components/Layout/Content'
import Root from 'components/Layout/Root'
import SearchFormText from 'components/Form/SearchFormText'
import Banner from 'components/Layout/Banner'
import { navigateList, options } from '../constants'
import useSeparateChildren from 'hooks/useSeparateChildren'
import Buttons from 'components/Buttons'
import routes from '@/src/routes'
import type { StaticImageData } from 'next/image'
import Navigation from 'components/Navigation'
import Footer from 'containers/App/components/Footer'
import SuspendButtons from 'components/SuspendButtons'
import { SuspendActions } from 'components/SuspendButtons/types'
import ThemeSettingIcon from 'containers/App/components/ThemeSettingIcon'
import AddLink from '@mui/icons-material/AddLink'
import Link from 'next/link'
import PostAdd from '@mui/icons-material/PostAdd'
import VerticalAlignTop from '@mui/icons-material/VerticalAlignTop'
import { Queue, BookmarkAdd } from '@mui/icons-material'
import SpeedDialPopupLayer from 'containers/App/components/SpeedDialPopupLayer'
import ThemeSetter from 'components/LayoutToolbar/ThemeSetter'
import FullScreen from 'components/LayoutToolbar/FullScreen'
import PageLayout from 'containers/Sharing/components/PageLayout'
import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'

interface SharingRootProps {
	children: ReactElement | ReactElement[]
	backdrop?: string | StaticImageData
	classes?: Partial<ReturnType<typeof useStyles>>
}

const useStyles = makeStyles((theme: Theme) => {
	const isDark = theme.palette.mode === 'dark'

	return {
		...theme.styles,
		root: {
			overflow: 'initial'
		},
		banner: {
			alignItems: 'flex-start'
		},
		content: {
			[theme.breakpoints.up('md')]: {
				display: 'flex',
				marginTop: theme.spacing(8)
			}
		},
		main: {
			flex: 1,
			[theme.breakpoints.up('md')]: {
				padding: theme.spacing(3, 3),
				width: 'calc(100% - 253px)',
				boxSizing: 'border-box',
				backgroundColor: isDark ? 'rgba(145, 158, 171, .08)' : theme.colorPalette.primary.default,
				borderRadius: 4
			}
		},
		search: {
			[theme.breakpoints.down('md')]: {
				marginTop: theme.spacing(3)
			}
		},
		formText: {
			width: '100%',
			'& input.MuiInputBase-input': {
				height: 58
			}
		},
		formTextIcon: {
			color: theme.palette.primary.main
		},
		back: {
			position: 'absolute',
			bottom: 0,
			'& .MuiButton-root': {
				color: theme.colorPalette.primary.default,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: 185,
				height: 45,
				backgroundColor: theme.palette.primary.main,
				borderRadius: '4px 4px 0 0',
				boxShadow: 'none',
				'&:hover': {
					boxShadow: 'none'
				},
				'& svg': {
					marginRight: theme.spacing(1),
					fontSize: 14
				}
			}
		},
		catalog: {
			position: 'sticky',
			top: 72
		},
		menu: {
			padding: theme.spacing(1),
			backgroundColor: isDark ? 'rgba(145, 158, 171, .08)' : theme.colorPalette.primary.default,
			borderRadius: 4
		}
	}
})

const actions: SuspendActions = [
	{ id: 'setting', icon: <ThemeSettingIcon />, name: '主题设置' },
	{ id: 'links', icon: <AddLink />, name: '新增友情链接' },
	{ id: 'category', icon: <Queue />, name: '新增归档类型' },
	{ id: 'tags', icon: <BookmarkAdd />, name: '新增标签' },
	{
		id: 'editor',
		icon: (
			<Link href={routes.editor} target="_blank">
				<PostAdd />
			</Link>
		),
		name: '新增新的分享'
	},
	{ id: 'top', icon: <VerticalAlignTop /> }
]

function SharingLayout({ children, backdrop, ...other }: SharingRootProps) {
	const classes = useStyles(other)
	const theme = useTheme()
	const { content, banner } = useSeparateChildren(children, ['content', 'banner'])

	const pointRef = useRef<HTMLElement | null>(null)
	const searchRef = useRef<HTMLElement | null>(null)

	const handleSearchFocus = () => {
		searchRef.current?.focus()
	}

	return (
		<>
			<Navigation menus={navigateList} />
			<Root backdrop={backdrop} classes={{ root: classes.root }}>
				<Content>
					<Banner className={classes.banner}>
						{banner ?? (
							<>
								<Typography variant="h2" fontWeight={400}>
									总结和分享
								</Typography>
								<Typography variant="h2" fontWeight={400}>
									会有意想不到的收获
								</Typography>
							</>
						)}
						<MediaQuery media={['pad', 'pc']}>
							<Box ref={pointRef} className={classes.back}>
								<Buttons variant="contained" href={routes.home}>
									<ArrowBack />
									<Typography component="a" variant="body1" color="inherit">
										返回首页
									</Typography>
								</Buttons>
							</Box>
						</MediaQuery>
					</Banner>
					<Box className={classes.content}>
						<CatalogMenu
							menus={options}
							onSearchFocus={handleSearchFocus}
							ref={pointRef}
							classes={{
								catalog: classes.catalog,
								menu: classes.menu
							}}
						/>
						<Box className={classes.main}>
							<Box className={classes.search}>
								<SearchFormText
									classes={{
										formText: classes.formText,
										icon: classes.formTextIcon
									}}
									bgColor={theme.colorPalette.primary.transparent}
									placeholder="这里可以搜索你想知道的内容"
									anchorPoint={pointRef}
									inputProps={{
										ref: searchRef
									}}
								/>
							</Box>
							<Box py={1.5}>{content}</Box>
						</Box>
					</Box>
				</Content>
			</Root>
			<Footer />
			<SuspendButtons actions={actions} />
			<SpeedDialPopupLayer>
				<ThemeSetter />
				<PageLayout />
				<FullScreen />
			</SpeedDialPopupLayer>
		</>
	)
}

export default SharingLayout
