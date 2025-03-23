import { combineReducers } from 'redux'

const initialState = {
  phone: '',
}

const phoneReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_PHONE':
      return { ...state, phone: action.payload }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  phone: phoneReducer,
})

export default rootReducer
