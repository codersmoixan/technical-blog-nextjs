import {createSlice} from "@reduxjs/toolkit";
import type { RootState } from "store/index"

const initialState = {
  speedDial: '',
  setting: {},
  openLogin: false,
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
    updateToolbarSetter(state, action) {
      state.setting = action.payload
    },
    clearToolbarSetter(state) {
      state.setting = {}
    },
    updateOpenLogin(state, action) {
      state.openLogin = action.payload
    }
  }
})

export const { updateSpeedDial, clearSpeedDial, updateToolbarSetter, clearToolbarSetter, updateOpenLogin } = appSlice.actions

export const selectSpeedDial = (state: RootState) => state.app.speedDial
export const selectToolbarSetting = (state: RootState) => state.app.setting
export const selectOpenLogin = (state: RootState) => state.app.openLogin

export default appSlice
