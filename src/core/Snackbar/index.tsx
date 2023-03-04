import React, { useEffect } from "react"
import isEmpty from "lodash/isEmpty";
import { useDispatch, useSelector } from "react-redux";
import useNotifier from "core/Snackbar/hooks/useNotifier";
import { getNotifications, removeSnackbar } from "core/Snackbar/slice";

function Snackbar() {
  const notifications = useSelector(getNotifications)
  const dispatch = useDispatch()
  const notify = useNotifier()

  useEffect(() => {
    if (!isEmpty(notifications)) {
      notifications.forEach(notification => {
        notify(notification.message, notification.variant, {
          key: notification.key,
          onExited: (event, key) => {
            dispatch(removeSnackbar(key));
          },
        })
      })
    }
  }, [notifications, dispatch, notify])

  return null
}

export default Snackbar
