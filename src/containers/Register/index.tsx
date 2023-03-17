import makeStyles, { Theme } from 'core/makeStyles'
import MediaQuery from 'core/MediaQuery'
import React from 'react'
import Typography from '@mui/material/Typography'
import Buttons from 'components/Buttons'
import routes from '@/src/routes'
import { useRouter } from 'next/router'
import useForm from 'core/Form/hooks/useForm'
import Form from 'core/Form'
import FormPassword from 'components/Form/FormPassword'
import Grid from '@mui/material/Grid'
import FormText from 'components/Form/FormText'
import Divider from '@mui/material/Divider'
import { GitHub } from '@mui/icons-material'
import Image from 'next/image'
import {useRegisterMutation} from "containers/Register/queries";

const useStyles = makeStyles(
	(theme: Theme) => ({
		root: {
			display: 'flex',
			height: '100vh',
			boxSizing: 'border-box',
			[theme.breakpoints.down('md')]: {
				padding: theme.spacing(2),
				width: '100%',
				backgroundColor: theme.colorPalette.background.default
			}
		},
		welcome: {
			flex: 1
		},
		registerForm: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			width: 480,
			backgroundColor: theme.colorPalette.background.default,
			[theme.breakpoints.down('md')]: {
				width: '100%',
				backgroundColor: theme.colorPalette.primary.transparent
			}
		},
		formContent: {
			width: 352,
			'& .desc': {
				display: 'flex',
				marginTop: theme.spacing(2)
			},
			'& .form': {
				padding: theme.spacing(5, 0, 2),
				'& .MuiInputBase-input': {
					height: 56
				},
				'& .MuiButton-contained': {
					height: 48
				}
			}
		},
		submit: {
			backgroundColor: 'rgb(33, 43, 54)',
			'&.MuiButton-root:hover': {
				backgroundColor: 'rgba(33, 43, 54, 0.94)'
			}
		},
		divider: {
			'&::before, &::after': {
				borderTop: `1px dashed ${theme.colorPalette.text.secondary}`
			}
		},
		other: {
			padding: theme.spacing(4),
			textAlign: 'center',
			'& .MuiButton-root': {
				minWidth: 50
			}
		}
	}),
	'Register'
)

function Register() {
	const classes = useStyles()
	const history = useRouter()
  const { mutateAsync: register } = useRegisterMutation()
	const { observer } = useForm()

	const handleToLogin = () => history.replace(routes.login)

	const handleSubmit = async ({ username, password, firstname }: any) => {
    await register({
      username,
      password,
      nickname: firstname
    })
  }

	return (
		<div className={classes.root}>
			<MediaQuery media={['pc', 'pad']}>
				<div className={classes.welcome}></div>
			</MediaQuery>
			<div className={classes.registerForm}>
				<div className={classes.formContent}>
					<div className="title">
						<Typography variant="h4">Register your account</Typography>
						<div className="desc">
							<Typography>已经有了一个账号？</Typography>
							<Buttons variant="text" onClick={handleToLogin} inline>
								<Typography color="primary">登录</Typography>
							</Buttons>
						</div>
					</div>
					<div className="form">
						<Form observer={observer} onFinish={handleSubmit}>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<FormText
										name="firstname"
										label="First name"
										rules={{ required: '请输入First name' }}
									/>
								</Grid>
								<Grid item xs={6}>
									<FormText
										name="lastname"
										label="Last name"
										rules={{ required: '请输入Last name' }}
									/>
								</Grid>
								<Grid item xs={12}>
									<FormText
										name="username"
										label="账号"
										rules={{ required: '请输入账号' }}
									/>
								</Grid>
								<Grid item xs={12}>
									<FormPassword
										name="password"
										label="密码"
										rules={{ required: '请输入密码' }}
									/>
								</Grid>
								<Grid item xs={12}>
									<Buttons
										variant="contained"
										fullWidth
										type="submit"
										className={classes.submit}
									>
										注册
									</Buttons>
								</Grid>
							</Grid>
						</Form>
					</div>
					<Divider className={classes.divider}>
						<Typography color="textSecondary">或者</Typography>
					</Divider>
					<div className={classes.other}>
						<Buttons inline>
							<Typography component="span" display="flex" alignItems="center">
								<GitHub />
							</Typography>
						</Buttons>
						<Buttons inline>
							<Image src="/icons/ic_wechat.svg" width={26} height={26} alt="ic_wechat" />
						</Buttons>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Register
