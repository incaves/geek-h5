import { combineReducers } from 'redux'

function test(state = 0, action) {
  return state
}
const reducer = combineReducers({
  test
})

export default reducer
