import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Content from "components/Layout/Content";
import { useTheme } from "@mui/material/styles";
import ScrollInView from "components/Layout/ScrollInView";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
  ...theme.styles,
  root: {
    paddingTop: theme.spacing(15),
    backgroundColor: theme.colorPalette.background.secondary
  },
  content: {

  },
  title: {
    '& .MuiTypography-h2': {
      margin: theme.spacing(3, 0, 2),
      textAlign: 'center'
    }
  },
}))

const initial = { transform: 'translateY(100px)' }

function Category() {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Box className={classes.root}>
      <Content className={classes.content}>
        <Box className={clsx(classes.title, classes.columnCenter)}>
          <ScrollInView initial={initial}>
            <Typography variant="caption" fontWeight={700} color={theme.palette.text.secondary}>BLOG CATEGORY</Typography>
          </ScrollInView>
          <ScrollInView textAlign="center">
            <Typography variant="h2">
              需要在这里寻找属于<br />你的学习和经验吗
            </Typography>
            <Typography variant="body1" color={theme.palette.text.secondary}>
              在这里可以选择适合你的模块
            </Typography>
          </ScrollInView>
        </Box>
      </Content>
    </Box>
  )
}

export default Category
