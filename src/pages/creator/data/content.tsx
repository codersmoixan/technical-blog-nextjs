import Layout from 'containers/Creator/components/Layout'
import type { ReactNode } from 'react'

function ContentDataPage() {
  return <div>内容数据</div>
}

ContentDataPage.getLayout = (page: ReactNode) => <Layout>{page}</Layout>

export default ContentDataPage
