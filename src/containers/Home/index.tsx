import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material";
import Box from "@mui/material/Box";
import HomeSign from "containers/Home/components/HomeSign";
import TechnologySharing from "./components/TechnologySharing"
import Designer from "containers/Home/components/Designer";
import Category from "containers/Home/components/Category";

const backdrop = 'linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #13111C'

const useStyles = makeStyles((theme: Theme) => ({
  placeholder: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    zIndex: -1
  },
  content: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: theme.colorPalette.background.main
  }
}))

function Home() {
  const classes = useStyles()

  return (
    <>
      <HomeSign />
      <Box className={classes.placeholder}></Box>
      <Box className={classes.content}>
        <TechnologySharing />
        <Designer />
        <Category />
      </Box>
    </>
  )
}

export default Home
