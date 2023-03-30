import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'
import Layout from "containers/Creator/components/Layout";
import Buttons from "components/Buttons";
import routes from "@/src/routes";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
    height: '100vh'
  }
}))

function HomePage() {
	const classes = useStyles()

	return (
    <Layout>
      <div className={classes.root}>
        <Buttons href={routes.creatorArticle}>
          <Typography>文章管理</Typography>
        </Buttons>
      </div>
    </Layout>
  )
}

export default HomePage
