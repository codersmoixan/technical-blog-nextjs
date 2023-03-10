import Head from 'next/head'
import Register from 'containers/Register'

function RegisterPage() {
	return (
		<>
			<Head>
				<title>Smoixan - 注册你的账号</title>
				<meta name="description" content="Login" />
			</Head>
			<Register />
		</>
	)
}

export default RegisterPage
