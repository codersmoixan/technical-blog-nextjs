import Layout from "containers/Creator/components/Layout";
import Buttons from "components/Buttons";
import routes from "@/src/routes";
import Typography from "@mui/material/Typography";
import {ReactNode} from "react";

function ArticlePage() {
  return (
    <div>文章管理</div>
  )
}

ArticlePage.getLayout = (page: ReactNode) => (
  <Layout>
    {page}
  </Layout>
)

export default ArticlePage
