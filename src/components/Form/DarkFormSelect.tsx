import FormSelect, { FormSelectProps } from "components/Form/FormSelect";
import { makeStyles } from "@mui/styles";
import type { Theme } from "@mui/material";

interface DarkFormSelect extends FormSelectProps {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.colorPalette.primary.sullenGrey,
    },
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
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.colorPalette.primary.lightGrey,
      },
    },
    '& .MuiInputBase-input': {
      color: theme.colorPalette.primary.lightGrey,
    },
    '&.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.colorPalette.primary.lightPurple,
        borderWidth: 1
      },
    },
    '& svg': {
      color: '#3b3a47'
    }
  },
  value: {
    color: theme.colorPalette.primary.lightGrey
  },
  placeholder: {
    color: '#3b3a47 !important'
  }
}))

function DarkFormSelectChip(props: DarkFormSelect) {
  const classes = useStyles()

  return (
    <FormSelect
      classes={{
        root: classes.root,
        label: classes.label,
        input: classes.input,
        value: classes.value,
        placeholder: classes.placeholder
      }}
      {...props}
    />
  )
}

export default DarkFormSelectChip
