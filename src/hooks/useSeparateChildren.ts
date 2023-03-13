import { useMemo, ReactElement } from 'react'
import isEmpty from 'lodash/isEmpty'
import isArray from 'lodash/isArray'
import type { EmptyObject } from '@/src/tb.types'

export const findChildNode = (nodes: ReactElement[], key: string) => nodes.find((node: ReactElement) => node.props.slot === key) ?? null

export const separateChildren = <T extends string>(children: ReactElement[] | ReactElement, slots: T[]) => {
	let slotsChild: any = {}

	if (isArray(children)) {
		slots.forEach((slot: string) => {
			slotsChild[slot] = findChildNode(children, slot)
		})
	} else {
		const slot = children.props.slot ?? slots[0]
		slotsChild[slot] = children ?? null
	}

	return slotsChild as EmptyObject<T, ReactElement>
}

const useSeparateChildren = <T extends string>(children: ReactElement | ReactElement[] | undefined, slots: T[]) => {
	return useMemo(() => {
		if (isEmpty(children)) {
			return {} as EmptyObject<T, ReactElement>
		}

		return separateChildren<T>(children, slots)
	}, [children, slots])
}

export default useSeparateChildren
