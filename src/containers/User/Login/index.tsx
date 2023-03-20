import Typography from '@mui/material/Typography'
import Form from 'core/Form'
import useForm from 'core/Form/hooks/useForm'
import FormText from 'components/Form/FormText'
import React from 'react'
import Box from '@mui/material/Box'
import Buttons from 'components/Buttons'
import Divider from '@mui/material/Divider'
import type { FieldValues } from 'react-hook-form/dist/types/fields'
import { GitHub } from '@mui/icons-material'
import MediaQuery from 'core/MediaQuery'
import makeStyles, { Theme } from 'core/makeStyles'
import Image from 'next/image'
import { Error } from '@mui/icons-material'
import routes from '@/src/routes'
import {useRouter} from "next/router";

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
		signInForm: {
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
				padding: theme.spacing(2, 0),
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
		example: {
			display: 'flex',
			padding: theme.spacing(1.5, 2),
			margin: theme.spacing(5, 0, -2),
			borderRadius: 8,
			backgroundColor: 'rgb(97, 243, 243)',
			color: 'rgb(0, 55, 104)',
			'& .value': {
				marginLeft: theme.spacing(2),
				fontSize: 14
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
	'Login'
)

function Login() {
	const classes = useStyles()
  const history = useRouter()
	const { observer } = useForm()

	const handleLogin = (options: FieldValues) => {
		console.log(options)
	}

  const handleToRegister = () => history.replace(routes.register)

	return (
		<div className={classes.root}>
			<MediaQuery media={['pc', 'pad']}>
				<div className={classes.welcome}></div>
			</MediaQuery>
			<div className={classes.signInForm}>
				<div className={classes.formContent}>
					<div className="title">
						<Typography variant="h4">Sign in Smoixan</Typography>
						<div className="desc">
							<Typography>新用户？</Typography>
							<Buttons variant="text" className="create" onClick={handleToRegister} inline>
								<Typography color="primary">快来创建一个吧</Typography>
							</Buttons>
						</div>
					</div>
					<div className={classes.example}>
						<div className="error-icon">
							<Error />
						</div>
						<div className="value">
							账号 : <strong>smoixan@qq.com</strong> / 密码 : <strong>smoixan1234</strong>
						</div>
					</div>
					<div className="form">
						<Form observer={observer} onFinish={handleLogin}>
							<Box my={3}>
								<FormText
									label="账号"
									name="account"
									rules={{ required: '请输入你的账号' }}
									placeholder="输入你的账号"
								/>
							</Box>
							<Box my={3}>
								<FormText
									label="密码"
									name="password"
									rules={{ required: '请输入你的密码' }}
									placeholder="输入你的密码"
								/>
							</Box>
							<Box mb={2} mt={-1} textAlign="right">
								<Buttons inline href={routes.resetPassword}>
									<Typography component="span">忘记密码?</Typography>
								</Buttons>
							</Box>
							<Buttons
								variant="contained"
								fullWidth
								type="submit"
								className={classes.submit}
							>
								登录
							</Buttons>
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

export default Login
