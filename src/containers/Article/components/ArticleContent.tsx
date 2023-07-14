import Box, { BoxProps } from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'
import type { Theme } from '@mui/material'
import Typography from '@mui/material/Typography'
import UserInfo from 'containers/Article/components/UserInfo'
import AnchorPointer from 'containers/Article/components/AnchorPointer'
import Form from 'core/Form'
import useForm from 'core/Form/hooks/useForm'
import FormTextarea from 'components/Form/FormTextarea'
import Buttons from 'components/Buttons'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import useArticleStyles from 'containers/Article/useArticleStyles'
import useComment from 'containers/Article/hooks/useComment'
import type { ArticleInfo } from 'containers/Article/types'
import Comment from "containers/Article/components/Comment";
import Prism from 'assets/prism/prism'
import useMount from "hooks/effect/useMount";
import {useRef} from "react";
import {KeyboardArrowDown} from "@mui/icons-material";
import {useTheme} from "@mui/material/styles";
import {value} from "dom7";
import If from "components/Layout/If";

interface ArticleContentProps extends BoxProps {
	article: ArticleInfo
}

const useStyles = makeStyles((theme: Theme) => {
  const isDark = theme.palette.mode === 'dark'

  return ({
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
      padding: theme.spacing(2, 0, 0)
    },
    articleInfo: {
      marginTop: theme.spacing(1)
    },
    comment: {
      padding: theme.spacing(3),
      marginTop: theme.spacing(2),
      borderRadius: 6,
      backgroundColor: theme.colorPalette.background.main,
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2)
      },
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
      minWidth: 150,
      '& .MuiButton-root': {
        height: 30,
        borderRadius: 4
      },
      '& .MuiButton-outlined': {
        marginLeft: theme.spacing(2)
      }
    },
    recommend: {
      padding: theme.spacing(3),
      marginTop: theme.spacing(2),
      borderRadius: 6,
      backgroundColor: theme.colorPalette.background.main,
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2)
      },
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
    group: {
      display: 'flex',
      margin: theme.spacing(4, 0, 2),
      [theme.breakpoints.down('md')]: {
        display: 'block'
      }
    },
    category: {
      display: 'flex',
      alignItems: 'center',
      marginRight: theme.spacing(5),
      '& .item': {
        backgroundColor: '#f2f3f5'
      }
    },
    tag: {
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(2)
      }
    },
    tagItem: {
      padding: theme.spacing(0.75, 1.5),
      marginLeft: theme.spacing(2),
      borderRadius: 4,
      backgroundColor: theme.colorPalette.background.opacity?.(0.1)
    },
    fetchMoreComment: {
      ...theme.styles.verticalCenter,
      height: 52,
      ...(isDark ? {
        color: theme.colorPalette.text.default
      } : {})
    }
  })
})

function ArticleContent(props: ArticleContentProps) {
	const { className, article } = props
  const theme = useTheme()
	const history = useRouter()
	const classes = useStyles(props)
	const articleClasses = useArticleStyles()
	const { observer, clearValues } = useForm()
	const { comment, commentTotal, submitLoading, getLoading, fetchMoreType, submit, setPageParam } = useComment(article.articleId)

  const contentRef = useRef(null)

  const articleContentLength = article.content.replace(/<[^>]*>/g, '').replace(/style="[^"]*"/g, '').trim();

  useMount(() => {
    Prism.highlightAllUnder(contentRef.current)
  })

  const handleSubmitComment = async (options: any) => {
    await submit({
      content: options.content,
      articleId: article.articleId
    })
    clearValues('content')
	}

  const handleFetchMoreComment = () => {
    setPageParam(value => ({
      ...value,
      page: value.page + 1,
    }))
  }

  return (
		<Box className={clsx(className, classes.root)}>
			<Box className={classes.article}>
				<Box className={classes.header}>
					<Typography variant="h2">{article.articleName}</Typography>
					<UserInfo className={classes.articleInfo}>
						<Typography variant="body1" fontWeight={700} slot="main">
							{article.authorInfo?.nickName ?? ''}
						</Typography>
						<Typography variant="caption" color="textSecondary" slot="description">
							{dayjs(article.updatedAt).format('YYYY-MM-DD HH:mm:ss')} 字数{articleContentLength.length} 阅读{article.views}
						</Typography>
					</UserInfo>
				</Box>
				<Box
          ref={contentRef}
					component="aside"
					className={clsx(classes.content, articleClasses.root)}
					dangerouslySetInnerHTML={{ __html: article.content }}
				/>
				<div className={classes.group}>
					<div className={classes.category}>
						<Typography>分类:</Typography>
						<div className={clsx(classes.tagItem, 'item')}>
							<Typography>{article.category}</Typography>
						</div>
					</div>
					<div className={classes.tag}>
						<Typography>标签:</Typography>
						<Box display="flex">
							{[1, 2, 3].map(item => (
								<div className={classes.tagItem} key={item}>
									<Typography>前端</Typography>
								</div>
							))}
						</Box>
					</div>
				</div>
			</Box>
			<Box className={classes.comment}>
				<Box className="writing-board">
					<Box className="avatar"></Box>
					<Form observer={observer} className="form" onFinish={handleSubmitComment}>
						<FormTextarea name="content" placeholder="写下你的评论..." rules={{ required: '请输入你的评论' }} />
						<Box className={clsx(classes.buttons, 'buttons')}>
							<Buttons type="submit" variant="contained" loading={submitLoading}>
								发布
							</Buttons>
							<Buttons variant="outlined">取消</Buttons>
						</Box>
					</Form>
				</Box>
				<AnchorPointer message={`全部评论 ${commentTotal}`} />
        <Comment list={comment} />
        <If factor={comment.length < commentTotal}>
          <div className={classes.fetchMoreComment}>
            {fetchMoreType === 'manual' ? (
              <Buttons variant="text" color="inherit" onClick={handleFetchMoreComment} loading={getLoading}>
                <Typography fontWeight={700} color="inherit">
                  查看全部{commentTotal}条回复
                </Typography>
                <KeyboardArrowDown width={16} height={16} />
              </Buttons>
            ) : (
              <Typography fontWeight={700} color="inherit">
                加载中...
              </Typography>
            )}
          </div>
        </If>
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
