/**
 * @author zhengji.su
 * @description LoginPage
 */

import Head from "next/head";
import Login from "containers/Login";

function LoginPage() {

  return (
    <>
      <Head>
        <title>Smoixan - 登录你的账号</title>
        <meta name="description" content="Login" />
      </Head>
      <Login />
    </>
  )
}

export default LoginPage
