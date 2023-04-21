/**
 * @author zhengji.su
 * @description BasicSpeedDial
 */

import SpeedDial, { SpeedDialProps } from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { makeStyles } from "@mui/styles";
import routes from "@/src/routes";
import type { ReactNode } from "react";
import type { Theme } from "@mui/material";

export interface SpeedDialOption {
  id: keyof (typeof routes) | 'top' | 'setting';
  icon: ReactNode;
  name?: string;
}

export interface BasicSpeedDialProps extends Omit<SpeedDialProps, 'onChange' | 'ariaLabel'> {
  options: SpeedDialOption[]
  ariaLabel?: string;
  onChange?: (action: SpeedDialOption) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'fixed',
    bottom: 64,
    right: 64,
    transform: 'translateZ(0px)',
    flexGrow: 1,
    zIndex: 999,
    transition: 'all .3s',
    [theme.breakpoints.down('sm')]: {
      bottom: 12,
      right: 12
    }
  },
  fab: {
    [theme.breakpoints.down('md')]: {
      width: 48,
      height: 48
    }
  },
  speedDialAction: {
    color: theme.palette.primary.main,
    '& a': {
      color: theme.palette.primary.main
    }
  }
}))

function BasicSpeedDial({ onChange, options, ...other }: BasicSpeedDialProps) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        classes={{
          fab: classes.fab
        }}
        {...other}
      >
        {options.map((action) => (
          <SpeedDialAction
            key={action.id}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => onChange?.(action)}
            className={classes.speedDialAction}
          />
        ))}
      </SpeedDial>
    </div>
  );
}

export default BasicSpeedDial
