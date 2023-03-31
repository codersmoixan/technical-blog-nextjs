/**
 * @author zhengji.su
 * @description MenuDrawer
 */

import { makeStyles } from '@mui/styles'
import Menu  from 'components/Menu'
import { useRouter } from 'next/router'
import isString from 'lodash/isString'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import GlobalDrawer from 'components/GlobalDrawer'
import GradientLogo from 'components/Logo/GradientLogo'
import useCompareRoute from "hooks/useCompareRoute";
import type { Theme } from '@mui/material'

interface MenuDrawerProps {
	menus: any[]
	open: boolean
	onClose?: () => void
}

const useStyles = makeStyles((theme: Theme) => ({
	drawer: {
		width: 260
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 3),
		height: 72
	},
	menu: {
    padding: 0,
		height: 'auto',
	},
	summaryContent: {
		padding: theme.spacing(1, 3),
    display: 'flex',
    alignItems: 'center',
		height: 'auto',
		'& p': {
			fontSize: 14,
			color: theme.colorPalette.text.textSecondary
		},
		'& .transform-icon > div': {
			color: theme.colorPalette.text.textSecondary
		}
	},
  accordionDetails: {
    padding: theme.spacing(0, 7, 2),
  },
  summaryContentChecked: {
    backgroundColor: theme.colorPalette.setting.active,
    '& p': {
      fontSize: 14,
      fontWeight: 700,
      color: theme.palette.primary.main
    },
    '& .transform-icon > div': {
      color: theme.palette.primary.main
    }
  },
	summaryValue: {
		padding: theme.spacing(0, 4),
		'& > a': {
			fontSize: 14,
			color: theme.colorPalette.text.textSecondary
		}
	},
  accordion: {
    '&::before': {
      display: 'none'
    },
  },
}))

function MenuDrawer(props: MenuDrawerProps) {
	const { open, menus, onClose } = props
	const classes = useStyles(props)
	const history = useRouter()
  const { compare } = useCompareRoute()

  const handleNodeClick = (options: typeof menus[number]) => {
		const url = options.route
		onClose?.()
		return isString(url) ? history.push(url) : history.push(url())
	}

	return (
		<GlobalDrawer
			open={open}
			onClose={onClose}
			classes={{
				drawer: classes.drawer
			}}
		>
			<div slot="header" className={classes.header}>
				<GradientLogo width={25} height={25} />
			</div>
			<div slot="content">
        <Menu
          menus={menus}
          childKey="menus"
          onNodeClick={handleNodeClick}
          expandIcon={<ExpandLess />}
          closeIcon={<ExpandMore />}
          classes={{
            root: classes.menu,
            summaryContent: classes.summaryContent,
            value: classes.summaryValue,
            accordion: classes.accordion,
            checked: classes.summaryContentChecked,
            accordionDetails: classes.accordionDetails
          }}
          checked={(item) => compare(item.route)}
        />
			</div>
		</GlobalDrawer>
	)
}

export default MenuDrawer
