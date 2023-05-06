import CretorLayout from 'containers/Creator/components/CretorLayout'
import type { ReactNode } from 'react'

function ContentDataPage() {
  return <div>内容数据</div>
}

ContentDataPage.getLayout = (page: ReactNode) => <CretorLayout>{page}</CretorLayout>

export default ContentDataPage
