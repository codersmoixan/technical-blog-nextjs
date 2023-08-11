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
import {useMediaQuery} from "@mui/material";

const useToolbar = () => {
  const dispatch = useDispatch()
  const darkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const themeSetting = useSelector(selectToolbarSetting, shallowEqual) as ToolbarSetter
  const { sendBroadcast, listenBroadcast } = useBroadcastChannel()
  const [setting, setSetting] = useState<ToolbarSetter>({
    mode: 'light',
    presets: 'one',
    layout: 'row'
  })

  const updateThemeSetting = (initSetting: ToolbarSetter) => {
    if (initSetting.mode === 'system') {
      setSetting({ ...initSetting, mode: darkMode ? 'dark' : 'light' })
    } else {
      setSetting({ ...initSetting })
    }
  }

  useEffect(() => {
    const storageSetting = localStorage.getItem('setting')
    const uninstall = listenBroadcast(res => {
      setSetting({ ...res.options })
    })

    if (storageSetting) {
      updateThemeSetting((JSON.parse(storageSetting) as ToolbarSetter))
    }

    return () => uninstall()
  }, [darkMode])

  useDeepCompareEffect(() => {
    if (!isEmpty(themeSetting)) {
      updateThemeSetting(themeSetting)
    }
  }, [themeSetting, darkMode])

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
    storeMode: themeSetting.mode || setting.mode,
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
