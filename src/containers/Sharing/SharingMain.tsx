/**
 * @author zhengji.su
 * @description SharingMain
 */

import Box from '@mui/material/Box'
import useSwitchCatalog from 'containers/Sharing/hooks/useSwitchCatalog'
import { blogList } from 'containers/Sharing/constants'
import SharingSwiper from 'containers/Sharing/components/SharingSwiper'
import useSharing from 'containers/Sharing/hooks/useSharing'
import useToolbar from 'components/LayoutToolbar/hooks/useToolbar'
import ArticleFullRow from 'containers/Sharing/components/ArticleFullRow'
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import routes from "@/src/routes";
import {useRouter} from "next/router";

const useStyles = makeStyles((theme: Theme) => ({
  item: {
    margin: theme.spacing(0, -3),
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.colorPalette.setting.hover,
    }
  }
}))

function SharingMain() {
  const classes = useStyles()
  const history = useRouter()
	const { checkedMenu } = useSwitchCatalog()
	const { layout } = useToolbar()
	const { articles = [] } = useSharing()

  console.log(articles, 12);

  const handleClick = (id: string) => history.push(routes.article(id))

  return layout === 'row' ? (
		<Box mb={8}>
			<SharingSwiper blogs={blogList} title="React" />
			<SharingSwiper blogs={blogList} title="Vue" />
			<SharingSwiper blogs={blogList} title="Angular" />
		</Box>
	) : (
		<div>
			{articles.map(article => (
				<div key={article.id} className={classes.item} onClick={() => handleClick(article.articleId)}>
          <ArticleFullRow article={article} />
        </div>
			))}
		</div>
	)
}

export default SharingMain
