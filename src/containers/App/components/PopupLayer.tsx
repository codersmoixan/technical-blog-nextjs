import React from "react"
import CenterDialog from "components/Dialog/CenterDialog";
import { makeStyles } from "@mui/styles";
import useSpeedDial from "containers/App/hooks/useSpeedDial";
import { getValue } from "utils/index";
import OperateTag from "containers/Tag/components/OperateTag";
import OperateCategory from "containers/Category/components/OperateCategory";
import OperateLinks from "containers/Links/components/OperateLinks";
import type { Theme } from "@mui/material";
import ThemeSetting from "containers/App/components/ThemeSetting";
import Drawer from "@mui/material/Drawer";

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.main,
    paddingBottom: theme.spacing(4),
    '& .MuiButtonBase-root': {
      color: theme.colorPalette.text.default
    }
  },
  closeIcon: {
    fontSize: 16
  },
}))

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

  const centerDialogContent = getValue(dialogContent, speedDial as (keyof typeof dialogContent))
  const rightDrawerContent = getValue(drawerContent, speedDial as (keyof typeof drawerContent))

  return (
    <>
      <CenterDialog
        open={!!centerDialogContent}
        onClose={clearSpeedDial}
        classes={{
          paper: classes.paper,
          closeIcon: classes.closeIcon,
        }}
      >
        {centerDialogContent}
      </CenterDialog>
      <Drawer
        anchor="right"
        open={!!rightDrawerContent}
        onClose={clearSpeedDial}
      >
        <ThemeSetting />
      </Drawer>
    </>
  )
}

export default PopupLayer
