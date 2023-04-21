import Layout from 'containers/Creator/components/Layout'
import type { ReactNode } from 'react'
import Tags from "containers/Creator/components/Tags";

function ColumnPage() {
  return (
    <div>
      <Tags />
    </div>
  )
}

ColumnPage.getLayout = (page: ReactNode) => <Layout>{page}</Layout>

export default ColumnPage
