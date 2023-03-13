/**
 * @author zhengji.su
 * @description MenuDrawer
 */

import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import UserButtons from "components/Navigation/components/UserButtons";
import Menu, { MenuItem } from "components/Menu";
import { useRouter } from "next/router";
import isString from "lodash/isString";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore"
import { Variant, VariantContent } from "components/Animation/Variant";
import { stiffnessVariants } from "utils/variants";
import GlobalDrawer from "components/GlobalDrawer";
import type { Theme } from "@mui/material";

interface MenuDrawerProps {
  menus: any[];
  open: boolean;
  onClose?: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  userButtons: {
    padding: theme.spacing(0.5),
    width: '100%',
    boxSizing: 'border-box',
    justifyContent: 'center',
    '& .MuiButtonBase-root': {
      margin: theme.spacing(0, 1.5),
      padding: theme.spacing(1, 2)
    },
    '& .MuiButton-outlined': {
      borderColor: theme.colorPalette.primary.default,
      color: theme.colorPalette.primary.default
    },
    '& .MuiButton-contained': {
      borderColor: theme.colorPalette.primary.default,
      backgroundColor: theme.colorPalette.background.main,
      color: theme.palette.primary.main
    }
  },
  content: {
    padding: theme.spacing(0, 11, 0, 8)
  },
  menu: {
    height: 'auto',
    '& .MuiAccordionSummary-content': {
      '& > p': {
        fontSize: 18,
        color: theme.colorPalette.text.default
      },
      '& .transform-icon > div': {
        color: theme.colorPalette.text.default
      }
    },
    '& .MuiAccordionSummary-root': {
      height: 65
    },
    '& .MuiAccordionDetails-root': {
      padding: theme.spacing(0, 2),
      '& > a': {
        fontSize: 16,
        color: theme.colorPalette.text.default
      }
    }
  },
}))

function MenuDrawer(props: MenuDrawerProps) {
  const { open, menus, onClose } = props
  const classes = useStyles(props)
  const history = useRouter()

  const handleNodeClick = (options: MenuItem) => {
    const url = options.route
    onClose?.()
    return isString(url) ? history.push(url) : history.push(url())
  }

  return (
    <GlobalDrawer open={open} onClose={onClose}>
      <Box className={classes.content} slot="h">
        <Variant focus={open}>
          <Menu
            menus={menus}
            childKey="menus"
            className={classes.menu}
            onNodeClick={handleNodeClick}
            expandIcon={<ExpandLess />}
            closeIcon={<ExpandMore />}
          />
        </Variant>
      </Box>
    </GlobalDrawer>
  )
}

export default MenuDrawer
