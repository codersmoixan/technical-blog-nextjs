import { useState } from 'react'
import FormText, {FormTextProps} from 'components/Form/FormText'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import { VisibilityOff, Visibility } from '@mui/icons-material'

interface FormPasswordProps extends FormTextProps {}

function FormPassword(props: FormPasswordProps) {
	const [showPassword, setShowPassword] = useState(false)

	const handleToggleShowPassword = () => setShowPassword(!showPassword)

	return (
		<FormText
			type={showPassword ? 'text' : 'password'}
			endAdornment={
				<InputAdornment position="end">
					<IconButton
						aria-label="toggle password visibility"
						onClick={handleToggleShowPassword}
						edge="end"
					>
						{showPassword ? <VisibilityOff /> : <Visibility />}
					</IconButton>
				</InputAdornment>
			}
      {...props}
		/>
	)
}

export default FormPassword
