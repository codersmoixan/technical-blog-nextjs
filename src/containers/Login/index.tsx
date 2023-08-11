/**
 * @author zhengji.su
 * @description Login
 */

import React, { useState, useEffect } from 'react'
import CenterDialog from 'components/Dialog/CenterDialog'
import makeStyles, { Theme } from 'core/makeStyles'
import Form, { FormProps } from 'core/Form'
import useForm from 'core/Form/hooks/useForm'
import FormText from 'components/Form/FormText'
import Buttons from 'components/Buttons'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { GitHub } from '@mui/icons-material'
import Image from 'next/image'
import { getTokenApi } from './api'
import useLogin from './hooks/useLogin'
import useGoToLogin from 'containers/Login/hooks/useGoToLogin'

const useStyles = makeStyles((theme: Theme) => ({
	content: {
		display: 'flex',
		padding: theme.spacing(3, 0),
		width: 640,
		boxSizing: 'border-box'
	},
	dialogTitle: {
		padding: theme.spacing(3, 4),
		borderBottom: `1px solid ${theme.colorPalette.primary.secondary}`,
		'& .MuiTypography-root': {
			lineHeight: 1
		}
	},
	form: {
		width: 320
	},
	other: {
		flex: 1,
		paddingLeft: theme.spacing(4),
		marginLeft: theme.spacing(4),
		borderLeft: `1px solid ${theme.colorPalette.primary.secondary}`
	},
	otherLogin: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(4, 0, 0),
		justifyContent: 'space-between',
		textAlign: 'center',
		'& .MuiButton-root': {
			minWidth: 35
		}
	},
	checkMode: {
		padding: 0,
		minHeight: 'auto',
		height: 'auto'
	}
}))

function Login() {
	const classes = useStyles()
	const { observer } = useForm()
	const { getToken, loading } = useLogin()
	const { open, toggleLogin } = useGoToLogin()

	const handleLogin = (options: any) => getToken(options)

	return (
		<CenterDialog open={open} title="登陆您的账号" classes={{ title: classes.dialogTitle }} onClose={() => toggleLogin(false)}>
			<div className={classes.content}>
				<div className={classes.form}>
					<Box pb={2}>
						<Typography variant="subtitle1" fontWeight={700}>
							密码登陆
						</Typography>
					</Box>
					<Form observer={observer} onFinish={handleLogin}>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<FormText name="username" placeholder="输入用户名" rules={{ required: true }} />
							</Grid>
							<Grid item xs={12}>
								<FormText name="password" placeholder="请输入密码" type="password" rules={{ required: true }} />
							</Grid>
							<Grid item xs={12}>
								<Buttons variant="contained" fullWidth type="submit">
									登陆
								</Buttons>
							</Grid>
						</Grid>
					</Form>
					<div className={classes.otherLogin}>
						<Box display="flex" alignItems="center">
							<Typography>其他登陆：</Typography>
							<Buttons inline>
								<Typography component="span" display="flex" alignItems="center">
									<GitHub />
								</Typography>
							</Buttons>
							<Buttons inline>
								<Image src="/icons/ic_wechat.svg" width={26} height={26} alt="ic_wechat" />
							</Buttons>
						</Box>
						<Buttons variant="text" className={classes.checkMode} loading={loading}>
							<Typography>验证码登陆</Typography>
						</Buttons>
					</div>
				</div>
				<div className={classes.other}></div>
			</div>
		</CenterDialog>
	)
}

export default Login
