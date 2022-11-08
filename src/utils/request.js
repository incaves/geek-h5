import axios from 'axios'

const baseURL = 'http://geek.itheima.net/v1_0/'
const instance = axios.create({
  baseURL,
})
// 请求拦截器
instance.interceptors.request.use(
  config => {
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
    return Promise.reject(error)
  }
)
export default instance
