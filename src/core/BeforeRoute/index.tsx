/**
 * @author zhengji.su
 * @description BeforeRoute
 */

import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import type { ReactNode } from "react";

interface BeforeRouteProps {
  children: ReactNode;
  blackList?: string[];
}

const useVisible = (list: string[]) => {
  const router = useRouter()

  return !list.includes(router.route)
}

function BeforeRoute({ blackList = [], ...other }: BeforeRouteProps) {
  const visible = useVisible(blackList)

  return visible ? <Box {...other} /> : null
}

export default BeforeRoute
