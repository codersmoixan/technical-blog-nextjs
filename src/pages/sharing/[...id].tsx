/**
 * @author zhengji.su
 * @description Sharing
 */

import SharingUnit from "containers/Sharing/SharingUnit";
import Head from "next/head";
import type {GetServerSideProps} from "next";

function SharingUnitPage() {

  return (
    <>
      <Head>
        <title>Smoixan - 总结和分享，会有意想不到的收获</title>
        <meta name="description" content="Summary and sharing will bring unexpected results" />
      </Head>
      <SharingUnit />
    </>
  )
}

export default SharingUnitPage
