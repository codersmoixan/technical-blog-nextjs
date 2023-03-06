/**
 * @author zhengji.su
 * @description Sharing
 */

import SharingUnit from "containers/Sharing/SharingUnit";
import Head from "next/head";

function SharingUnitPage() {

  return (
    <>
      <Head>
        <title>总结和分享，会有意想不到的收获</title>
        <meta name="description" content="Summary and sharing will bring unexpected results" />
      </Head>
      <SharingUnit />
    </>
  )
}

export default SharingUnitPage
