import Banner from "components/Layout/Banner";
import Typography from "@mui/material/Typography";
import Buttons from "components/Buttons";
import Content from "components/Layout/Content";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {useRouter} from "next/router";
import routes from "@/src/routes";
import {BoxProps} from "@mui/material/Box";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, .9)'
  },
  banner: {
    marginTop: theme.spacing(15),
    width: 600,
    height: 'auto',
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(9),
      justifyContent: 'flex-start',
      width: 'auto',
    },
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'flex-end',
    },
    color: theme.palette.text.primary,
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
    margin: theme.spacing(3, 0)
  },
  startShare: {
    width: 195,
    height: 50,
    fontSize: 16,
    '&.MuiButton-contained': {
      background: 'linear-gradient(76.35deg, rgb(128, 26, 230) 15.89%, rgb(162, 26, 230) 89.75%)'
    }
  },
}))

function HomeSign(props: BoxProps) {
  const classes = useStyles(props)
  const history = useRouter()

  const handleToShare = () => history.push(routes.sharing())

  return (
    <Content className={classes.container}>
      <Banner className={classes.banner}>
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
          未来，就是你站在茫茫大海的这一边，遥望着海的那一边，充满好奇心，憧憬着对海那边的向往，正是对未知的不了解和向往，所以才有了去追逐未来的勇气。
        </Typography>
        <Buttons
          variant="contained"
          className={classes.startShare}
          onClick={handleToShare}
        >
          开始你的旅行
        </Buttons>
      </Banner>
    </Content>
  )
}

export default HomeSign
