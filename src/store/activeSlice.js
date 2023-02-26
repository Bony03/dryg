import { createSlice } from '@reduxjs/toolkit'

const activeSlice = createSlice({
  name: 'active',
  initialState: {
    menu: false,
    form: false,
    basket: false,
    theme: 'white',
  },
  reducers: {
    setActiveMenu(state) {
      state.menu = !state.menu
      state.form = false
      state.basket = false
    },
    setActiveFrom(state) {
      state.form = !state.form
      state.basket = false
      state.menu = false
    },
    setActiveBasket(state) {
      state.basket = !state.basket
      state.menu = false
      state.form = false
    },
    setCloseAll(state) {
      return { menu: false, form: false, basket: false, theme: state.theme }
    },
    setBlackTheme(state) {
      state.theme = 'black'
    },
    setWhiteTheme(state) {
      state.theme = 'white'
    },
  },
})

export const {
  setActiveMenu,
  setActiveFrom,
  setActiveBasket,
  setCloseAll,
  setBlackTheme,
  setWhiteTheme,
} = activeSlice.actions

export default activeSlice.reducer
