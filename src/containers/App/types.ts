export type ThemeSettingPresets = 'one' | 'two' | 'three' | 'four' | 'five' | 'six'
export type ThemeSettingMode = 'light' | 'dark'
export interface ThemeSetting {
  mode: ThemeSettingMode;
  presets: ThemeSettingPresets;
}
