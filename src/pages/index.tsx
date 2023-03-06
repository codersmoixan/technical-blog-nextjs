/**
 * @author zhengji.su
 * @description Index
 */
import HomeContainer from "containers/Home";
import Head from "next/head";
import routes from "@/src/routes";

function Home() {

  return (
    <>
      <Head>
        <title>Smoixan: 分享的创作 - 你一路颠沛流离，到最遥远的地方旅行</title>
        <meta name="description" content="Shared creation" />
      </Head>
      <HomeContainer />
    </>
  )
}

export default Home


// export async function getServerSideProps() {
//   return {
//     redirect: {
//       destination: routes.notFond,
//       permanent: false
//     }
//   }
// }
