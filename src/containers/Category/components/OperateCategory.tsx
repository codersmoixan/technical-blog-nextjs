import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Logo from "components/Logo";
import Grid from "@mui/material/Grid";
import Buttons from "components/Buttons";
import Form from "@/src/core/Form";
import useForm from "@/src/core/Form/hooks/useForm";
import type { Theme } from "@mui/material";
import useCategory from "containers/Category/hooks/useCategory";
import FormText from "components/Form/FormText";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 296,
  },
  logo: {
    margin: theme.spacing(0, 'auto', 5),
    width: 100,
    height: 100,
  },
  form: {
    marginTop: theme.spacing(3)
  },
}))

function OperateCategory() {
  const classes = useStyles()
  const { observer } = useForm()
  const { add, loading } = useCategory()

  return (
    <Box className={classes.root}>
      <Logo className={classes.logo} />
      <Form observer={observer} className={classes.form} onFinish={add}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormText name="label" placeholder="你的分类: Go" />
          </Grid>
          <Grid item xs={12}>
            <Buttons
              fullWidth
              variant="contained"
              type="submit"
              loading={loading}
            >提交</Buttons>
          </Grid>
        </Grid>
      </Form>
    </Box>
  )
}

export default OperateCategory
