import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { updateToolbarSetter, selectToolbarSetting } from "containers/App/slice";
import useDeepCompareEffect from "hooks/effect/useDeepCompareEffect";
import isEmpty from "lodash/isEmpty";
import useBroadcastChannel from "hooks/useBroadcastChannel";
import type {
  ToolbarSetterPresets,
  ToolbarSetter,
  ToolbarSetterMode,
  ToolbarSetterLayout
} from "components/LayoutToolbar/types"

const useToolbar = () => {
  const dispatch = useDispatch()
  const themeSetting = useSelector(selectToolbarSetting, shallowEqual) as ToolbarSetter
  const { sendBroadcast, listenBroadcast } = useBroadcastChannel()
  const [setting, setSetting] = useState<ToolbarSetter>({
    mode: 'light',
    presets: 'one',
    layout: 'row'
  })

  useEffect(() => {
    const storageSetting = localStorage.getItem('setting')
    const uninstall = listenBroadcast(res => {
      setSetting({ ...res.options })
    })

    if (storageSetting) {
      setSetting({ ...(JSON.parse(storageSetting) as ToolbarSetter) })
    }

    return () => uninstall()
  }, [])

  useDeepCompareEffect(() => {
    if (!isEmpty(themeSetting)) {
      setSetting({ ...themeSetting })
    }
  }, [themeSetting])

  const updateSetting = (option: ToolbarSetter) => {
    dispatch(updateToolbarSetter(option))
    localStorage.setItem('setting', JSON.stringify(option))
    sendBroadcast('theme', option)
  }

  const switchMode = (type: ToolbarSetterMode) => {
    updateSetting({
      ...setting,
      mode: type
    })
  }

  const switchPresets = (type: ToolbarSetterPresets) => {
    updateSetting({
      ...setting,
      presets: type
    })
  }

  const switchLayout = (type: ToolbarSetterLayout) => {
    updateSetting({
      ...setting,
      layout: type
    })
  }

  return {
    mode: setting.mode,
    presets: setting.presets,
    layout: setting.layout,
    setting,
    switchMode,
    switchLayout,
    switchPresets,
  }
}

export default useToolbar
