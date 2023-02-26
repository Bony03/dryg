import activeSlice from './activeSlice'
import basketSlice from './basketSlice'
import { composeWithDevTools } from 'redux-devtools-extension'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore(
  {
    reducer: {
      basket: basketSlice,
      active: activeSlice,
    },
  },
  composeWithDevTools()
)
