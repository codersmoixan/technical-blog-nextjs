import Box from "@mui/material/Box";
import Form from "@/src/core/Form";
import Grid from "@mui/material/Grid";
import Buttons from "components/Buttons";
import { makeStyles } from "@mui/styles";
import useForm from "@/src/core/Form/hooks/useForm";
import useLinks from "containers/Links/hooks/useLinks";
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
    margin: theme.spacing(0, 'auto', 5),
    display: 'block'
  },
  form: {
    marginTop: theme.spacing(3)
  },
}))

function OperateLinks() {
  const classes = useStyles()
  const { observer } = useForm()
  const { add, loading } = useLinks()

  return (
    <Box className={classes.root}>
      <GradientLogo width={60} height={60} classes={{ root: classes.logo }} />
      <Form observer={observer} className={classes.form} onFinish={add}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormText name="label" placeholder="你的URL地址: https://www.links.com" />
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

export default OperateLinks
