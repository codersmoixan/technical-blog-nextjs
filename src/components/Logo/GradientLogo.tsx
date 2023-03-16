import { makeStyles } from '@mui/styles'
import Mask, { MaskProps } from 'components/Container/Mask'
import type { Theme } from '@mui/material'

export interface GradientLogoProps extends Omit<MaskProps, 'icon'> {}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		background: theme.colorPalette.gradient.logo,
		cursor: 'pointer'
	}
}))

function GradientLogo(props: GradientLogoProps) {
	const classes = useStyles(props)

	return <Mask icon="/icons/logo.svg" className={classes.root} {...props} />
}

export default GradientLogo
