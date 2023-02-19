import { combineReducers, createStore } from 'redux'
import reducerBasket from './reducerBasket'
import reducerCash from './reducerCash'
import { composeWithDevTools } from 'redux-devtools-extension'
const rootReducer = combineReducers({
  basket: reducerBasket,
  cash: reducerCash,
})

export const store = createStore(rootReducer, composeWithDevTools())
