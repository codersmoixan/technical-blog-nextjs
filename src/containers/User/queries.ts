import useMutation from 'hooks/query/useMutation'
import { registerApi } from 'containers/User/api'
import type { RegisterParams } from 'containers/User/types'

export enum AUTH_QUERY_KEY {
	REGISTER = 'auth.register',
  LOG_IN = 'auth.login'
}

export const useRegisterMutation = () =>
	useMutation<RegisterParams>({
		mutationKey: [AUTH_QUERY_KEY.REGISTER],
		mutationFn: data => registerApi(data)
	})
