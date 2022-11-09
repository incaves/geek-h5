import { Toast } from 'antd-mobile'
import axios from 'axios'
import { getTokenInfo } from './storage'
const baseURL = 'http://geek.itheima.net/v1_0/'
const instance = axios.create({
  baseURL,
  timeout: 5000,
})
// 请求拦截器
instance.interceptors.request.use(
  config => {
    const token = getTokenInfo().token // 获取token
    if (token) {
      // 设置请求头的 Authorization 字段
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 响应拦截器
// ? axios默认包括了一层data:{}
instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    if (error.response) {
      // 有错误
      Toast.info(error.response.data.message)
    } else {
      // 没有错误
      Toast.info('网络繁忙,请稍后重试')
    }
    return Promise.reject(error)
  }
)
export default instance
