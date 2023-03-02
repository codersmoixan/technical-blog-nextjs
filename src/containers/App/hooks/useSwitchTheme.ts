import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { updateThemeSetting, selectThemeSetting } from "containers/App/slice";
import useDeepCompareEffect from "hooks/common/effect/useDeepCompareEffect";
import isEmpty from "lodash/isEmpty";
import type { ThemeSettingPresets, ThemeSetting, ThemeSettingMode } from "../types"

const useSwitchTheme = () => {
  const dispatch = useDispatch()
  const themeSetting = useSelector(selectThemeSetting, shallowEqual) as ThemeSetting
  const [setting, setSetting] = useState<ThemeSetting>({
    mode: 'light',
    presets: 'one'
  })

  useEffect(() => {
    const storageSetting = localStorage.getItem('setting')

    if (storageSetting) {
      setSetting({ ...(JSON.parse(storageSetting) as ThemeSetting) })
    }
  }, [])

  useDeepCompareEffect(() => {
    if (!isEmpty(themeSetting)) {
      setSetting({ ...themeSetting })
    }
  }, [themeSetting])

  const updateSetting = (option: ThemeSetting) => {
    dispatch(updateThemeSetting(option))
    localStorage.setItem('setting', JSON.stringify(option))
  }

  const switchMode = (type: ThemeSettingMode) => {
    updateSetting({
      ...setting,
      mode: type
    })
  }

  const switchPresets = (type: ThemeSettingPresets) => {
    updateSetting({
      ...setting,
      presets: type
    })
  }

  return {
    mode: setting.mode,
    presets: setting.presets,
    setting,
    switchMode,
    switchPresets
  }
}

export default useSwitchTheme
