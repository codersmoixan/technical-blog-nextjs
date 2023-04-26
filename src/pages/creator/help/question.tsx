import CretorLayout from 'containers/Creator/components/CretorLayout'
import type { ReactNode } from 'react'

function QuestionPage() {
  return <div>常见问题</div>
}

QuestionPage.getLayout = (page: ReactNode) => <CretorLayout>{page}</CretorLayout>

export default QuestionPage
