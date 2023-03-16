/**
 * @author zhengji.su
 * @description Navigation
 */

import React, { useEffect, useState } from 'react'
import Box from "@mui/material/Box";
import { NAVIGATION_LIST, NavigationItem } from "components/Navigation/constant";
import Buttons from "components/Buttons";
import FormText from "components/Form/FormText";
import { useRouter } from "next/router";
import clsx from "clsx";
import isEmpty from "lodash/isEmpty"
import isString from "lodash/isString"
import MediaQuery from "core/MediaQuery";
import MenuIcon from "components/Icons/MenuIcon";
import MenuDrawer from "components/Navigation/components/MenuDrawer";
import AccordionMenu from "components/Navigation/components/AccordionMenu";
import routes from "@/src/routes";
import { useTheme } from "@mui/material/styles";
import { Variant } from "components/Animation/Variant";
import makeStyles, { Theme } from "core/makeStyles";
import GradientLogo from "components/Logo/GradientLogo";
import {useMediaQuery} from "@mui/material";
import useCompareRoute from "components/Navigation/hooks/useCompareRoute";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: theme.config.navHeight,
    boxSizing: 'border-box',
    zIndex: 999,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    transition: 'all .2s',
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(0, 3),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 64,
    },
  },
  focus: {
    height: 72,
    boxShadow: '0 0 16px rgb(0 0 0 / 8%)',
    // backdropFilter: 'saturate(50%) blur(4px)',
    // backgroundImage: `radial-gradient(transparent 1px, ${theme.colorPalette.background.main} 1px)`,
    // backgroundSize: '3px 3px',
    backgroundColor: theme.colorPalette.background.main,
    backdropFilter: 'blur(6px)',
    [theme.breakpoints.down('lg')]: {
      height: 56,
    },
    '& .tools': {
      '& .MuiOutlinedInput-notchedOutline': {
        backgroundColor: theme.colorPalette.background.main
      },
      '& .MuiButton-outlined': {
        backgroundColor: theme.colorPalette.background.main
      }
    },
  },
  blur: {
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 auto',
    width: '100%',
    height: '100%',
    maxWidth: theme.config.navWidth,
  },
  menus: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(3),
    height: '100%',
    transition: theme.config.transition(),
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing(10)
    }
  },
  tools: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 425
  },
  open: {
    color: theme.palette.primary.main
  },
  btn: {
    '&.MuiButton-textPrimary': {
      color: theme.colorPalette.text.default
    },
    '&.checked': {
      color: theme.palette.primary.main,
    }
  },
}), 'Navigation')

function Navigation() {
  const classes = useStyles()
  const history = useRouter()
  const theme = useTheme()
  const dark = useMediaQuery('(prefers-color-scheme: dark)')
  const { compare } = useCompareRoute()

  console.log(dark, 1352)

  const [openDialog, setOpenDialog] = useState(false)
  const [focusTab, setFocusTab] = useState<NavigationItem | null>(null)
  const [focus, setFocus] = useState(false)

  useEffect(() => {
    const scroll = () => setFocus(window.scrollY >= 150)
    window.addEventListener('scroll', scroll)

    return () => removeEventListener('scroll', scroll)
  }, [])

  const handleCheckRoute = async (tab: NavigationItem | null, type: string = 'click') => {
    if (tab === null || type === 'leave') {
      return setFocusTab(null)
    }

    if (type === 'enter') {
      return !isEmpty(tab.menus) ? setFocusTab(tab) : setFocusTab(null)
    }


    return isString(tab.route) ? history.push(tab.route) : history.push(tab.route())
  }

  const handleOpenDialog = () => setOpenDialog(true)

  const handleToHome = () => history.push(routes.home)

  const handleJumpToLogin = () => history.push(routes.login)

  return (
		<Box component="header">
			<MediaQuery media={['pc', 'pad']}>
				<Box
					className={clsx(classes.root, focus ? classes.focus : classes.blur)}
					onMouseLeave={() => handleCheckRoute(null, 'leave')}
				>
					<Box className={classes.content}>
						<Box display="flex" alignItems="center">
              <GradientLogo width={35} height={35} onClick={handleToHome} />
							<Box className={classes.menus}>
								{NAVIGATION_LIST.map(tab => (
									<Buttons
										key={tab.id}
										variant="text"
										onClick={() => handleCheckRoute(tab)}
										onMouseEnter={() => handleCheckRoute(tab, 'enter')}
										className={clsx(classes.btn, {
                      checked: compare(tab.route)
                    })}
									>
										{tab.label}
									</Buttons>
								))}
							</Box>
						</Box>
						<Box className={clsx(classes.tools, 'tools')}>
							<Box width={200} mr={3}>
								<FormText
									label="搜索本站"
									bgColor={theme.colorPalette.primary.transparent}
								/>
							</Box>
							<Buttons
								variant="contained"
								color="primary"
								disableRipple
								onClick={handleJumpToLogin}
							>
								Sign in
							</Buttons>
						</Box>
					</Box>
					<Variant focus={!isEmpty(focusTab?.menus)}>
						<AccordionMenu tab={focusTab} />
					</Variant>
				</Box>
			</MediaQuery>
			<MediaQuery media="mobile">
				<Box className={clsx(classes.root, focus ? classes.focus : classes.blur)}>
          <GradientLogo width={30} height={30} onClick={handleToHome} />
					<Buttons
						variant="text"
						space={false}
						className={classes.open}
						onClick={handleOpenDialog}
					>
						<MenuIcon width={18} height={18} />
					</Buttons>
				</Box>
				<MenuDrawer
					menus={NAVIGATION_LIST}
					open={openDialog}
					onClose={() => setOpenDialog(false)}
				/>
			</MediaQuery>
		</Box>
	)
}

export default Navigation
