/**
 * @author zhengji.su
 * @description SharingPage
 */
import SharingMain from 'containers/Sharing/SharingMain'
import Box from '@mui/material/Box'
import Head from 'next/head'
import CreativeLines from 'assets/images/backdrop/creative-lines.jpeg'
import SharingLayout from 'containers/Sharing/components/SharingLayout'

function SharingPage() {
	return (
		<Box>
			<Head>
				<title>Smoixan - 总结和分享，会有意想不到的收获</title>
				<meta name="description" content="Summary and sharing will bring unexpected results" />
			</Head>
			<SharingMain />
		</Box>
	)
}

SharingPage.getLayout = (page: any) => <SharingLayout backdrop={CreativeLines}>{page}</SharingLayout>

export default SharingPage
