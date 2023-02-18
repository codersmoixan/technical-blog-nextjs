import { memo } from "react";
import Typography from "@mui/material/Typography";
import Buttons from "components/Buttons";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import routes from "@/src/routes";
import Box from "@mui/material/Box"
import MediaQuery from "components/MediaQuery";
import clsx from "clsx";
import { availableIcons } from "containers/Home/constants";
import type { BoxProps } from "@mui/material/Box";
import type { Theme } from "@mui/material";
import GradientTypography from "components/Typography/GradientTypography";

const useStyles = makeStyles((theme: Theme) => ({
  ...theme.styles,
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '100vh',
    zIndex: 1,
    background: `linear-gradient(${theme.colorPalette.background.default}, ${theme.colorPalette.background.default}) center center / cover no-repeat, url(/images/home/overlay_2.jpg)`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  },
  banner: {
    display: 'flex',
    margin: '0 auto',
    width: theme.config.contentWidth,
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
      background: theme.colorPalette.gradient.button
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
  available: {
    marginTop: theme.spacing(5),
    width: 185,
  },
  availableTitle: {
    fontWeight: 700,
    color: theme.palette.text.secondary
  },
  availableIcons: {
    display: 'flex',
    marginTop: theme.spacing(3),
    width: '100%',
    color: theme.palette.text.secondary
  },
  svgIcon: {
    display: 'inline-block',
    width: 24,
    height: 24,
    backgroundColor: 'currentColor',
  }
}))

function HomeSign(props: BoxProps) {
  const classes = useStyles(props)
  const history = useRouter()

  const handleToShare = () => history.push(routes.sharing())

  return (
    <Box className={classes.root}>
      <Box className={classes.banner}>
        <Box className={classes.notice}>
          <Typography variant="h2" fontWeight={700}>
            你一路颠沛流离
          </Typography>
          <Typography variant="h2" fontWeight={700}>
            到最遥远的地方旅行
          </Typography>
          <GradientTypography>
            Smoixan
          </GradientTypography>
          <Typography
            variant="body1"
            classes={{ root: classes.subtitle }}
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
          <Box className={clsx(classes.available, classes.columnCenter)}>
            <Typography
              variant="caption"
              className={classes.availableTitle}
            >
              AVAILABLE FOR
            </Typography>
            <Box className={clsx(classes.availableIcons, classes.spaceBetweenCenter)}>
              {availableIcons.map(icon => (
                <span
                  key={icon.id}
                  className={classes.svgIcon}
                  style={{ ['-webkit-mask']: `url(${icon.icon}) center center / contain no-repeat` } as any}
                ></span>
              ))}
            </Box>
          </Box>
        </Box>
        <MediaQuery media={['pad', 'pc']}>
          <Box className={classes.rotation}>
            <Box className={classes.rotationContent}>
              <Box className={classes.left}>
                <img src="/images/home/hero_light_1.png" alt="hero_light" />
                <img src="/images/home/hero_light_1.png" alt="hero_light" />
              </Box>
              <Box className={classes.right}>
                <img src="/images/home/hero_light_2.png" alt="hero_light" />
                <img src="/images/home/hero_light_2.png" alt="hero_light" />
              </Box>
            </Box>
          </Box>
        </MediaQuery>
      </Box>
    </Box>
  )
}

export default memo(HomeSign)
