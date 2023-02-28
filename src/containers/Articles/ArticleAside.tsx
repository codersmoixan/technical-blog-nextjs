import Box, { BoxProps } from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import type { Theme } from "@mui/material";
import UserInfo from "containers/Articles/components/UserInfo";
import Typography from "@mui/material/Typography";
import AnchorPointer from "containers/Articles/components/AnchorPointer";

interface ArticleAsideProps extends BoxProps {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'sticky',
    top: 72,
  },
  user: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.colorPalette.background.main
  },
  userInfo: {
    padding: theme.spacing(2, 0),
    marginTop: theme.spacing(-2),
    borderBottom: `1px solid ${theme.colorPalette.primary.placeholder}`
  },
  other: {
    marginBottom: theme.spacing(-2),
    cursor: 'pointer',
    '& .item': {
      margin: theme.spacing(2, 0)
    }
  },
  recommend: {
    padding: theme.spacing(2),
    backgroundColor: theme.colorPalette.background.main,
    '& .list': {
      margin: theme.spacing(2, 0, -2),
      '& .item': {
        margin: theme.spacing(2, 0)
      }
    },
  }
}))

function ArticleAside(props: ArticleAsideProps) {
  const { className } = props
  const classes = useStyles(props)

  return (
    <Box className={clsx(className, classes.root)}>
      <Box className={classes.user}>
        <UserInfo className={classes.userInfo}>
          <Typography variant="body1" fontWeight={700} slot="main">
            孙凌Reborn
          </Typography>
          <Typography variant="caption" color="textSecondary" slot="description">
            总资产10
          </Typography>
        </UserInfo>
        <Box className={classes.other}>
          {[1, 2, 3].map(item => (
            <Box key={item} className="item">
              <Typography variant="body1">2023年，去做离钱更近的事</Typography>
              <Typography variant="caption" color="textSecondary">
                阅读 168
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className={classes.recommend}>
        <AnchorPointer message="相关文章" />
        <Box className="list">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
            <Box key={item} className="item">
              <Typography component="a" variant="body1">拿校草当挡箭牌气心机闺蜜和前男友，没想到校草当真了</Typography>
              <Typography component="p" variant="caption" color="textSecondary">
                阅读 168
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default ArticleAside
