import { combineReducers, createStore } from 'redux'
import reducerBasket from './reducerBasket'
import reducerCash from './reducerCash'
import reducerActive from './reducerActive'
import { composeWithDevTools } from 'redux-devtools-extension'
const rootReducer = combineReducers({
  basket: reducerBasket,
  cash: reducerCash,
  active: reducerActive,
})

export const store = createStore(rootReducer, composeWithDevTools())
