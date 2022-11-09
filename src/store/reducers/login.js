// 初始值
// const initValue = {
//   token: '',
//   refresh_token: '',
// }
import { getTokenInfo } from '@/utils/storage'
const initValue = getTokenInfo() // ? 从本地中读取初始值(也可以从store中获取,第二个参数)
export default function reducer(state = initValue, action) {
  const { type, payload } = action // 获取到action, type动作类型 payload = Token
  // 要和action中的名字一致
  if (type === 'login/token') {
    return payload
  }
  return state
}
