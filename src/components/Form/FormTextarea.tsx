/**
 * @author zhengji.su
 * @description FormTextArea
 */

import TextField, { TextFieldProps } from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import useFormController from "hooks/common/useFormController";
import isUndefined from "lodash/isUndefined"
import type { EmptyObject } from "@/src/tb.types"
import type { Theme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useMemo } from "react";
import isNumber from "lodash/isNumber";
import clsx from "clsx";

interface FormTextareaProps extends Omit<TextFieldProps, 'name'> {
  name?: string,
  rules?: EmptyObject<any>,
  maxLength?: string | number;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    '&.error': {
      '& .length': {
        color: theme.colorPalette.primary.error
      }
    }
  },
  textField: {
    width: '100%',
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
        borderWidth: 2
      }
    },
    '& .Mui-error': {
      '&:hover': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.colorPalette.primary.error,
          borderWidth: 2
        }
      },
    },
    '& .MuiInputBase-input': {
      color: theme.palette.primary.main,
      '&::-webkit-input-placeholder': {/*Webkit browsers*/
        fontSize: 14,
        color: theme.palette.primary.main,
      },
      '&::-moz-placeholder': {/*Mozilla Firefox 4 to 8*/
        fontSize: 14,
        color: theme.palette.primary.main,
      },
      '&::moz-placeholder': {/*Mozilla Firefox 19+*/
        fontSize: 14,
        color: theme.palette.primary.main,
      },
      '&::-ms-input-placeholder': {/*Internet Explorer 10+*/
        fontSize: 14,
        color: theme.palette.primary.main,
      },
    },
    '& .MuiInputBase-root': {
      padding: theme.spacing(1, 1, 3)
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },
    '& .MuiFormHelperText-root': {
      position: 'absolute',
      bottom: 0,
      margin: 0,
      transform: 'translateY(100%)'
    }
  },
  length: {
    position: 'absolute',
    bottom: 6,
    right: 8,
    color: theme.palette.primary.main
  },
  maxLength: {
    color: theme.colorPalette.primary.error
  }
}))

function FormTextarea(props: FormTextareaProps) {
  const { name, rules, maxLength: propMaxLength = 100, disabled, className } = props
  const classes = useStyles(props)
  const { fieldProps, fieldState, ref } = useFormController({
    name,
    rules,
  })

  const maxLength = useMemo(() => {
    if (isNumber(propMaxLength)) {
      return propMaxLength
    }

    return isNaN(Number(propMaxLength)) ? 100 : Number(propMaxLength)
  }, [propMaxLength])

  const valueLength = fieldProps.value?.length || 0

  return (
    <Box className={clsx(className, classes.root, {
      error: !isUndefined(fieldState.error)
    })}>
      <TextField
        id="outlined-multiline-static"
        multiline
        classes={{
          root: classes.textField,
        }}
        autoFocus
        rows={4}
        inputRef={ref}
        disabled={disabled ?? valueLength >= maxLength}
        {...props}
        {...fieldProps}
        error={!isUndefined(fieldState.error)}
        helperText={fieldState.error?.message}
      />
      {maxLength && <Typography className={clsx(classes.length, 'length', {
        [classes.maxLength]: valueLength >= maxLength
      })}>{valueLength}/{maxLength}</Typography>}
    </Box>
  )
}

export default FormTextarea
