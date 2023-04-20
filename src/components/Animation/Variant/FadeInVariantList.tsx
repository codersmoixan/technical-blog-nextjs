import Variant from 'components/Animation/Variant/Variant'
import VariantContent from 'components/Animation/Variant/VariantContent'
import { contentVariants, stiffnessVariants } from 'utils/variants'
import type { Variants } from 'framer-motion'
import isEmpty from 'lodash/isEmpty'

export interface FadeInVariantListProps {
	list: any[]
	children: (child: any) => any
	focus?: boolean
	rowKey?: string
	animate?: boolean
	contentVariants?: Variants
	stiffnessVariants?: Variants
}

function FadeInVariantList({
	list,
	children,
	focus,
	rowKey = 'id',
	animate = true,
	contentVariants: propContentVariants = contentVariants,
	stiffnessVariants: propStiffnessVariants = stiffnessVariants
}: FadeInVariantListProps) {
	if (isEmpty(list)) {
		return null
	}

	if (!animate) {
		return (
			<>
				{list.map(item => (
					<div key={item[rowKey]}>{children(item)}</div>
				))}
			</>
		)
	}

	return (
		<Variant focus={focus}>
			<VariantContent variants={propContentVariants}>
				{list.map(item => (
					<VariantContent key={item[rowKey]} variants={propStiffnessVariants}>
						{children(item)}
					</VariantContent>
				))}
			</VariantContent>
		</Variant>
	)
}

export default FadeInVariantList
