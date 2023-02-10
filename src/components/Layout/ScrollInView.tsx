import React, { useMemo, useRef } from "react";
import { useInView } from "framer-motion";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import type { CSSProperties } from "@mui/styles";

export interface ScrollInViewProps {
  transform?: string;
  initial?: CSSProperties;
  animate?: CSSProperties;
  children?: React.ReactNode;
}

const useStyles = makeStyles({
  container: {
    transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    opacity: 0
  },
})

function ScrollInView(props: ScrollInViewProps) {
  const { children, transform, animate: propAnimate, initial: propInitial, ...other } = props
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const classes = useStyles(props)

  const { initial, animate } = useMemo(() => ({
    initial: propInitial ?? { transform: 'translateY(-100px)' },
    animate: propAnimate ?? { transform: 'none', opacity: 1 }
  }), [propAnimate, propInitial])

  return (
    <section ref={ref}>
      <Box
        className={classes.container}
        style={isInView ? animate : initial}
        {...other}
      >
        {children}
      </Box>
    </section>
  );
}

export default ScrollInView
