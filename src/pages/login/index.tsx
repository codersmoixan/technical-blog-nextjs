/**
 * @author zhengji.su
 * @description Login
 */

import Head from "next/head";
import LoginContainer from "containers/Login";

function Login() {

  return (
    <>
      <Head>
        <title>登录你的账号</title>
        <meta name="description" content="Login" />
      </Head>
      <LoginContainer />
    </>
  )
}

export default Login
