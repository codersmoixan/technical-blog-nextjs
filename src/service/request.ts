import Axios from './axios'
import { BASE_API_URL, requestHeader } from './utils'
import notify from 'core/Snackbar/notify'
import { dispatch } from 'store/index'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import type { RequestConfig } from './type'
import { updateOpenLogin } from 'containers/App/slice'
import { getAuthorization } from 'utils/auth'
import type { AxiosRequestHeaders } from 'axios'

function requestInterceptors(config: AxiosRequestConfig): AxiosRequestConfig {
	const auth = getAuthorization()
	const header = (auth.token ? { 'x-token': auth.token } : {}) as AxiosRequestHeaders
	config.headers = { ...config.headers, ...header }

	return config
}

function responseInterceptors(config: AxiosResponse) {
	const { data, status } = config

	if (status !== 200 || data.code !== 200) {
		notify.warning(data.msg)
		return Promise.reject(config)
	}

	return config.data
}

function responseInterceptorsCatch(err: any) {
	const { response } = err
	notify.error(response.data?.msg || err.message())

	if (response.status === 401) {
		dispatch(updateOpenLogin(true))
	}

	return Promise.reject(err)
}

function requestConfig(): RequestConfig {
	return {
		url: BASE_API_URL,
		headers: requestHeader(),
		interceptors: {
			requestInterceptors,
			responseInterceptors,
			responseInterceptorsCatch
		}
	}
}

const axios = new Axios(requestConfig())

export const request = axios.request.bind(axios)

export default axios
