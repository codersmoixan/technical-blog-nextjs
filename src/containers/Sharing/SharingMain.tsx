/**
 * @author zhengji.su
 * @description SharingMain
 */

import Box from '@mui/material/Box'
import useSwitchCatalog from 'containers/Sharing/hooks/useSwitchCatalog'
import { blogList } from 'containers/Sharing/constants'
import SharingSwiper from 'containers/Sharing/components/SharingSwiper'
import useSharing from 'containers/Sharing/hooks/useSharing'
import useToolbar from 'components/LayoutToolbar/hooks/useToolbar'
import ArticleFullRow from 'containers/Sharing/components/ArticleFullRow'

function SharingMain() {
	const { checkedMenu } = useSwitchCatalog()
	const { layout } = useToolbar()
	const { blogs } = useSharing()

	return layout === 'row' ? (
		<Box mb={8}>
			<SharingSwiper blogs={blogList} title="React" />
			<SharingSwiper blogs={blogList} title="Vue" />
			<SharingSwiper blogs={blogList} title="Angular" />
		</Box>
	) : (
		<div>
			{blogList.map(blog => (
				<ArticleFullRow key={blog.id} article={blog} />
			))}
		</div>
	)
}

export default SharingMain
