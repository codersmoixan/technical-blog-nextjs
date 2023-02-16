import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import clsx from "clsx";
import useSwitchTheme from "containers/App/hooks/useSwitchTheme";
import MaskIcon from "components/MaskIcon";
import Grid from "@mui/material/Grid";
import { themePresets } from "../constants"
import type { Theme } from "@mui/material";
import type { ThemeSettingPresets } from "../types"

interface MakeStylesProps {
  presets: ThemeSettingPresets;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 260
  },
  header: {
    padding: theme.spacing(2),
    borderBottom: `1px dashed ${theme.colorPalette.primary.colorSecondary}`,
  },
  body: {
    padding: theme.spacing(2),
  },
  modeItems: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(1),
    '& .primary.active': {
      boxShadow: 'rgb(145 158 171 / 16%) 0px 12px 24px -4px'
    }
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    border: `1px solid ${theme.colorPalette.primary.colorSecondary}`,
    cursor: 'pointer',
    transition: theme.config.transition(),
    '&:hover': {
      backgroundColor: theme.colorPalette.setting.bgSecondary,
    },
    '&.active': {
      '&:hover': {
        backgroundColor: theme.colorPalette.setting.bgActive,
      }
    }
  },
  modeItem: {
    width: 104,
    height: 70,
    color: theme.colorPalette.setting.colorSecondary,
    '&.active': {
      color: theme.palette.primary.main,
    }
  },
  presets: {
    marginTop: theme.spacing(2),
    '& .items': {
      marginTop: theme.spacing(1)
    }
  },
  presetsItem: {
    width: 66,
    height: 46,
    '&.active': {
      backgroundColor: theme.colorPalette.setting.bgActive,
      '& .preset': {
        width: 24,
        height: 24,
        boxShadow: (props: MakeStylesProps) => props.presets ? `${theme.colorPalette.setting[props.presets]} 0px 4px 8px -3px` : 'none'
      }
    },
    '& .preset': {
      width: 12,
      height: 12,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
      transition: theme.config.transition()
    }
  }
}))

function ThemeSetting() {
  const { mode, presets, switchMode, switchPresets } = useSwitchTheme()
  const classes = useStyles({ presets })
  const theme = useTheme()

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Typography variant="body1">主题设置</Typography>
      </Box>
      <Box className={classes.body}>
        <Box className="mode">
          <Typography variant="caption" color={theme.palette.text.secondary}>模式</Typography>
          <Box className={classes.modeItems}>
            <Box
              className={clsx(classes.item, classes.modeItem, 'primary', {
                active: mode === 'light'
              })}
              onClick={() => switchMode('light')}
            >
              <MaskIcon url="/icons/setting/ic_sun.svg" />
            </Box>
            <Box
              className={clsx(classes.item, classes.modeItem, 'secondary', {
                active: mode === 'dark'
              })}
              onClick={() => switchMode('dark')}
            >
              <MaskIcon url="/icons/setting/ic_moon.svg" />
            </Box>
          </Box>
        </Box>
        <Box className={classes.presets}>
          <Typography variant="caption" color={theme.palette.text.secondary}>预设</Typography>
          <Box className="items">
            <Grid container spacing={1.5}>
              {themePresets.map((item: ThemeSettingPresets) => (
                <Grid item key={item}>
                  <Box
                    className={clsx(classes.item, classes.presetsItem, {
                      active: item === presets
                    })}
                    color={theme.colorPalette.setting[item]}
                    onClick={() => switchPresets(item)}
                  >
                    <Box className="preset"></Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ThemeSetting
