import Layout from 'containers/Creator/components/Layout'
import type { ReactNode } from 'react'

function ColumnPage() {
  return <div>专栏管理</div>
}

ColumnPage.getLayout = (page: ReactNode) => <Layout>{page}</Layout>

export default ColumnPage
