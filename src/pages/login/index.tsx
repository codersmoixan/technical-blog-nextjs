/**
 * @author zhengji.su
 * @description Login
 */

import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import Head from "next/head";

const useStyles = makeStyles((theme: Theme) => ({
  root: {

  }
}))

function Login() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Head>
        <title>登录你的账号</title>
        <meta name="description" content="Login" />
      </Head>
    </Box>
  )
}

export default Login
