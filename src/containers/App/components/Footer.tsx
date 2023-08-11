/**
 * @author zhengji.su
 * @description Footer
 */

import Typography from '@mui/material/Typography'
import dayjs from 'dayjs'
import Content from 'components/Layout/Content'
import FooterNavList from 'containers/App/components/FooterNavList'
import { aboutUsList, documentList } from 'containers/App/constants'
import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'

const useStyles = makeStyles((theme: Theme) => {
	const isDark = theme.palette.mode === 'dark'

	return {
		root: {
			position: 'relative',
			background: isDark
				? 'linear-gradient(rgba(22, 28, 36, 0.94), rgba(22, 28, 36, 0.94)) center center / cover no-repeat, url(/images/home/overlay_2.jpg)'
				: `linear-gradient(rgba(252, 252, 252, 0.9), rgba(252, 252, 252, 0.9)) center center / cover no-repeat, url(/images/home/overlay_2.jpg)`,
			backgroundSize: '100% 100%'
		},
		content: {
			padding: theme.spacing(3, 3),
			display: 'flex',
			flexDirection: 'column',
			'& .content': {
				display: 'flex',
				flex: 1
			},
			[theme.breakpoints.down('md')]: {
				'& .content': {
					flexWrap: 'wrap',
					'& .list': {
						width: '33%'
					}
				}
			},
			[theme.breakpoints.up('md')]: {
				'& .content': {
					justifyContent: 'flex-end',
					'& .list': {
						width: 240,
						textAlign: 'right'
					}
				}
			}
		},
		footer: {
			margin: theme.spacing(2, 'auto', 0),
			fontSize: 12,
			[theme.breakpoints.down('md')]: {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				'& .MuiTypography-span': {
					marginRight: 0
				}
			},
			'& .MuiTypography-span': {
				marginRight: theme.spacing(2)
			}
		}
	}
})

function Footer() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Content className={classes.content}>
				<div className="content">
					<FooterNavList title="官方文档" list={documentList} className="list document" />
					<FooterNavList title="友情链接" list={documentList} className="list links" />
					<FooterNavList title="关于我们" list={aboutUsList} className="list about-us" />
				</div>
				<div className={classes.footer}>
					<Typography component="span" variant="inherit">
						COPYRIGHT © {dayjs(Date.now()).format('YYYY')} SMOIXAN. ALL RIGHTS RESERVED.
					</Typography>
					<a href="containers/App/components/Footer#/Integrated/Footer.tsx" target="_blank" rel="noreferrer">
						蜀ICP备2023004446号
					</a>
				</div>
			</Content>
		</div>
	)
}

export default Footer
