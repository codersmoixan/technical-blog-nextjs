import Typography from "@mui/material/Typography";
import Buttons from "components/Buttons";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import routes from "@/src/routes";
import Box from "@mui/material/Box"
import Image from "next/image";
import HeroLight1 from "assets/images/home/hero_light_1.png"
import HeroLight2 from "assets/images/home/hero_light_2.png"
import type { BoxProps } from "@mui/material/Box";
import type { Theme } from "@mui/material";
import MediaQuery from "components/MediaQuery";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '100vh',
    zIndex: 1,
    background: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)) center center / cover no-repeat, url(/images/home/overlay_2.jpg)',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  },
  banner: {
    display: 'flex',
    margin: '0 auto',
    width: theme.status.contentWidth,
    height: 'auto',
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(9, 0, 0),
      justifyContent: 'flex-start',
      width: '100%',
    },
    color: theme.palette.text.primary,
  },
  notice: {
    margin: theme.spacing(18, 'auto'),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 480,
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(6, 2),
      width: '100%'
    }
  },
  prominent: {
    fontFamily: 'Barlow Black',
    letterSpacing: 6,
    background: '-webkit-linear-gradient(300deg, rgb(118, 53, 220) 0%, rgb(255, 171, 0) 25%, rgb(118, 53, 220) 50%, rgb(255, 171, 0) 75%, rgb(118, 53, 220) 100%) 0% 0% / 400%',
    ['-webkit-background-clip']: 'text',
    color: theme.status.transparent,
    animation: `$prominentAnimate 20s linear infinite`
  },
  '@keyframes prominentAnimate': {
    '0%': {
      backgroundPosition: '0% center',
    },
    '50%': {
      backgroundPosition: '100% center',
    },
    '100%': {
      backgroundPosition: '0% center',
    }
  },
  subtitle: {
    margin: theme.spacing(3, 0),
    width: 420,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  startShare: {
    width: 195,
    height: 50,
    fontSize: 16,
    '&.MuiButton-contained': {
      background: 'linear-gradient(76.35deg, rgb(128, 26, 230) 15.89%, rgb(162, 26, 230) 89.75%)'
    }
  },
  rotation: {
    display: 'flex',
    position: 'relative',
    marginLeft: theme.spacing(10),
    width: 616,
    height: 919
  },
  rotationContent: {
    display: 'flex',
    position: 'absolute',
    overflow: 'hidden',
    marginTop: theme.spacing(11),
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      height: '100%'
    },
    '& img': {
      width: '100%',
      height: '100%'
    }
  },
  left: {
    width: 344,
    animation: `$leftRotationAnimate 120s linear infinite`
  },
  '@keyframes leftRotationAnimate': {
    '0%': {
      transform: 'translateY(-50%)',
    },
    '100%': {
      transform: 'translateY(0%)',
    },
  },
  right: {
    marginLeft: theme.spacing(-2),
    width: 720,
    animation: `$rightRotationAnimate 120s linear infinite`
  },
  '@keyframes rightRotationAnimate': {
    '0%': {
      transform: 'translateY(0%)',
    },
    '100%': {
      transform: 'translateY(-50%)',
    },
  },
}))

function HomeSign(props: BoxProps) {
  const classes = useStyles(props)
  const history = useRouter()

  const handleToShare = () => history.push(routes.sharing())

  return (
    <Box className={classes.root}>
      <Box className={classes.banner}>
        <Box className={classes.notice}>
          <Typography variant="h2" fontWeight={700} color="inherit">
            你一路颠沛流离
          </Typography>
          <Typography variant="h2" fontWeight={700} color="inherit">
            到最遥远的地方旅行
          </Typography>
          <Typography variant="h1" fontWeight={700} color="inherit" className={classes.prominent}>
            Smoixan
          </Typography>
          <Typography
            variant="body1"
            classes={{ root: classes.subtitle }}
            color="inherit"
          >
            未来，就是你站在茫茫大海的这一边，遥望着海的那一边，充满好奇心，憧憬着对海那边的向往。
          </Typography>
          <Buttons
            variant="contained"
            className={classes.startShare}
            onClick={handleToShare}
          >
            开始你的旅行
          </Buttons>
        </Box>
        <MediaQuery media={['pad', 'pc']}>
          <Box className={classes.rotation}>
            <Box className={classes.rotationContent}>
              <Box className={classes.left}>
                <Image src={HeroLight1} alt="hero_light" className="top" />
                <Image src={HeroLight1} alt="hero_light" className="bottom" />
              </Box>
              <Box className={classes.right}>
                <Image src={HeroLight2} alt="hero_light" />
                <Image src={HeroLight2} alt="hero_light" />
              </Box>
            </Box>
          </Box>
        </MediaQuery>
      </Box>
    </Box>
  )
}

export default HomeSign