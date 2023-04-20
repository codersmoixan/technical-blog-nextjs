import Layout from 'containers/Creator/components/Layout'
import type { ReactNode } from 'react'

function ArticlePage() {
	return <div>文章管理</div>
}

ArticlePage.getLayout = (page: ReactNode) => <Layout>{page}</Layout>

export default ArticlePage
