import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '@scss/index.scss' // 清除默认样式
import store from '@/store'
import { Provider } from 'react-redux'
ReactDOM.render(
  // 全局注入store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
