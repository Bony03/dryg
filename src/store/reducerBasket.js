const ADD_TO_BASKET = 'ADD_TO_BASKET'
const DELETE_FROM_BASKET = 'DELETE_FROM_BASKET'
const initialState = {
  count: 0,
  basket: [],
}

function contains(arr, arg) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].id === arg.id) {
      arr[i].quantity++
      return [...arr]
    }
  }
  return [...arr, arg]
}

const reducerBasket = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: contains(state.basket, action.payload),
        count: state.count + 1,
      }
    case DELETE_FROM_BASKET:
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload.id),
        count: state.count - action.payload.quantity,
      }
    default:
      return state
  }
}

export default reducerBasket

export const addToBasket = (payload) => ({ type: ADD_TO_BASKET, payload })
export const deleteFromBasket = (payload) => ({
  type: DELETE_FROM_BASKET,
  payload,
})
