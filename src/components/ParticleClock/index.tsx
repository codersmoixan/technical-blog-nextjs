import { useEffect, useRef } from "react";
import { makeStyles } from "@mui/styles";
import drawClock from "components/ParticleClock/DrawClock";
import type { Theme } from "@mui/material";

interface ParticleClockProps {
  width: number;
  height: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  canvas: {
    display: 'block',
  }
}))

function ParticleClock({ width, height }: ParticleClockProps) {
  const classes = useStyles()

  const canvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvas.current && width && height) {
      drawClock.init(canvas.current, { width, height })
    }
  }, [canvas, width, height])

  return <canvas ref={canvas} className={classes.canvas}></canvas>
}

export default ParticleClock
