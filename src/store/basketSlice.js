import { createSlice } from '@reduxjs/toolkit'

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    count: 0,
    basket: [],
  },
  reducers: {
    addToBasket(state, action) {
      if (state.basket.length) {
        for (let index = 0; index < state.basket.length; index++) {
          const element = state.basket[index]
          if (element.id === action.payload.id) {
            element.quantity += 1
            return state
          }
        }
      }
      state.basket.push(action.payload)
      state.count += 1
      return state
    },

    deleteFromBasket(state, action) {
      debugger
      state.basket = state.basket.filter(
        (item) => item.id !== action.payload.id
      )
      state.count -= 1
    },
    changeQuantity(state, action) {
      state.basket.map((e) => {
        if (e.id === action.payload.id && action.payload.id !== NaN) {
          e.quantity = Number(action.payload.quantity)
        }
      })
    },
  },
})

export const { addToBasket, deleteFromBasket, changeQuantity } =
  basketSlice.actions
export default basketSlice.reducer
