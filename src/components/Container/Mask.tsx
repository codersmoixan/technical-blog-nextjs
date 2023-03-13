import { makeStyles } from '@mui/styles'
import Box, { BoxProps } from '@mui/material/Box'
import clsx from 'clsx'
import type { Theme } from '@mui/material'

export interface MaskProps extends BoxProps {
	icon: string
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'inline-block',
		width: 24,
		height: 24,
		backgroundColor: 'currentColor',
		'-webkit-mask': (props: MaskProps) =>
			props.icon ? `url(${props.icon}) center center / contain no-repeat` : ''
	}
}))

function Mask(props: MaskProps) {
	const { icon, className, ...other } = props
	const classes = useStyles({ icon, ...other })

	return <Box component="span" className={clsx(className, classes.root)} {...other} />
}

export default Mask
