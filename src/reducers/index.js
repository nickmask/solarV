import { combineReducers } from 'redux'
import { ADD_ADDRESS, RECEIVE_PROJECTS } from '../actions/index'

const rootReducer = combineReducers({
  user
})

function user (state = { address: '' }, action) {
  switch (action.type) {
    case ADD_ADDRESS:
      return Object.assign({}, state, {
        address: action.address
      })
      
    case RECEIVE_PROJECTS:
      return Object.assign({}, state, {
        isFetching: false,
        list: action.list,
        receivedAt: action.receivedAt
      })
    default:
      return state
  }
}

export default rootReducer
