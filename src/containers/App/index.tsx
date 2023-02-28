/**
 * @author zhengji.su
 * @description App
 */

import Box from '@mui/material/Box';
import { motion, useScroll, useSpring } from "framer-motion";
import makeStyles, { Theme } from "utils/styles/makeStyles";
import NodeVisible from "components/NodeVisible";
import Navigation from "components/Navigation";
import BasicSpeedDial  from "containers/App/components/BasicSpeedDial";
import Footer from "components/Footer";
import Snackbar from "components/Snackbar";
import PopupLayer from "containers/App/components/PopupLayer";
import type { AppProps } from "next/app";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
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
      <NodeVisible>
        <Navigation />
      </NodeVisible>
      <Box position="relative" zIndex={9}>
        <Component {...pageProps} />
      </Box>
      <NodeVisible>
        <Footer />
      </NodeVisible>
      <NodeVisible>
        <BasicSpeedDial />
      </NodeVisible>
      <Snackbar />
      <PopupLayer />
    </Box>
  )
}

export default App
