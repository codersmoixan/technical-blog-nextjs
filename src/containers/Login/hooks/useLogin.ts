import { useGetTokenMutation } from 'containers/Login/queries'
import type { GetTokenParams } from 'containers/Login/types'
import { setAuthorization } from 'utils/auth'
import useGoToLogin from 'containers/Login/hooks/useGoToLogin'

const useLogin = () => {
	const { toggleLogin } = useGoToLogin()
	const { mutateAsync: getTokenMutate, isLoading: getTokenLoading } = useGetTokenMutation()

	const getToken = async (option: GetTokenParams) => {
		const result = await getTokenMutate(option)
		setAuthorization(result.token)
		toggleLogin(false)
	}

	return {
		getToken,
		loading: getTokenLoading
	}
}

export default useLogin
