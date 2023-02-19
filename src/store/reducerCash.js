const ADD_TO_BASKET = 'ADD_TO_BASKET'
const DELETE_FROM_BASKET = 'DELETE_FROM_BASKET'
const initialState = {
  count: 0,
  cash: [],
}
const reducerCash = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return state
    default:
      return state
  }
}

export default reducerCash
