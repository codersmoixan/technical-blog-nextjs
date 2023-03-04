import Typography from "@mui/material/Typography";
import Form from "components/Form/Form";
import useForm from "hooks/form/useForm";
import FormText from "components/Form/FormText";
import React from "react";
import Box from "@mui/material/Box";
import Buttons from "components/Buttons";
import Divider from "@mui/material/Divider";
import type { FieldValues } from "react-hook-form/dist/types/fields";
import { GitHub } from "@mui/icons-material";
import MediaQuery from "components/MediaQuery";
import Fab from "@mui/material/Fab";
import ThemeSettingIcon from "containers/App/components/ThemeSettingIcon";
import useSpeedDial from "containers/App/hooks/useSpeedDial";
import makeStyles, { Theme } from "utils/styles/makeStyles";
import Image from "next/image";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    height: '100vh',
    boxSizing: 'border-box',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
      width: '100%',
      backgroundColor: theme.colorPalette.background.default,
    }
  },
  welcome: {
    flex: 1
  },
  button: {
    padding: 0,
    minHeight: 'auto',
    height: 'auto',
  },
  signInForm: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 480,
    backgroundColor: theme.colorPalette.background.default,
    [theme.breakpoints.down('md')]: {
      width: '100%',
      backgroundColor: theme.colorPalette.primary.transparent,
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
        height: 49
      },
      '& .MuiButton-contained': {
        height: 49
      }
    },
    '& .submit': {
      backgroundColor: 'rgb(33, 43, 54)'
    }
  },
  divider: {
    '&::before, &::after': {
      borderTop: `1px dashed ${theme.colorPalette.text.secondary}`,
    }
  },
  other: {
    padding: theme.spacing(4),
    textAlign: 'center',
    '& .MuiButton-root': {
      minWidth: 50
    }
  },
  fab: {
    position: 'fixed',
    right: 24,
    bottom: 24,
    backgroundColor: theme.colorPalette.background.main,
    boxShadow: 'rgb(99 115 129 / 36%) -12px 12px 32px -4px',
    '&:hover': {
      backgroundColor: theme.colorPalette.background.default
    }
  }
}), 'Login')

function Login() {
  const classes = useStyles()
  const { updateSpeedDial } = useSpeedDial()
  const { observer } = useForm()

  const handleLogin = (options: FieldValues) => {
    console.log(options);
  }

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
              <Typography className="create" color="primary">快来创建一个吧</Typography>
            </div>
          </div>
          <div className="form">
            <Form observer={observer} onFinish={handleLogin}>
              <Box my={3}>
                <FormText label="账号" name="account" rules={{ required: '请输入你的账号' }} placeholder="输入你的账号" />
              </Box>
              <Box my={3}>
                <FormText label="密码" name="password" rules={{ required: '请输入你的密码' }} placeholder="输入你的密码" />
              </Box>
              <Box mb={2} mt={-1} textAlign="right">
                <Buttons className={classes.button}>
                  <Typography component="span">
                    忘记密码
                  </Typography>
                </Buttons>
              </Box>
              <Buttons variant="contained" fullWidth type="submit" className="submit">
                登录
              </Buttons>
            </Form>
          </div>
          <Divider className={classes.divider}>
            <Typography color="textSecondary">或者</Typography>
          </Divider>
          <div className={classes.other}>
            <Buttons className={classes.button}>
              <Typography component="span" display="flex" alignItems="center">
                <GitHub />
              </Typography>
            </Buttons>
            <Buttons className={classes.button}>
              <Image src="/icons/ic_wechat.svg" width={26} height={26} alt="ic_wechat"/>
            </Buttons>
          </div>
        </div>
      </div>
      <Fab className={classes.fab} onClick={() => updateSpeedDial('setting')}>
        <ThemeSettingIcon />
      </Fab>
    </div>
  )
}

export default Login
