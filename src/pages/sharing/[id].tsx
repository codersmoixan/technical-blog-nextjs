/**
 * @author zhengji.su
 * @description Index
 */

import SharingMain from 'containers/Sharing/SharingMain'
import Head from 'next/head'
import SharingLayout from 'containers/Sharing/components/SharingLayout'
import CreativeLines from "assets/images/backdrop/creative-lines.jpeg";

function SharingSlugPage() {
	return (
		<>
			<Head>
				<title>Smoixan - 总结和分享，会有意想不到的收获</title>
				<meta name="description" content="Summary and sharing will bring unexpected results" />
			</Head>
			<SharingMain />
		</>
	)
}

SharingSlugPage.getLayout = (page: any) => <SharingLayout backdrop={CreativeLines}>{page}</SharingLayout>

export default SharingSlugPage
