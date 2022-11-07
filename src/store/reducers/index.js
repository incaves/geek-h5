import { combineReducers } from 'redux'
function test(state = 0, action) {
  return state
}
// 合并多个reducer
const reducer = combineReducers({
  test,
})

export default reducer
