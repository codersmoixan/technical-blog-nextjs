/**
 * @author zhengji.su
 * @description NotFoundPage
 */

import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import NotFoundIcon from 'components/Icons/NotFoundIcon'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import SpringBox from 'components/Animation/SpringBox'
import Buttons from 'components/Buttons'
import { useRouter } from 'next/router'
import routes from '@/src/routes'
import type { Theme } from '@mui/material'

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100vh',
    boxSizing: 'border-box',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
    }
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	desc: {
		marginTop: theme.spacing(2),
		maxWidth: 450,
		textAlign: 'center'
	},
	backHome: {
		marginTop: theme.spacing(8)
	}
}))

function NotFoundPage() {
	const classes = useStyles()
	const history = useRouter()

	const handleToHome = () => {
		history.replace(routes.home)
	}

	return (
		<div className={classes.root}>
			<Head>
				<title>404 Page Not found</title>
				<meta name="description" content="Generated by create next app" />
			</Head>
			<div className={classes.content}>
				<SpringBox>
					<Typography variant="h2">Sorry, page not found!</Typography>
				</SpringBox>
				<SpringBox delay={0.5}>
					<Typography className={classes.desc}>
						Sorry, we were unable to find the page you were looking for. Maybe you entered
						the wrong URL? Be sure to check your spelling.
					</Typography>
				</SpringBox>
				<SpringBox delay={0.4}>
					<Box mt={10} px={3}>
						<NotFoundIcon />
					</Box>
				</SpringBox>
				<div className={classes.backHome}>
					<Buttons variant="contained" onClick={handleToHome}>
						Go To Home
					</Buttons>
				</div>
			</div>
		</div>
	)
}

export default NotFoundPage
