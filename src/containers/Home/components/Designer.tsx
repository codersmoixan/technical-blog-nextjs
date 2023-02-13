import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material";
import Box from "@mui/material/Box";
import FullTriangle from "containers/Home/components/FullTriangle";
import Image from "next/image";
import Content from "components/Layout/Content";
import Typography from "@mui/material/Typography";
import GradientTypography from "components/Typography/GradientTypography";
import Buttons from "components/Buttons";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    backgroundColor: theme.palette.background.default
  },
  topTriangle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    color: theme.palette.background.default,
    zIndex: 9
  },
  content: {
    display: 'flex',
  },
  banner: {
    display: 'flex',
    alignItems: 'center',
    width: 575,
    height: 576
  },
  bannerValue: {
    '& .MuiTypography-caption': {
      fontWeight: 700,
      color: theme.palette.text.secondary
    },
  },
  gradientTypography: {
    margin: theme.spacing(3, 0, 5),
    fontSize: '3rem',
    lineHeight: 1.3,
    background: '-webkit-linear-gradient(300deg, rgb(118, 53, 220) 0%, rgb(255, 171, 0) 100%)',
    letterSpacing: 0,
    ['-webkit-background-clip']: 'text',
  },
  image: {
    position: 'relative',
    width: 576,
    height: 594,
    boxShadow: 'rgb(145 158 171 / 40%) -40px 80px 80px',
    '& image': {
      position: 'absolute',
      left: 0,
      top: 0
    }
  },
  bottomTriangle: {
    transform: 'rotate(180deg)',
    color: theme.colorPalette.background.dark
  },
}))

function Designer() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <FullTriangle className={classes.topTriangle} />
      <Content className={classes.content}>
        <Box className={classes.banner}>
          <Box className={classes.bannerValue}>
            <Typography variant="caption">UI DESIGNER</Typography>
            <GradientTypography animate={false} className={classes.gradientTypography}>
              For Designer
            </GradientTypography>
            <Buttons variant="contained">
              分享你的灵感瞬间
            </Buttons>
          </Box>
        </Box>
        <Box className={classes.image}>
          <Image src="/images/home/for_designer.jpg" alt="for_designer" width="1200" height="675" />
        </Box>
      </Content>
      <FullTriangle className={classes.bottomTriangle} />
    </Box>
  )
}

export default Designer
