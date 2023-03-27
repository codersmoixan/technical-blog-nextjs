/**
 * @author zhengji.su
 * @description Catalog
 */

import React, { forwardRef, ReactEventHandler } from 'react'
import Box from '@mui/material/Box';
import MediaQuery from "core/MediaQuery";
import Typography from "@mui/material/Typography";
import Menu, {MenuItem} from "components/Menu";
import Search from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import TransformIcon from "components/TransformIcon";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import clsx from "clsx";
import { Variant } from "components/Animation/Variant";
import type { Theme } from "@mui/material";
import type { Variants } from "framer-motion";
import useSwitchCatalog from "containers/Sharing/hooks/useSwitchCatalog";

interface CatalogMenuProps {
  menus: any[];
  onSearchFocus?: ReactEventHandler;
}

const useStyles = makeStyles((theme: Theme) => ({
  ...theme.styles,
  root: {
    position: 'relative',
    width: 253,
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(0, -3),
      width: 'auto',
      minHeight: 72
    }
  },
  catalog: {
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
      marginTop: theme.spacing(-3)
    },
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      minHeight: 72,
      zIndex: 89
    }
  },
  content: {
    position: 'relative',
    display: 'flex',
    height: 72,
    backgroundColor: theme.colorPalette.background.main,
    zIndex: 1,
    '&.focus': {
      boxShadow: 'rgb(227 227 227) 0px 2px 4px',
    }
  },
  menuTitle: {
    paddingBottom: theme.spacing(4),
    borderBottom: `1px solid ${theme.colorPalette.primary.colorSecondary}`
  },
  menu: {
    width: 205,
    backgroundColor: theme.colorPalette.background.main,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 2),
      width: 'auto',
    }
  },
  menuLabel: {
    padding: theme.spacing(0, 3),
    flex: 1,
  },
  searchBtn: {
    width: 72,
    height: '100%',
    color: theme.palette.primary.main,
    backgroundColor: theme.colorPalette.primary.darkPeach
  },
}))

export default forwardRef(function CatalogMenu({ menus, onSearchFocus }: CatalogMenuProps, ref) {
  const classes = useStyles()
  const { focus, checked, setFocus, onCheckedMenu } = useSwitchCatalog()

  const handleSearchFocus = (event: React.MouseEvent) => {
    setFocus(false)
    onSearchFocus?.(event)
  }

  const handleCatalogFocus = () => {
    setFocus(!focus)
  }

  return (
    <Box className={classes.root}>
      <MediaQuery media={['pc', 'pad']}>
        <Box className={classes.catalog}>
          <Typography
            variant="h4"
            fontWeight={400}
            className={classes.menuTitle}
          >
            分类
          </Typography>
          <Variant>
            <Menu
              menus={menus}
              isBorder
              className={classes.menu}
              onNodeClick={onCheckedMenu}
              value={checked}
            />
          </Variant>
        </Box>
      </MediaQuery>
      <MediaQuery media="mobile">
        <Box className={classes.catalog}>
          <Box
            className={clsx(classes.content, {
              focus: !focus
            })}
            ref={ref}
          >
            <Box className={clsx(classes.menuLabel, classes.spaceBetweenCenter)} onClick={handleCatalogFocus}>
              <Typography variant="h5" fontWeight={400} width="80%">前端</Typography>
              <TransformIcon focus={focus} originIcon={<ExpandLess />} finishIcon={<ExpandMore />} />
            </Box>
            <Box className={clsx(classes.searchBtn, classes.verticalCenter)} onClick={handleSearchFocus}>
              <Search />
            </Box>
          </Box>
          <Menu focus={focus} menus={menus} isBorder className={classes.menu} onNodeClick={onCheckedMenu} />
        </Box>
      </MediaQuery>
    </Box>
  )
})
