import Box, { BoxProps } from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'
import type { Theme } from '@mui/material'
import Typography from '@mui/material/Typography'
import UserInfo from 'containers/Articles/components/UserInfo'
import AnchorPointer from 'containers/Articles/components/AnchorPointer'
import Form from 'core/Form'
import useForm from 'core/Form/hooks/useForm'
import FormTextarea from 'components/Form/FormTextarea'
import Buttons from 'components/Buttons'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import useArticleStyles from "containers/Articles/useArticleStyles";

export interface Article {
	articleName: string
	content: string
	category: string
	updatedAt: string
	tag: string
	author: string
}

interface ArticleContentProps extends BoxProps {
  article: Article
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {},
	article: {
		padding: theme.spacing(3),
    borderRadius: 6,
		backgroundColor: theme.colorPalette.background.main,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2)
    }
	},
	header: {},
	content: {
		padding: theme.spacing(2, 0, 0),
	},
	articleInfo: {
		marginTop: theme.spacing(1)
	},
	comment: {
		padding: theme.spacing(3),
		marginTop: theme.spacing(2),
    borderRadius: 6,
		backgroundColor: theme.colorPalette.background.main,
		'& .writing-board': {
			display: 'flex',
			marginBottom: theme.spacing(4),
			'& .avatar': {
				marginRight: theme.spacing(2),
				width: 40,
				height: 40,
				borderRadius: '50%',
				backgroundColor: theme.palette.primary.main
			},
			'& .form': {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-end',
				flex: 1,
				'& .buttons': {
					marginTop: theme.spacing(2)
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
    borderRadius: 6,
		backgroundColor: theme.colorPalette.background.main,
		'& .list': {
			padding: theme.spacing(2, 0, 0)
		},
		'& .item': {
			padding: theme.spacing(2, 0),
			'&.item-border': {
				borderBottom: `1px solid ${theme.colorPalette.primary.placeholder}`
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
}))

function ArticleContent(props: ArticleContentProps) {
	const { className, article } = props
	const history = useRouter()
	const classes = useStyles(props)
  const articleClasses = useArticleStyles()
	const { observer } = useForm()
	const { observer: fullObserver } = useForm()
  console.log(article, 1352);

  // useEffect(() => {
	//   document.querySelectorAll('code').forEach(el => {
	//     hljs.highlightElement(el)
	//   })
	// }, [])

	const handleSubmit = (options: any) => {
		console.log(options)
	}

	const handleBottomSubmit = (options: any) => {
		console.log(options)
	}

	return (
    <Box className={clsx(className, classes.root)}>
      <Box className={classes.article}>
        <Box className={classes.header}>
          <Typography variant="h2">{article.articleName}</Typography>
          <UserInfo className={classes.articleInfo}>
            <Typography variant="body1" fontWeight={700} slot="main">
              {article.author ?? 'Smoixan'}
            </Typography>
            <Typography variant="caption" color="textSecondary" slot="description">
              {dayjs(article.updatedAt).format('YYYY-MM-DD HH:mm:ss')} 字数2,770 阅读2,306
            </Typography>
          </UserInfo>
        </Box>
        <Box
          component="aside"
          className={clsx(classes.content, articleClasses.root)}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </Box>
      <Box className={classes.comment}>
        <Box className="writing-board">
          <Box className="avatar"></Box>
          <Form observer={observer} className="form" onFinish={handleSubmit}>
            <FormTextarea
              name="comment"
              placeholder="写下你的评论..."
              rules={{ required: '请输入你的评论' }}
            />
            <Box className={clsx(classes.buttons, 'buttons')}>
              <Buttons type="submit" variant="contained">
                发布
              </Buttons>
              <Buttons variant="outlined">取消</Buttons>
            </Box>
          </Form>
        </Box>
        <AnchorPointer message="全部评论 3" />
      </Box>
      <Box className={classes.recommend}>
        <AnchorPointer message="推荐阅读" />
        <Box className="list">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <Box
              className={clsx('item', {
                'item-border': index !== 4
              })}
              key={item}
            >
              <Typography variant="subtitle1" fontWeight={700}>
                在企业级服务市场爆发的今天，盘点国内23款备受关注的企业级服务工具
              </Typography>
              <Typography variant="body1" color="textSecondary">
                2015年至今，中国的企业级服务市场迎来了属于自己的春天，业内人士更是将2015年视为“企业服务元年”。随着2C市...
              </Typography>
              <Box className="info">
                <Box className="avatar"></Box>
                <Typography variant="caption" color="textSecondary">
                  沈念same 阅读364 评论0 赞1
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
	)
}

export default ArticleContent
