const SET_ACTIVE_MENU = 'SET_ACTIVE_MENU'
const SET_ACTIVE_FORM = 'SET_ACTIVE_FORM'
const SET_ACTIVE_BASKET = 'SET_ACTIVE_BASKET'
const CLOSE_ALL = 'CLOSE_ALL'
const initialState = {
  menu: false,
  form: false,
  basket: false,
}

function setDisableElement(element) {
  if (element) {
    return !element
  }
  return element
}

const reducerActive = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_MENU:
      return {
        ...state,
        menu: !state.menu,
        form: setDisableElement(state.form),
      }
    case SET_ACTIVE_FORM:
      return {
        ...state,
        form: !state.form,
        menu: setDisableElement(state.menu),
        basket: setDisableElement(state.basket),
      }
    case SET_ACTIVE_BASKET:
      return {
        ...state,
        menu: setDisableElement(state.menu),
        form: setDisableElement(state.form),
        basket: !state.basket,
      }
    case CLOSE_ALL:
      return {
        ...state,
        menu: false,
        form: false,
        basket: false,
      }
    default:
      return state
  }
}

export default reducerActive

export const setActiveMenuCreator = () => ({ type: SET_ACTIVE_MENU })
export const setActiveFormCreator = () => ({ type: SET_ACTIVE_FORM })
export const setActiveBasketCreator = () => ({ type: SET_ACTIVE_BASKET })
export const closeAllCreator = () => ({ type: CLOSE_ALL })
