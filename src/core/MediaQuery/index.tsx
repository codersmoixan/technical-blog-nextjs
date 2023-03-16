/**
 * @author zhengji.su
 * @description MediaQuery
 */

import React from "react"
import Hidden from "@mui/material/Hidden";
import useMediaQueryKey from "core/MediaQuery/hooks/useMediaQueryKey";
import type { Media } from "./hooks/useMediaQueryKey"

interface MediaQueryProps{
  children: React.ReactNode,
  media: Media
}

function MediaQuery({ children, media }: MediaQueryProps) {
  const only = useMediaQueryKey(media)

  return (
    <Hidden only={only}>
      {children}
    </Hidden>
  )
}

export default MediaQuery
