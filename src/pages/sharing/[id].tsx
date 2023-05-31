/**
 * @author zhengji.su
 * @description Index
 */

import SharingMain from 'containers/Sharing/SharingMain'
import SharingLayout from 'containers/Sharing/components/SharingLayout'
import CreativeLines from "assets/images/backdrop/creative-lines.jpeg";
import PageHead from "components/Layout/PageHead"

function SharingSlugPage() {
	return (
    <PageHead title="Smoixan - 总结和分享，会有意想不到的收获" content="Summary and sharing will bring unexpected results">
      <SharingMain />
    </PageHead>
	)
}

SharingSlugPage.getLayout = (page: any) => <SharingLayout backdrop={CreativeLines}>{page}</SharingLayout>

export default SharingSlugPage
