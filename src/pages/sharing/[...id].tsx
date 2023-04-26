/**
 * @author zhengji.su
 * @description Sharing
 */

import SharingUnit from 'containers/Sharing/SharingUnit'
import Head from 'next/head'
import SharingLayout from 'containers/Sharing/components/SharingLayout'
import CreativeGrid from 'assets/images/backdrop/creative-grid.jpeg'

function SharingUnitPage() {
	return (
		<>
			<Head>
				<title>Smoixan - 总结和分享，会有意想不到的收获</title>
				<meta name="description" content="Summary and sharing will bring unexpected results" />
			</Head>
			<SharingUnit />
		</>
	)
}

SharingUnitPage.getLayout = (page: any) => <SharingLayout backdrop={CreativeGrid}>{page}</SharingLayout>

export default SharingUnitPage
