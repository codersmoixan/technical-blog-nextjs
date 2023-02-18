import Box from "@mui/material/Box";
import makeStyles, { Theme } from "utils/styles/makeStyles";
import Typography from "@mui/material/Typography";
import Content from "components/Layout/Content";
import { useTheme } from "@mui/material/styles";
import ScrollInView from "components/Layout/ScrollInView";
import clsx from "clsx";
import CategoryList from "containers/Home/components/CategoryList";

const useStyles = makeStyles((theme: Theme) => ({
  ...theme.styles,
  root: {
    padding: theme.spacing(15, 0),
    backgroundColor: theme.colorPalette.background.secondary
  },
  title: {
    marginBottom: theme.spacing(10),
    '& .MuiTypography-h2': {
      margin: theme.spacing(3, 0, 2),
      textAlign: 'center'
    }
  },
  content: {
    display: 'flex',
    margin: '0 auto',
    width: 1152,
    borderRadius: 16,
    border: `1px dashed ${theme.colorPalette.primary.colorSecondary}`
  },
  item: {
    width: '33%',
    borderLeft: `1px dashed ${theme.colorPalette.primary.colorSecondary}`,
    '&.category-list:first-of-type': {
      border: 'none'
    }
  }
}), 'HomeCategory')

const initial = { transform: 'translateY(100px)' }

function Category() {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Box className={classes.root}>
      <Content>
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
        <ScrollInView initial={initial}>
          <Box className={classes.content}>
            <CategoryList className={classes.item} title="开发 & 开发者" sinkerColor={theme.palette.primary.main} />
            <CategoryList className={classes.item} title="UI & Designer" sinkerColor="red" />
            <CategoryList className={classes.item} title="部署 & 运维" sinkerColor="orange" />
          </Box>
        </ScrollInView>
      </Content>
    </Box>
  )
}

export default Category
