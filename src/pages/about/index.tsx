/**
 * @author zhengji.su
 * @description About
 */

import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Content from "components/Layout/Content";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing(7),
    display: 'flex',
    alignItems: 'center',
    height: '100vh'
  },
  content: {

  }
}))

function About() {
  const classes = useStyles()

  return (
    <Content className={classes.root}>
      <div className={classes.content}>
        <Typography variant="subtitle1">本站技术选型,均已开源</Typography>
        <Box display="flex">
          <Typography variant="body1">前端: &nbsp;</Typography>
          <Typography variant="body1">
            <a href="https://github.com/codersmoixan/technical-blog-nextjs" target="_blank" rel="noreferrer">NextJs + Redux-toolkit</a>
          </Typography>
        </Box>
        <Box display="flex">
          <Typography variant="body1">UI库: &nbsp;</Typography>
          <Typography variant="body1">
            <a href="https://mui.com/" target="_blank" rel="noreferrer">Material UI</a>
          </Typography>
        </Box>
        <Box display="flex">
          <Typography variant="body1">后端: &nbsp;</Typography>
          <Typography variant="body1">
            <a href="https://github.com/codersmoixan/technical-blog-server">Gin + MySQL + Casbin + Redis</a>
          </Typography>
        </Box>
      </div>
    </Content>
  )
}

export default About
