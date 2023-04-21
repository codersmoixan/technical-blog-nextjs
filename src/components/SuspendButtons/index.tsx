import BeforeRoute from 'core/BeforeRoute'
import BasicSpeedDial, {SpeedDialOption} from 'components/SuspendButtons/BasicSpeedDial'
import ThemeSettingIcon from 'containers/App/components/ThemeSettingIcon'
import Fab from '@mui/material/Fab'
import React from 'react'
import makeStyles, { Theme } from 'core/makeStyles'
import useSpeedDial from 'components/SuspendButtons/hooks/useSpeedDial'
import routes from '@/src/routes'
import AddLink from "@mui/icons-material/AddLink";
import Link from "next/link";
import PostAdd from "@mui/icons-material/PostAdd";
import VerticalAlignTop from "@mui/icons-material/VerticalAlignTop";

const useStyles = makeStyles(
	(theme: Theme) => ({
		fab: {
			position: 'fixed',
			right: 64,
			bottom: 64,
			backgroundColor: theme.colorPalette.background.main,
			boxShadow: 'rgb(99 115 129 / 36%) -12px 12px 32px -4px',
      zIndex: 9999,
			'&:hover': {
				backgroundColor: theme.colorPalette.background.default
			},
      [theme.breakpoints.down('sm')]: {
        bottom: 12,
        right: 12
      }
		}
	}),
	'SuspendButtons'
)

const actions: SpeedDialOption[] = [
  { id: 'setting', icon: <ThemeSettingIcon />, name: '主题设置' },
  { id: 'links', icon: <AddLink />, name: '新增友情链接' },
  // { id: 'category', icon: <Queue />, name: '新增归档类型' },
  // { id: 'tags', icon: <BookmarkAdd />, name: '新增标签' },
  { id: 'editor', icon: <Link href={routes.editor} target="_blank"><PostAdd /></Link>, name: '新增新的分享' },
  { id: 'top', icon: <VerticalAlignTop /> }
];

function SuspendButtons() {
	const classes = useStyles()
	const { updateSpeedDial } = useSpeedDial()

  const handleAction = ({ id }: SpeedDialOption) => {
    if (id === 'top') {
      document.body.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })

      return
    }

    if (id === 'editor') {
      return
    }

    updateSpeedDial(id)
  }

	return (
		<>
			<BeforeRoute exclude={[routes.editor, routes.login, routes.notFond, routes.register]}>
				<BasicSpeedDial options={actions} onChange={handleAction} />
			</BeforeRoute>
			<BeforeRoute include={[routes.login, routes.notFond, routes.register]}>
				<Fab className={classes.fab} onClick={() => updateSpeedDial('setting')}>
					<ThemeSettingIcon />
				</Fab>
			</BeforeRoute>
		</>
	)
}

export default SuspendButtons
