import type { AxiosRequestHeaders } from 'axios'

export const BASE_API_URL = process.env.BASE_API_URL
export const BASE_GQL_API_URL = `${BASE_API_URL}/graphql`

export function requestHeader<T extends AxiosRequestHeaders>(option?: T): AxiosRequestHeaders {
	return {
		'Content-Type': 'application/json',
		...(option ?? {})
	}
}
