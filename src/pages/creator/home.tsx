import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'
import Layout from "containers/Creator/components/Layout";
import Typography from "@mui/material/Typography";
import {ReactNode} from "react";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
    height: '100vh'
  }
}))

function HomePage() {
	const classes = useStyles()

	return (
    <div className={classes.root}>
      <Typography>首页</Typography>
    </div>
  )
}

HomePage.getLayout = (page: ReactNode) => (
  <Layout>
    {page}
  </Layout>
)

export default HomePage
