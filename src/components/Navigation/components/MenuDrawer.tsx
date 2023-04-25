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
    marginTop: theme.spacing(2)
  },
  label: {
    color: theme.colorPalette.text.default,
    '& .MuiTypography-root': {
      fontWeight: '700 !important'
    }
  },
  subItem: {
    height: 48,
    lineHeight: '48px',
    '& .MuiTypography-root': {
      marginLeft: theme.spacing(7),
      color: theme.colorPalette.text.textSecondary
    }
  },
  summaryContent: {
    padding: theme.spacing(0, 3)
  },
  menuActive: {
    '& .MuiAccordionSummary-content': {
      backgroundColor: theme.colorPalette.setting.active,
      color: theme.colorPalette.text.main
    }
  },
  textActive: {
    '& .label': {
      color: theme.colorPalette.text.main
    },
    '& .MuiAccordionSummary-content': {
      '& .MuiButtonBase-root > .MuiTypography-root': {
        color: theme.colorPalette.text.main
      }
    }
  },
  subActive: {
    backgroundColor: theme.colorPalette.setting.active,
    '& .MuiTypography-root': {
      color: theme.colorPalette.text.main
    }
  }
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
          subKey="menus"
          onNodeClick={handleNodeClick}
          expandIcon={<ExpandLess />}
          closeIcon={<ExpandMore />}
          classes={{
            root: classes.menu,
            label: classes.label,
            subItem: classes.subItem,
            summaryContent: classes.summaryContent,
            // active: value.length <= 1 ? classes.menuActive : classes.textActive,
            subActive: classes.subActive
          }}
          active={(item) => compare(item.route)}
        />
			</div>
		</GlobalDrawer>
	)
}

export default MenuDrawer
