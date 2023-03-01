/**
 * @author zhengji.su
 * @description SideSwiper
 */

import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import makeStyles, { Theme } from "utils/styles/makeStyles";
import VariantList from "components/Variant/VariantList";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import Buttons from "components/Buttons";
import useSideSwiper from "components/Swiper/hooks/useSideSwiper";
import type { ReactNode } from "react";

export interface SideSwiperProps extends Omit<BoxProps, 'children'> {
  data: any[];
  children: (option: any) => ReactNode;
  triggerScroll?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {

  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  action: {
    width: 70,
    display: "flex",
    justifyContent: 'space-between'
  },
  title: {
    cursor: 'pointer'
  },
  banner: {
    padding: theme.spacing(3, 2),
    marginLeft: theme.spacing(-2),
    overflowX: 'clip',
    [theme.breakpoints.down('md')]: {
      overflowX: 'auto',
      padding: theme.spacing(2, 0, 0, 3),
      margin: theme.spacing(0, -3),
    }
  },
  container: {
    display: 'flex',
    width: 'max-content'
  },
  prevBtn: {
    '&.Mui-disabled.MuiButton-textPrimary': {
      color: theme.colorPalette.text.disabled
    }
  },
  nextBtn: {
    '&.Mui-disabled.MuiButton-textPrimary': {
      color: theme.colorPalette.text.disabled
    }
  }
}), 'SideSwiper')

function SideSwiper(props: SideSwiperProps) {
  const { data, title, triggerScroll, children, ...other } = props
  const classes = useStyles(props)

  const { containerRef, swiperRef, prevDisabled, nextDisabled, onNext, onPrev } = useSideSwiper({
    sideLength: data.length,
    sideSize: 240,
  })

  return (
    <Box className={classes.root} {...other}>
      {(!title && !triggerScroll) ? null : (
        <Box className={classes.actions}>
          {title && <Typography variant="h3" fontWeight={400} className={classes.title}>{title}</Typography>}
          {triggerScroll && (
            <Box className={classes.action}>
              <Buttons
                variant="text"
                onClick={onPrev}
                disabled={prevDisabled}
                className={classes.prevBtn}
                space={false}
              >
                <ChevronLeftIcon />
              </Buttons>
              <Buttons
                variant="text"
                onClick={onNext}
                disabled={nextDisabled}
                className={classes.nextBtn}
                space={false}
              >
                <ChevronRightIcon />
              </Buttons>
            </Box>
          )}
        </Box>
      )}
      <Box
        ref={containerRef}
        className={classes.banner}
      >
        <VariantList ref={swiperRef} list={data} className={classes.container}>
          {option => children(option)}
        </VariantList>
      </Box>
    </Box>
  )
}

export default SideSwiper
