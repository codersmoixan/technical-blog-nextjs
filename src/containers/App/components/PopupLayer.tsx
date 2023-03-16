import React from 'react'
import CenterDialog from 'components/Dialog/CenterDialog'
import makeStyles, { Theme } from 'core/makeStyles'
import useSpeedDial from 'hooks/useSpeedDial'
import { getValue } from 'utils/index'
import OperateTag from 'containers/Tag/components/OperateTag'
import OperateCategory from 'containers/Category/components/OperateCategory'
import OperateLinks from 'containers/Links/components/OperateLinks'
import ThemeSetting from 'containers/App/components/ThemeSetting'
import Drawer from '@mui/material/Drawer'

const useStyles = makeStyles(
	(theme: Theme) => ({
		paper: {
			backgroundColor: theme.colorPalette.background.main,
			paddingBottom: theme.spacing(1),
			borderRadius: 8
		},
		paperTitle: {
			padding: theme.spacing(2.5)
		},
		paperContent: {
			padding: theme.spacing(2.5)
		},
		closeIcon: {
			fontSize: 16
		},
		drawerPaper: {
			backdropFilter: 'blur(6px)',
			backgroundImage: 'none'
		}
	}),
	'PopupLayer'
)

const dialogContent = {
	tags: <OperateTag />,
	category: <OperateCategory />,
	links: <OperateLinks />
}

const drawerContent = {
	setting: <ThemeSetting />
}

function PopupLayer() {
	const classes = useStyles()
	const { clearSpeedDial, speedDial } = useSpeedDial()

	const centerDialogContent = getValue(dialogContent, speedDial as keyof typeof dialogContent)
	const rightDrawerContent = getValue(drawerContent, speedDial as keyof typeof drawerContent)

	return (
		<>
			<CenterDialog
				open={!!centerDialogContent}
				onClose={clearSpeedDial}
				classes={{
					paper: classes.paper,
					closeIcon: classes.closeIcon,
					title: classes.paperTitle,
					content: classes.paperContent
				}}
			>
				{centerDialogContent}
			</CenterDialog>
			<Drawer
				anchor="right"
				open={!!rightDrawerContent}
				onClose={clearSpeedDial}
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<ThemeSetting />
			</Drawer>
		</>
	)
}

export default PopupLayer
