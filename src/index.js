import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from '@/store'
import { Provider } from 'react-redux'
import '@scss/index.scss' // 全局样式文件
ReactDOM.render(
  // 全局导入store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
