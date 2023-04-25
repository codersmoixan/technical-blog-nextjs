import indexOf from 'lodash/indexOf'
import union from 'lodash/union'
import without from 'lodash/without'
import isEqual from 'lodash/isEqual'
import isArray from 'lodash/isArray'
import isPlainObject from 'lodash/isPlainObject'
import type { EmptyObject } from '@/src/tb.types'
import isString from "lodash/isString";

export function timeSleep(wait: number = 300) {
	return new Promise(resolve => {
		const timer = setTimeout(() => {
			resolve(true)
			clearTimeout(timer)
		}, wait)
	})
}

export const toggleExist = <T extends any>(a: T[], b: T) => (indexOf(a, b) === -1 ? union(a, [b]) : without(a, b))

export const deepEqual = <T>(aDeps: T, bDeps: T) => isEqual(aDeps, bDeps)

export const getValue = <T extends EmptyObject, K extends keyof T>(obj: T, key: K): T[K] => obj[key]

/**
 * @description includes
 * */
export const includes = (a: any[], b: any[] | string | number) => {
	if (isArray(b)) {
		return a.some(i => b.includes(i))
	}

	return indexOf(a, b) >= 0
}

/**
 * @description toggle
 * */
export const toggle = <A extends any[], B extends (string | number | any[] | object)>(a: A, b: B, key?: string) => {
	function filterObject(i: any[], j: any[], k: string) {
		if (!k) {
			return i
		}

		const mergeParams = [...i, ...j]
		const iKeys = i.map(item => item[k])
		const jKeys = j.map(item => item[k])
		const includesKeys = includes(iKeys, jKeys) ? without(iKeys, ...jKeys) : union(iKeys, jKeys)

		return mergeParams.filter(item => includesKeys.includes(item.id))
	}

	if (isPlainObject(b)) {
		return key ? filterObject(a, [b], key) : a
	}

	if (isArray(b)) {
    if (key) {
      return filterObject(a, b, key)
    }

		return includes(a, b) ? without(a, ...b) : union(a, b)
	}

  const _b = b as string | number

  return includes(a, _b) ? without(a, _b) : union(a, [_b])
}
