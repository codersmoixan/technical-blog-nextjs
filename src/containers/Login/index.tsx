import Typography from "@mui/material/Typography";
import Form from "@/src/core/Form";
import useForm from "@/src/core/Form/hooks/useForm";
import FormText from "components/Form/FormText";
import React from "react";
import Box from "@mui/material/Box";
import Buttons from "components/Buttons";
import Divider from "@mui/material/Divider";
import type { FieldValues } from "react-hook-form/dist/types/fields";
import { GitHub } from "@mui/icons-material";
import MediaQuery from "components/MediaQuery";
import makeStyles, { Theme } from "core/makeStyles";
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
}), 'Login')

function Login() {
  const classes = useStyles()
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
              <Typography>????????????</Typography>
              <Typography className="create" color="primary">?????????????????????</Typography>
            </div>
          </div>
          <div className="form">
            <Form observer={observer} onFinish={handleLogin}>
              <Box my={3}>
                <FormText label="??????" name="account" rules={{ required: '?????????????????????' }} placeholder="??????????????????" />
              </Box>
              <Box my={3}>
                <FormText label="??????" name="password" rules={{ required: '?????????????????????' }} placeholder="??????????????????" />
              </Box>
              <Box mb={2} mt={-1} textAlign="right">
                <Buttons className={classes.button}>
                  <Typography component="span">
                    ????????????
                  </Typography>
                </Buttons>
              </Box>
              <Buttons variant="contained" fullWidth type="submit" className="submit">
                ??????
              </Buttons>
            </Form>
          </div>
          <Divider className={classes.divider}>
            <Typography color="textSecondary">??????</Typography>
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
    </div>
  )
}

export default Login
