import useMutation from 'hooks/query/useMutation'
import { registerApi } from 'containers/Register/api'
import type { RegisterParams } from 'containers/Register/types'

export enum REGISTER_QUERY_KEY {
	ADD = 'register.add'
}

export const useRegisterMutation = () =>
	useMutation<RegisterParams>({
		mutationKey: [REGISTER_QUERY_KEY.ADD],
		mutationFn: data => registerApi(data)
	})
