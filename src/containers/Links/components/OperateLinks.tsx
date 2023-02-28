import Box from "@mui/material/Box";
import Logo from "components/Logo";
import Form from "components/Form/Form";
import Grid from "@mui/material/Grid";
import Buttons from "components/Buttons";
import { makeStyles } from "@mui/styles";
import useForm from "hooks/common/useForm";
import useLinks from "containers/Links/hooks/useLinks";
import FormText from "components/Form/FormText";
import type { Theme } from "@mui/material";

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

function OperateLinks() {
  const classes = useStyles()
  const { observer } = useForm()
  const { add, loading } = useLinks()

  return (
    <Box className={classes.root}>
      <Logo className={classes.logo} />
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
