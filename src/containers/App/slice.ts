import {createSlice} from "@reduxjs/toolkit";
import type { RootState } from "store/index"

const initialState = {
  speedDial: '',
  setting: {}
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateSpeedDial(state, action) {
      state.speedDial = action.payload
    },
    clearSpeedDial(state) {
      state.speedDial = ''
    },
    updateThemeSetting(state, action) {
      state.setting = action.payload
    },
    clearThemeSetting(state) {
      state.setting = {}
    }
  }
})

export const { updateSpeedDial, clearSpeedDial, updateThemeSetting, clearThemeSetting } = appSlice.actions

export const selectSpeedDial = (state: RootState) => state.app.speedDial
export const selectThemeSetting = (state: RootState) => state.app.setting

export default appSlice
