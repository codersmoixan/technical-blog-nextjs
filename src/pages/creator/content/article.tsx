import Layout from "containers/Creator/components/Layout";
import Buttons from "components/Buttons";
import routes from "@/src/routes";
import Typography from "@mui/material/Typography";

function ArticlePage() {
  return (
    <Layout>
      <div>文章管理</div>
      <Buttons href={routes.creatorHome}>
        <Typography>首页</Typography>
      </Buttons>
    </Layout>
  )
}

export default ArticlePage
