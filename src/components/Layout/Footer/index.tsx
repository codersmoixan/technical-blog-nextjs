/**
 * @author zhengji.su
 * @description Footer
 */

import makeStyles, { Theme } from "core/makeStyles";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    position: 'relative',
    width: '100%',
    height: 700,
    background: `linear-gradient(rgba(252, 252, 252, 0.9), rgba(252, 252, 252, 0.9)) center center / cover no-repeat, url(/images/home/overlay_2.jpg)`,
    backgroundSize: '100% 100%',
  },
  content: {
    flex: 1
  },
  footer: {
    height: 50,
    fontSize: 12
  }
}), 'Footer')

function Footer() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.content}></div>
      <div className={classes.footer}>
        <Typography component="span" variant="inherit" mr={2}>
          COPYRIGHT © {dayjs(Date.now()).format('YYYY')} SMOIXAN. ALL RIGHTS RESERVED.
        </Typography>
        <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" rel="noreferrer">
          蜀ICP备2023004446号
        </a>
      </div>
    </div>
  )
}

export default Footer
