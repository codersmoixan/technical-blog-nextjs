import store from "store/index"
import {enqueueSnackbar} from "core/Snackbar/slice";

export function notifySnackbar() {
  const { dispatch } = store

  const success = (msg: string) => {
    dispatch(enqueueSnackbar({
      message: msg,
      key: new Date().getTime(),
      variant: 'success'
    }))
  }

  const warning = (msg: string) => {
    dispatch(enqueueSnackbar({
      message: msg,
      key: new Date().getTime(),
      variant: 'warning'
    }))
  }

  const error = (msg: string) => {
    dispatch(enqueueSnackbar({
      message: msg,
      key: new Date().getTime(),
      variant: 'error'
    }))
  }

  return {
    success,
    warning,
    error
  }
}

const notify = notifySnackbar()

export default notify
