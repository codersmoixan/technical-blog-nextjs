import { useState } from "react";
import type { ThemePresets } from "../types"

const useSwitchTheme = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const [presets, setPresets] = useState<ThemePresets>('one')

  const switchMode = (type: 'light' | 'dark') => {
    setMode(type)
  }

  const switchPresets = (type: ThemePresets) => {
    setPresets(type)
  }

  return {
    mode,
    presets,
    switchMode,
    switchPresets
  }
}

export default useSwitchTheme
