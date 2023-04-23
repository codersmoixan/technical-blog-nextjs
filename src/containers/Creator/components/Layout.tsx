import React, { ReactNode, useState } from 'react'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import Buttons from 'components/Buttons'
import Typography from '@mui/material/Typography'
import Content from 'components/Layout/Content'
import GradientLogo from 'components/Logo/GradientLogo'
import routes from '@/src/routes'
import { useRouter } from 'next/router'
import BasicSpeedDial, { SpeedDialOption } from 'components/SuspendButtons/BasicSpeedDial'
import ThemeSettingIcon from 'containers/App/components/ThemeSettingIcon'
import VerticalAlignTop from '@mui/icons-material/VerticalAlignTop'
import useSpeedDial from 'components/SuspendButtons/hooks/useSpeedDial'
import type { Theme } from '@mui/material'
import MediaQuery from 'core/MediaQuery'
import MenuIcon from 'components/Icons/MenuIcon'
import SideMenu from 'containers/Creator/components/SideMenu'

export interface LayoutProps {
	children: ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		minHeight: '100vh'
	},
	header: {
		position: 'fixed',
		top: 0,
		left: 0,
		padding: theme.spacing(0, 2),
		width: '100%',
		height: theme.config.navHeight,
		zIndex: 999,
		backgroundColor: theme.colorPalette.background.default,
		boxShadow: '0 0 16px rgba(0, 0, 0, 0.08)',
		'& .header-box': {
			margin: '0 auto',
			width: 1300,
			height: '100%'
		},
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing: 'border-box',
      '& .header-box': {
        margin: 0,
        width: 'auto'
      }
    }
	},
	headerTitle: {
		marginLeft: theme.spacing(2),
		color: theme.palette.primary.main,
		fontWeight: 700
	},
	open: {
		color: theme.palette.primary.main
	},
	content: {
		paddingTop: theme.config.navHeight,
    display: 'flex',
	},
  space: {
    marginLeft: theme.spacing(2),
    width: 200,
    height: 568,
  },
	main: {
		padding: theme.spacing(2),
    flex: 1,
		minHeight: 568,
	},
  sideMenu: {
    marginLeft: theme.spacing(2)
  }
}))

const actions: SpeedDialOption[] = [
	{ id: 'setting', icon: <ThemeSettingIcon />, name: '主题设置' },
	{ id: 'top', icon: <VerticalAlignTop /> }
]

function Layout(props: LayoutProps) {
	const classes = useStyles(props)
	const { children } = props
	const history = useRouter()
	const { updateSpeedDial } = useSpeedDial()

	const [openDialog, setOpenDialog] = useState(false)

	const handleToHome = () => {
		history.push(routes.home)
	}

	const handleSpeedDial = ({ id }: SpeedDialOption) => {
		if (id === 'top') {
			document.body.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})

			return
		}

		updateSpeedDial(id)
	}

	return (
		<div className={classes.root}>
			<header className={classes.header}>
				<Box className="header-box">
					<Box display="flex" alignItems="center" height="100%">
						<GradientLogo onClick={handleToHome} />
						<Typography className={classes.headerTitle} variant="h5">
							创作者中心
						</Typography>
					</Box>
				</Box>
        <MediaQuery media="mobile">
          <Buttons variant="text" space={false} className={classes.open} onClick={() => setOpenDialog(true)}>
            <MenuIcon width={18} height={18} />
          </Buttons>
        </MediaQuery>
			</header>
			<MediaQuery media={['pc', 'pad']}>
				<Content className={classes.content}>
					<SideMenu classes={{ root: classes.sideMenu }} />
          <div className={classes.space} />
					<div className={classes.main}>{children}</div>
				</Content>
			</MediaQuery>
			<BasicSpeedDial options={actions} onChange={handleSpeedDial} />
		</div>
	)
}

export default Layout
