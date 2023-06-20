import useMutation from 'hooks/query/useMutation'
import { getTokenApi } from 'containers/Login/api'
import type {GetTokenParams, GetTokenResult} from "containers/Login/types";

export enum USER_QUERY_KEY {
	LOGIN = 'user.login',
	REGISTER = 'user.register'
}

export const useGetTokenMutation = () => useMutation<GetTokenParams, GetTokenResult>({
  mutationKey: [USER_QUERY_KEY.LOGIN],
  mutationFn: data => getTokenApi(data)
})
