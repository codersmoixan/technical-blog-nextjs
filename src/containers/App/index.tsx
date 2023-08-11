/**
 * @author zhengji.su
 * @description App
 */

import Box from '@mui/material/Box'
import { motion, useScroll, useSpring } from 'framer-motion'
import BeforeRoute from 'core/BeforeRoute'
import Navigation from 'components/Navigation'
import Footer from 'containers/App/components/Footer'
import Snackbar from 'core/Snackbar'
import SpeedDialPopupLayer from 'containers/App/components/SpeedDialPopupLayer'
import routes from '@/src/routes'
import SuspendButtons from 'components/SuspendButtons'
import type { GetServerSideProps, NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactNode } from 'react'
import { NAVIGATION_LIST } from 'containers/App/constants'
import ThemeSettingIcon from 'containers/App/components/ThemeSettingIcon'
import AddLink from '@mui/icons-material/AddLink'
import Link from 'next/link'
import PostAdd from '@mui/icons-material/PostAdd'
import VerticalAlignTop from '@mui/icons-material/VerticalAlignTop'
import React from 'react'
import { SuspendActions } from 'components/SuspendButtons/types'
import Login from 'containers/Login'
import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'

type GetLayout = (page: ReactNode) => JSX.Element

// eslint-disable-next-line @typescript-eslint/ban-types
type Page<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: GetLayout
}

// eslint-disable-next-line @typescript-eslint/ban-types
type MyAppProps<P = {}> = AppProps<P> & {
	Component: Page<P>
}

const useStyles = makeStyles((theme: Theme) => {
	const isDark = theme.palette.mode === 'dark'

	return {
		root: {
			background: isDark
				? 'linear-gradient(rgba(22, 28, 36, 0.94), rgba(22, 28, 36, 0.94)) center center / cover no-repeat, url(/images/home/overlay_2.jpg)'
				: `linear-gradient(rgba(252, 252, 252, 0.9), rgba(252, 252, 252, 0.9)) center center / cover no-repeat, url(/images/home/overlay_2.jpg)`,
			backgroundSize: '100% 100%',
			backgroundAttachment: 'fixed'
		},
		scrollProgress: {
			position: 'fixed',
			top: 0,
			width: '100%',
			height: 2,
			transformOrigin: '0%',
			backgroundColor: theme.palette.primary.main,
			zIndex: 9999
		}
	}
})

const excludeList = [routes.editor, routes.login, routes.notFond, routes.register]

const actions: SuspendActions = [
	{ id: 'setting', icon: <ThemeSettingIcon />, name: '主题设置' },
	{ id: 'links', icon: <AddLink />, name: '新增友情链接' },
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

function App({ Component, pageProps }: MyAppProps) {
	const classes = useStyles()
	const { scrollYProgress } = useScroll()
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	})

	const getLayout =
		Component.getLayout ||
		(page => (
			<>
				<BeforeRoute exclude={[...excludeList, routes.creatorHome, routes.creatorArticle]}>
					<Navigation menus={NAVIGATION_LIST} />
				</BeforeRoute>
				<Box position="relative">{page}</Box>
				<BeforeRoute exclude={excludeList}>
					<Footer />
				</BeforeRoute>
				<SuspendButtons actions={actions} />
				<SpeedDialPopupLayer />
			</>
		))

	return (
		<div className={classes.root}>
			<motion.div style={{ scaleX }} className={classes.scrollProgress} />
			{getLayout(<Component {...pageProps} />)}
			<Snackbar />
			<Login />
		</div>
	)
}

export default App

export async function getServerSideProps(context: GetServerSideProps) {
	console.log(context, 2212)
}
