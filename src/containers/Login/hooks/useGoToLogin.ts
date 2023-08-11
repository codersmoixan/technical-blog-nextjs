import {useDispatch, useSelector} from "react-redux";
import {selectOpenLogin, updateOpenLogin} from "containers/App/slice";

const useGoToLogin = () => {
  const dispatch = useDispatch()
  const open = useSelector(selectOpenLogin)

  const toggleLogin = (flag: boolean) => dispatch(updateOpenLogin(flag))

  return {
    open,
    toggleLogin
  }
}

export default useGoToLogin
