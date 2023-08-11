/**
 * @author zhengji.su
 * @description SharingSwiper
 */

import SideSwiper, { SideSwiperProps } from 'components/Swiper/SideSwiper'
import SharingCard from 'containers/Sharing/components/SharingCard'
import Typography from '@mui/material/Typography'
import { useMediaQuery } from '@mui/material'
import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'
import { useRouter } from 'next/router'
import routes from '@/src/routes'

interface SharingSwiperProps extends Pick<SideSwiperProps, 'title'> {
	blogs: any[]
}

const useStyles = makeStyles((theme: Theme) => ({
	card: {
		marginRight: theme.spacing(3),
		width: 216,
		minHeight: 256,
		transition: theme.config.transition(),
		'& img': {
			height: 140,
			transition: theme.config.transition()
		},
		'& .MuiTypography-caption': {
			color: theme.colorPalette.text.textSecondary
		}
	},
	banner: {
		padding: theme.spacing(3, 2),
		marginLeft: theme.spacing(-2),
		[theme.breakpoints.down('md')]: {
			padding: theme.spacing(1.5, 0, 1.5, 3),
			margin: theme.spacing(0, -3)
		}
	}
}))

function SharingSwiper({ blogs, ...other }: SharingSwiperProps) {
	const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))
	const classes = useStyles()
	const history = useRouter()

	const handleClick = (blog: any) => {
		history.push(routes.article(1))
	}

	return (
		<SideSwiper data={blogs} triggerScroll={mdUp} classes={{ banner: classes.banner }} {...other}>
			{blog => (
				<SharingCard key={blog.id} title={blog.title} date="2022.11.06" className={classes.card} onClick={() => handleClick(blog)}>
					<Typography variant="caption">{blog.description}</Typography>
				</SharingCard>
			)}
		</SideSwiper>
	)
}

export default SharingSwiper
