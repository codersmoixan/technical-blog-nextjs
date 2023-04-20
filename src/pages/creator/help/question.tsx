import Layout from 'containers/Creator/components/Layout'
import type { ReactNode } from 'react'

function QuestionPage() {
  return <div>常见问题</div>
}

QuestionPage.getLayout = (page: ReactNode) => <Layout>{page}</Layout>

export default QuestionPage
