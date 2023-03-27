import Variant from 'components/Animation/Variant/Variant'
import VariantContent from 'components/Animation/Variant/VariantContent'
import { stiffnessVariants } from 'utils/variants'

export interface FadeInVariantListProps {
	list: any[]
	children: (child: any) => any
	focus?: boolean
	rowKey?: string
}

function FadeInVariantList({ list, children, focus, rowKey = 'id' }: FadeInVariantListProps) {
	return (
		<Variant focus={focus}>
			<VariantContent>
				{list.map(item => (
					<VariantContent key={item[rowKey]} variants={stiffnessVariants}>
						{children(item)}
					</VariantContent>
				))}
			</VariantContent>
		</Variant>
	)
}

export default FadeInVariantList
