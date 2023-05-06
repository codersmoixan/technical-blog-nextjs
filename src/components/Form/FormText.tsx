/**
 * @author zhengji.su
 * @description FormText
 */

import { makeStyles } from "@mui/styles";
import OutlinedInput, { OutlinedInputProps } from "@mui/material/OutlinedInput";
import { FormControl, InputLabel } from "@mui/material";
import isString from "lodash/isString";
import isUndefined from "lodash/isUndefined"
import clsx from "clsx";
import type { ReactNode } from "react";
import useFormController from "@/src/core/Form/hooks/useFormController";
import type { EmptyObject } from "@/src/tb.types"
import type { Theme } from "@mui/material";
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material/styles";

export interface FormTextProps extends OutlinedInputProps {
  className?: string;
  label?: ReactNode | undefined;
  bgColor?: string;
  name?: string;
  rules?: EmptyObject<any>;
  helpText?: string;
  classes?: Partial<ReturnType<typeof useStyles>>;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  formControl: {
    position: 'relative',
    width: '100%'
  },
  label: {
    position: 'absolute',
    top: '50%',
    left: 14,
    transform: 'translateY(-50%) scale(1)',
    fontSize: 14,
    color: theme.palette.primary.main,
    transition: 'all .3s',
    '&.MuiFormLabel-root.Mui-focused, &.checked': {
      transform: 'scale(0.85)',
      left: 16,
      top: -7,
      fontSize: 12,
      color: theme.palette.primary.main,
      backgroundColor: theme.colorPalette.primary.transparent
    },
    '&.error, &.error.Mui-focused': {
      color: theme.colorPalette.primary.error,
    }
  },
  input: {
    borderRadius: 8,
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
        borderWidth: 2,
      },
      '&.Mui-error': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.colorPalette.primary.error,
        },
      }
    },
    '& .MuiInputBase-input': {
      position: 'relative',
      padding: theme.spacing(0, 1.75),
      height: 42,
      color: theme.palette.primary.main,
      '&::-webkit-input-placeholder': {/*Webkit browsers*/
        fontSize: 14,
      },
      '&::-moz-placeholder': {/*Mozilla Firefox 4 to 8*/
        fontSize: 14,
      },
      '&::moz-placeholder': {/*Mozilla Firefox 19+*/
        fontSize: 14,
      },
      '&::-ms-input-placeholder': {/*Internet Explorer 10+*/
        fontSize: 14,
      },
      '&:-internal-autofill-previewed, &:-internal-autofill-selected': {
        'transition': 'background-color 5000s ease-out 0.5s',
        '-webkit-text-fill-color': theme.palette.primary.main
      }
    },
  },
  notchedOutline: {
    borderColor: theme.palette.primary.main,
    backgroundColor: (props: FormTextProps) => props.bgColor ?? theme.colorPalette.primary.transparent,
  },
  focused: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-error': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.colorPalette.primary.error,
      },
    },
  }
}))

function FormText(props: FormTextProps) {
  const { className, label, name, rules, error, helpText, value, ...other } = props
  const classes = useStyles(props)
  const theme = useTheme()
  const { fieldProps, fieldState, ref } = useFormController({
    name,
    rules
  })

  const isError = error ?? !isUndefined(fieldState.error)

  return (
    <div className={classes.root}>
      <FormControl variant="outlined" className={clsx(classes.formControl, className)}>
        {label && (
          <InputLabel
            htmlFor="form-text"
            className={clsx({
              checked: fieldProps.value,
              error: isError
            })}
            classes={{
              root: classes.label,
            }}
          >{label}</InputLabel>
        )}
        <OutlinedInput
          id="form-text"
          className={clsx({
            checked: fieldProps.value
          })}
          classes={{
            root: classes.input,
            notchedOutline: classes.notchedOutline,
            focused: classes.focused,
          }}
          label={label}
          placeholder={isString(label) ? label : ''}
          {...fieldProps}
          inputRef={ref}
          error={isError}
          {...other}
        />
      </FormControl>
      {isError && <Typography variant="caption" color={theme.colorPalette.primary.error}>{helpText ?? fieldState.error?.message}</Typography>}
    </div>
  )
}

export default FormText
