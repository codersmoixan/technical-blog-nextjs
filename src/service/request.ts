import Axios from './axios'
import { requestHeader } from './utils'
import { BASE_API_URL } from './utils'
import notify from 'core/Snackbar/notify'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import type { RequestConfig } from './type'

function requestInterceptors(config: AxiosRequestConfig): AxiosRequestConfig {
	return config
}

function responseInterceptors(config: AxiosResponse) {
  const { data, status } = config
	if (status !== 200) {
		notify.warning(data.msg)
	}

	return config.data
}

function responseInterceptorsCatch(err: any) {
	notify.error(err.message)

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
