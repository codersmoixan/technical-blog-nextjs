/**
 * @author zhengji.su
 * @description SideSwiper
 */

import Box, { BoxProps } from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import VariantList from 'components/Animation/Variant/VariantList'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Buttons from 'components/Buttons'
import useSideSwiper from 'components/Swiper/hooks/useSideSwiper'
import type { ReactNode } from 'react'
import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'

export interface SideSwiperProps extends Omit<BoxProps, 'children'> {
	data: any[]
	children: (option: any) => ReactNode
	classes?: Partial<ReturnType<typeof useStyles>>
	triggerScroll?: boolean
}

const useStyles = makeStyles((theme: Theme) => {
	const isDark = theme.palette.mode === 'dark'

	return {
		root: {},
		actions: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center'
		},
		action: {
			width: 70,
			display: 'flex',
			justifyContent: 'space-between'
		},
		title: {
			cursor: 'pointer'
		},
		banner: {
			padding: theme.spacing(2),
			overflowX: 'clip',
			[theme.breakpoints.down('md')]: {
				overflowX: 'auto'
			}
		},
		container: {
			display: 'flex',
			width: 'max-content'
		},
		children: {
			height: '100%'
		},
		prevBtn: {
			'&.Mui-disabled.MuiButton-textPrimary': {
				color: theme.colorPalette.text.disabled
			},
			...(isDark
				? {
						color: theme.colorPalette.text.default
				  }
				: {})
		},
		nextBtn: {
			'&.Mui-disabled.MuiButton-textPrimary': {
				color: theme.colorPalette.text.disabled
			},
			...(isDark
				? {
						color: theme.colorPalette.text.default
				  }
				: {})
		}
	}
})

function SideSwiper(props: SideSwiperProps) {
	const { data, title, triggerScroll, children, classes: propClasses, ...other } = props
	const classes = useStyles(props)

	const { containerRef, swiperRef, sideRef, prevDisabled, nextDisabled, showTrigger, onNext, onPrev } = useSideSwiper({
		sideCount: data.length
	})

	return (
		<Box className={classes.root} {...other}>
			{title && triggerScroll && showTrigger ? (
				<Box className={classes.actions}>
					{title && (
						<Typography variant="h3" fontWeight={400} className={classes.title}>
							{title}
						</Typography>
					)}
					{triggerScroll && (
						<Box className={classes.action}>
							<Buttons variant="text" onClick={onPrev} disabled={prevDisabled} className={classes.prevBtn} space={false}>
								<ChevronLeftIcon />
							</Buttons>
							<Buttons variant="text" onClick={onNext} disabled={nextDisabled} className={classes.nextBtn} space={false}>
								<ChevronRightIcon />
							</Buttons>
						</Box>
					)}
				</Box>
			) : null}
			<Box ref={containerRef} className={classes.banner}>
				<VariantList ref={swiperRef} list={data} className={classes.container}>
					{option => (
						<div className={classes.children} ref={sideRef}>
							{children(option)}
						</div>
					)}
				</VariantList>
			</Box>
		</Box>
	)
}

export default SideSwiper
