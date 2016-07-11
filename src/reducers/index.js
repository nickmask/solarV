import { combineReducers } from 'redux'
import { ADD_ADDRESS, ADD_POWER, REQUEST_CITY, RECEIVE_CITY } from '../actions/index'

const rootReducer = combineReducers({
  user
})

function user (state = { details: '', power: 400, sunlight: '', isFetching: false }, action) {
  switch (action.type) {
    case ADD_ADDRESS:
      return Object.assign({}, state, {
        details: action.details
      })
    case ADD_POWER:
      return Object.assign({}, state, {
        power: action.power
      })
    case REQUEST_CITY:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_CITY:
      return Object.assign({}, state, {
        isFetching: false,
        sunlight: action.sunlight
      })
    default:
      return state
  }
}

export default rootReducer
