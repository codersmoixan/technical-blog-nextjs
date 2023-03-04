/**
 * @author zhengji.su
 * @description Sharing
 */
import SharingMain from "containers/Sharing/SharingMain";
import Box from "@mui/material/Box";
import Head from "next/head";

function Sharing() {

  return (
    <Box>
      <Head>
        <title>总结和分享，会有意想不到的收获</title>
        <meta name="description" content="Summary and sharing will bring unexpected results" />
      </Head>
      <SharingMain />
    </Box>
  )
}

export default Sharing
