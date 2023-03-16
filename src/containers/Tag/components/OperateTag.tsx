import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Form from "@/src/core/Form";
import useForm from "@/src/core/Form/hooks/useForm";
import Grid from "@mui/material/Grid";
import Buttons from "components/Buttons";
import useTag from "containers/Tag/hooks/useTag";
import FormText from "components/Form/FormText";
import GradientLogo from "components/Logo/GradientLogo";
import type { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 296,
    [theme.breakpoints.down('md')]: {
      width: 'auto'
    }
  },
  logo: {
    margin: theme.spacing(0, 'auto', 2),
    display: 'block'
  },
  form: {
    marginTop: theme.spacing(3)
  },
}))

function OperateTag() {
  const classes = useStyles()
  const { observer } = useForm()
  const { add, loading } = useTag()

  return (
    <Box className={classes.root}>
      <GradientLogo width={60} height={60} classes={{ root: classes.logo }} />
      <Form observer={observer} className={classes.form} onFinish={add}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormText name="label" placeholder="标签: Go" rules={{ required: '需要输入标签' }} />
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

export default OperateTag
