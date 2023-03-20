import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'

const useStyles = makeStyles((theme: Theme) => ({
	root: {}
}))

function HomePage() {
	const classes = useStyles()

	return <div className={classes.root}>创作者中心</div>
}

export default HomePage
