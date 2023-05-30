/**
 * @author zhengji.su
 * @description Sharing
 */

import SharingUnit from 'containers/Sharing/SharingUnit'
import Head from 'next/head'
import SharingLayout from 'containers/Sharing/components/SharingLayout'
import CreativeGrid from 'assets/images/backdrop/creative-grid.jpeg'
import useToolbar from "components/LayoutToolbar/hooks/useToolbar";
import {blogList} from "containers/Sharing/constants";
import ArticleFullRow from "containers/Sharing/components/ArticleFullRow";

function SharingUnitPage() {
  const { layout } = useToolbar()
	return (
		<>
			<Head>
				<title>Smoixan - 总结和分享，会有意想不到的收获</title>
				<meta name="description" content="Summary and sharing will bring unexpected results" />
			</Head>
      {layout === 'row' ? <SharingUnit articles={blogList} /> : (
        blogList.map(blog => <ArticleFullRow key={blog.id} article={blog} />)
      )}
		</>
	)
}

SharingUnitPage.getLayout = (page: any) => <SharingLayout backdrop={CreativeGrid}>{page}</SharingLayout>

export default SharingUnitPage
