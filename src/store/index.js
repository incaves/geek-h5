import { legacy_createStore as createStore, applyMiddleware } from 'redux'
// redux开发者工具
import { composeWithDevTools } from 'redux-devtools-extension'
// 用于支持异步action
import thunk from 'redux-thunk'
// 引入全局的reducer
import reducer from './reducers'
// applyMiddleware(thunk)执行中间价
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
