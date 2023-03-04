import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { selectSpeedDial, updateSpeedDial, clearSpeedDial } from "containers/App/slice";

const useSpeedDial = () => {
  const dispatch = useDispatch()
  const speedDial = useSelector(selectSpeedDial, shallowEqual)

  const update = (id: string) => dispatch(updateSpeedDial(id))

  const clear = () => dispatch(clearSpeedDial())

  return {
    speedDial,
    clearSpeedDial: clear,
    updateSpeedDial: update
  }
}

export default useSpeedDial
