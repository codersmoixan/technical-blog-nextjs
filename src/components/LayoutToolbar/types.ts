export type ToolbarSetterPresets = 'one' | 'two' | 'three' | 'four' | 'five' | 'six'
export type ToolbarSetterMode = 'light' | 'dark'
export type ToolbarSetterLayout = 'row' | 'column'
export interface ToolbarSetter {
  mode: ToolbarSetterMode;
  presets: ToolbarSetterPresets;
  layout: ToolbarSetterLayout
}
