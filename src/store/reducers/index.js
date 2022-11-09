import { combineReducers } from 'redux'
import login from './login'
import profile from './profile'
// 合并多个reducer
const reducer = combineReducers({
  login,
  profile,
})

export default reducer
