import makeStyles, { Theme } from "utils/styles/makeStyles";

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
    boxShadow: `0 0 15px ${theme.colorPalette.background.main}`,
    backdropFilter: 'saturate(50%) blur(4px)',
    backgroundImage: `radial-gradient(transparent 1px, ${theme.colorPalette.background.main} 1px)`,
    backgroundSize: '3px 3px',
    [theme.breakpoints.down('lg')]: {
      height: 56,
    }
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
    justifyContent: 'space-between',
    width: 425
  },
  logo: {
    width: 45,
    height: 45,
    [theme.breakpoints.down('lg')]: {
      width: 30,
      height: 30
    }
  },
  open: {
    color: theme.palette.primary.main
  },
  btn: {
    '&.MuiButton-textPrimary': {
      color: theme.colorPalette.text.textSecondary
    }
  }
}), 'Navigation')

export default useStyles
