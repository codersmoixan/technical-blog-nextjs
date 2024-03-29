/**
 * @author zhengji.su
 * @description FormChipSelect
 */

import { useState } from "react";
import Grid from "@mui/material/Grid";
import TBChip from "components/TBChip";
import { makeStyles } from "@mui/styles";
import useFormController from "@/src/core/Form/hooks/useFormController";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import clsx from "clsx";
import isUndefined from "lodash/isUndefined";
import useDeepCompareEffect from "hooks/effect/useDeepCompareEffect";
import type { Theme } from "@mui/material";
import type { EmptyObject } from "@/src/tb.types"
import isEmpty from "lodash/isEmpty";

export interface ChipOption extends EmptyObject {
  id: string | number;
  label: string;
  value?: string;
}

interface ChipSelectProps {
  options: ChipOption[];
  onSelect?: (chip: any) => void;
  name?: string;
  rules?: EmptyObject<any>;
  rowKey?: string
}

const useStyles = makeStyles((theme: Theme) => ({
  formText: {
    display: 'none'
  },
  chipError: {
    borderColor: theme.colorPalette.primary.error
  }
}))

function FormChipSelect({ options, onSelect, name, rules, rowKey = 'label' }: ChipSelectProps) {
  const theme = useTheme()
  const classes = useStyles()
  const { ref, fieldProps, fieldState, setValue, clearErrors } = useFormController({
    name,
    rules
  })

  const [active, setActive] = useState<ChipOption>({
    label: '',
    id: ''
  })

  useDeepCompareEffect(() => {
    const value = fieldProps.value
    const ctr = options.find(option => `${option.id}` === `${value}`)
    if (value && ctr) {
      setActive(ctr)
    }
  }, [fieldProps.value, options])

  const handleCheckChip = (chip: any) => {
    setActive(chip)
    onSelect?.(chip)

    if (name && chip.id) {
      setValue(name, chip.id)
      clearErrors(name)
    }
  }

  const isError = !isUndefined(fieldState.error)

  if (isEmpty(options)) {
    return null
  }

  return (
    <>
      <Grid container spacing={2}>
        {options.map(chip => (
          <Grid item key={chip.id} spacing={2}>
            <TBChip
              label={chip[rowKey]}
              active={chip.id === active.id}
              onClick={() => handleCheckChip(chip)}
              className={clsx({
                [classes.chipError]: isError
              })}
            />
          </Grid>
        ))}
      </Grid>
      <Box>
        <input ref={ref} {...fieldProps} className={classes.formText} />
        {isError && <Typography variant="caption" color={theme.colorPalette.primary.error}>{fieldState.error?.message}</Typography>}
      </Box>
    </>
  )
}

export default FormChipSelect
