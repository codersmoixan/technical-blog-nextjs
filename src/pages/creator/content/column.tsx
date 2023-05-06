import CretorLayout from 'containers/Creator/components/CretorLayout'
import type { ReactNode } from 'react'
import Tags from "containers/Creator/components/Tags";

function ColumnPage() {
  return (
    <div>
      <Tags />
    </div>
  )
}

ColumnPage.getLayout = (page: ReactNode) => <CretorLayout>{page}</CretorLayout>

export default ColumnPage
