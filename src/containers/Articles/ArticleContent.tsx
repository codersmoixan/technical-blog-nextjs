import Box, {BoxProps} from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import type { Theme } from "@mui/material";
import Typography from "@mui/material/Typography";
import UserInfo from "containers/Articles/components/UserInfo";
import AnchorPointer from "containers/Articles/components/AnchorPointer";
import Form  from "components/Form/Form";
import useForm from "hooks/common/useForm";
import FormTextarea from "components/Form/FormTextarea";
import Buttons from "components/Buttons";

interface ArticleContentProps extends BoxProps {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
  },
  article: {
    padding: theme.spacing(3),
    backgroundColor: theme.colorPalette.background.main
  },
  header: {

  },
  content: {
    padding: theme.spacing(2, 0)
  },
  articleInfo: {
    marginTop: theme.spacing(1)
  },
  comment: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
    backgroundColor: theme.colorPalette.background.main,
    '& .writing-board': {
      display: 'flex',
      marginBottom: theme.spacing(4),
      '& .avatar': {
        marginRight: theme.spacing(2),
        width: 40,
        height: 40,
        borderRadius: '50%',
        backgroundColor: theme.palette.primary.main,
      },
      '& .form': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        flex: 1,
        '& .buttons': {
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: theme.spacing(2),
          width: 150,
          '& .MuiButton-root': {
            height: 30,
            borderRadius: 4
          }
        }
      }
    }
  },
  recommend: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
    backgroundColor: theme.colorPalette.background.main
  }
}))

function ArticleContent(props: ArticleContentProps) {
  const { className } = props
  const classes = useStyles(props)
  const { observer } = useForm()

  const handleSubmit = (options: any) => {
    console.log(options);
  }

  return (
    <Box className={clsx(className, classes.root)}>
      <Box className={classes.article}>
        <Box className={classes.header}>
          <Typography variant="h2">
            Gas、ChatGPT对国内校园市场的启发
          </Typography>
          <UserInfo className={classes.articleInfo}>
            <Typography variant="body1" fontWeight={700} slot="main">
              孙凌Reborn
            </Typography>
            <Typography variant="caption" color="textSecondary" slot="description">
              2023.02.03 16:58:46 字数2,770 阅读2,306
            </Typography>
          </UserInfo>
        </Box>
        <Box component="aside" className={classes.content}>
          66666
        </Box>
      </Box>
      <Box className={classes.comment}>
        <Box className="writing-board">
          <Box className="avatar"></Box>
          <Form observer={observer} className="form" onFinish={handleSubmit}>
            <FormTextarea name="comment" placeholder="写下你的评论..." rules={{ required: '请输入你的评论' }} />
            <Box className="buttons">
              <Buttons type="submit" variant="contained">发布</Buttons>
              <Buttons variant="outlined">取消</Buttons>
            </Box>
          </Form>
        </Box>
        <AnchorPointer message="全部评论 3" />
      </Box>
      <Box className={classes.recommend}>
        <AnchorPointer message="推荐阅读" />
      </Box>
    </Box>
  )
}

export default ArticleContent
