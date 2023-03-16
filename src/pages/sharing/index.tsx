/**
 * @author zhengji.su
 * @description SharingPage
 */
import SharingMain from "containers/Sharing/SharingMain";
import Box from "@mui/material/Box";
import Head from "next/head";

function SharingPage() {

  return (
    <Box>
      <Head>
        <title>Smoixan - 总结和分享，会有意想不到的收获</title>
        <meta name="description" content="Summary and sharing will bring unexpected results" />
      </Head>
      <SharingMain />
    </Box>
  )
}

export default SharingPage
