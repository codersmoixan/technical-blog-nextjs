/**
 * @author zhengji.su
 * @description Index
 */
import Home from "containers/Home";
import Box from "@mui/material/Box";
import Head from "next/head";

function Index() {

  return (
    <Box>
      <Head>
        <title>Smoixan: 分享的创作 - 你一路颠沛流离，到最遥远的地方旅行</title>
        <meta name="description" content="Shared creation" />
      </Head>
      <Home />
    </Box>
  )
}

export default Index
