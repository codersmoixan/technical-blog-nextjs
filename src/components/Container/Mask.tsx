import { makeStyles } from '@mui/styles'
import Box, { BoxProps } from '@mui/material/Box'
import clsx from 'clsx'

export interface MaskProps extends BoxProps {
	icon: string
}

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    backgroundColor: 'currentColor',
    '-webkit-mask': (props: MaskProps) => (props.icon ? `url(${props.icon}) center center / contain no-repeat` : '')
  }
})

function Mask(props: MaskProps) {
	const { icon, className, width = 24, height = 24, ...other } = props
	const classes = useStyles({ icon, ...other })

	return <Box component="span" width={width} height={height} className={clsx(className, classes.root)} {...other} />
}

export default Mask
