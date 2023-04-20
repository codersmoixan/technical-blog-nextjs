/**
 * @author zhengji.su
 * @description App
 */

import Box from '@mui/material/Box'
import { motion, useScroll, useSpring } from 'framer-motion'
import makeStyles, { Theme } from 'core/makeStyles'
import BeforeRoute from 'core/BeforeRoute'
import Navigation from 'components/Navigation'
import Footer from 'containers/App/components/Footer'
import Snackbar from 'core/Snackbar'
import PopupLayer from 'containers/App/components/PopupLayer'
import routes from '@/src/routes'
import SuspendButtons from 'components/SuspendButtons'
import type { GetServerSideProps, NextPage } from 'next'
import type { AppProps } from 'next/app'
import type {ReactNode} from "react";

type GetLayout = (page: ReactNode) => ReactNode;

// eslint-disable-next-line @typescript-eslint/ban-types
type Page<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type MyAppProps<P = {}> = AppProps<P> & {
  Component: Page<P>;
};

const useStyles = makeStyles(
	(theme: Theme) => ({
		root: {
			background: `linear-gradient(rgba(252, 252, 252, 0.9), rgba(252, 252, 252, 0.9)) center center / cover no-repeat, url(/images/home/overlay_2.jpg)`,
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
	}),
	'App'
)

const excludeList = [routes.editor, routes.login, routes.notFond, routes.register]

function App({ Component, pageProps }: MyAppProps) {
	const classes = useStyles()
	const { scrollYProgress } = useScroll()
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	})

  const getLayout = Component.getLayout || ((page) => (
    <div className={classes.root}>
      <motion.div style={{ scaleX }} className={classes.scrollProgress} />
      <BeforeRoute exclude={[...excludeList, routes.creatorHome, routes.creatorArticle]}>
        <Navigation />
      </BeforeRoute>
      <Box position="relative">
        {page}
      </Box>
      <BeforeRoute exclude={excludeList}>
        <Footer />
      </BeforeRoute>
      <SuspendButtons />
      <Snackbar />
      <PopupLayer />
    </div>
  ))

  return getLayout(<Component {...pageProps} />)
}

export default App

export async function getServerSideProps(context: GetServerSideProps) {
	console.log(context, 2212)
}
