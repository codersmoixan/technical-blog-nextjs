import Box, {BoxProps} from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import type { Theme } from "@mui/material";
import Typography from "@mui/material/Typography";
import UserInfo from "containers/Articles/components/UserInfo";
import AnchorPointer from "containers/Articles/components/AnchorPointer";
import Form  from "@/src/core/Form";
import useForm from "@/src/core/Form/hooks/useForm";
import FormTextarea from "components/Form/FormTextarea";
import Buttons from "components/Buttons";
import MediaQuery from "components/MediaQuery";

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
          marginTop: theme.spacing(2),
        }
      }
    }
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 150,
    '& .MuiButton-root': {
      height: 30,
      borderRadius: 4
    }
  },
  recommend: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
    backgroundColor: theme.colorPalette.background.main,
    '& .list': {
      padding: theme.spacing(2, 0, 0)
    },
    '& .item': {
      padding: theme.spacing(2, 0),
      '&.item-border': {
        borderBottom: `1px solid ${theme.colorPalette.primary.placeholder}`,
      },
      '& .info': {
        display: 'flex',
        alignItems: 'center',
        marginTop: theme.spacing(2),
        '& .avatar': {
          marginRight: theme.spacing(1),
          width: 24,
          height: 24,
          borderRadius: '50%',
          backgroundColor: theme.palette.primary.main
        }
      }
    }
  },
  fixedComment: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    padding: theme.spacing(2),
    width: '100%',
    height: 55,
    zIndex: 99,
    backgroundColor: theme.colorPalette.background.default,
    boxShadow: '0 -2px 10px rgb(0 0 0 / 5%)',
    '& .form': {
      margin: '0 auto',
      display: 'flex',
      alignItems: 'flex-end',
      width: theme.config.contentWidth,
      '& .textarea': {
        marginRight: theme.spacing(2),
        width: '70%'
      },
    }
  }
}))

function ArticleContent(props: ArticleContentProps) {
  const { className } = props
  const classes = useStyles(props)
  const { observer } = useForm()
  const { observer: fullObserver } = useForm()

  const handleSubmit = (options: any) => {
    console.log(options);
  }

  const handleBottomSubmit = (options: any) => {
    console.log(options);
  }

  return (
    <Box className={clsx(className, classes.root)}>
      <Box className={classes.article}>
        <Box className={classes.header}>
          <Typography variant="h2">
            Gas???ChatGPT??????????????????????????????
          </Typography>
          <UserInfo className={classes.articleInfo}>
            <Typography variant="body1" fontWeight={700} slot="main">
              ??????Reborn
            </Typography>
            <Typography variant="caption" color="textSecondary" slot="description">
              2023.02.03 16:58:46 ??????2,770 ??????2,306
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
            <FormTextarea name="comment" placeholder="??????????????????..." rules={{ required: '?????????????????????' }} />
            <Box className={clsx(classes.buttons, 'buttons')}>
              <Buttons type="submit" variant="contained">??????</Buttons>
              <Buttons variant="outlined">??????</Buttons>
            </Box>
          </Form>
        </Box>
        <AnchorPointer message="???????????? 3" />
      </Box>
      <Box className={classes.recommend}>
        <AnchorPointer message="????????????" />
        <Box className="list">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <Box className={clsx('item', {
              'item-border': index !== 4
            })} key={item}>
              <Typography variant="subtitle1" fontWeight={700}>
                ??????????????????????????????????????????????????????23???????????????????????????????????????
              </Typography>
              <Typography variant="body1" color="textSecondary">
                2015????????????????????????????????????????????????????????????????????????????????????????????????2015??????????????????????????????????????????2C???...
              </Typography>
              <Box className="info">
                <Box className="avatar"></Box>
                <Typography variant="caption" color="textSecondary">
                  ??????same ??????364 ??????0 ???1
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <MediaQuery media="pc">
        <Box className={classes.fixedComment}>
          <Form observer={fullObserver} onFinish={handleSubmit} className="form">
            <Box className="textarea">
              <FormTextarea
                name="comment"
                placeholder="??????????????????..."
                rules={{ required: '?????????????????????' }}
                rows={1}
              />
            </Box>
            <Box className={clsx(classes.buttons, 'buttons')}>
              <Buttons type="submit" variant="contained">??????</Buttons>
              <Buttons variant="outlined">??????</Buttons>
            </Box>
          </Form>
        </Box>
      </MediaQuery>
    </Box>
  )
}

export default ArticleContent
