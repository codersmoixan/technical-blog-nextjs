/**
 * @author zhengji.su
 * @description App
 */

import Box from '@mui/material/Box';
import { motion, useScroll, useSpring } from "framer-motion";
import makeStyles, { Theme } from "core/makeStyles";
import BeforeRoute from "core/BeforeRoute";
import Navigation from "components/Navigation";
import BasicSpeedDial  from "containers/App/components/BasicSpeedDial";
import Footer from "components/Footer";
import Snackbar from "core/Snackbar";
import PopupLayer from "containers/App/components/PopupLayer";
import type { AppProps } from "next/app";
import routes from "@/src/routes";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: `linear-gradient(rgba(252, 252, 252, 0.9), rgba(252, 252, 252, 0.9)) center center / cover no-repeat, url(/images/home/overlay_2.jpg)`,
    backgroundSize: '100% 100%',
    backgroundAttachment: 'fixed',
  },
  scrollProgress: {
    position: 'fixed',
    top: 0,
    width: '100%',
    height: 2,
    transformOrigin: '0%',
    backgroundColor: theme.palette.primary.main,
    zIndex: 9999,
  }
}), 'App')

function App({ Component, pageProps }: AppProps) {
  const classes = useStyles()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Box className={classes.root}>
      <motion.div style={{ scaleX }} className={classes.scrollProgress} />
      <BeforeRoute exclude={[routes.editor, routes.login]}>
        <Navigation />
      </BeforeRoute>
      <Box position="relative">
        <Component {...pageProps} />
      </Box>
      <BeforeRoute exclude={[routes.editor, routes.login]}>
        <Footer />
      </BeforeRoute>
      <BeforeRoute exclude={[routes.editor, routes.login]}>
        <BasicSpeedDial />
      </BeforeRoute>
      <Snackbar />
      <PopupLayer />
    </Box>
  )
}

export default App
