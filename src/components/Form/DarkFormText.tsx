import FormText, { FormTextProps } from "components/Form/FormText";
import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material";

interface DarkFormTextProps extends FormTextProps {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
  },
  label: {
    '&.MuiFormLabel-root': {
      color: theme.colorPalette.primary.lightGrey,
      '&.Mui-focused': {
        color: theme.colorPalette.primary.lightPurple,
      },
    },
  },
  input: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.colorPalette.primary.sullenGrey,
    },
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.colorPalette.primary.lightGrey,
      },
    },
    '& .MuiInputBase-input': {
      color: theme.colorPalette.primary.lightGrey,
    },
    '&.Mui-focused': {
      '& fieldset.MuiOutlinedInput-notchedOutline': {
        borderColor: theme.colorPalette.primary.lightPurple,
        borderWidth: 1
      },
    },
    '&.checked': {
      '& fieldset.MuiOutlinedInput-notchedOutline': {
        backgroundColor: theme.colorPalette.primary.transparent,
      },
    }
  },
}))

function DarkFormText({ name, label, ...other }: DarkFormTextProps) {
  const classes = useStyles()

  return (
    <FormText
      name={name}
      label={label}
      classes={{
        root: classes.root,
        label: classes.label,
        input: classes.input
      }}
      autoComplete="off"
      {...other}
    />
  )
}

export default DarkFormText
