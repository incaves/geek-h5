import request from '@/utils/request'
import { setTokenInfo } from '@/utils/storage'
/**
 * @发送验证码
 * @mobile手机号
 * @组件里面调用才会执行
 * @不需要接受数据
 */
export const sendCode = mobile => {
  return async () => {
    await request({
      url: '/sms/codes/' + mobile,
      method: 'get',
    })
  }
}
/**
 * 登陆
 * @param {*} data mobile和code包裹的对象
 */
export const login = data => {
  return async dispatch => {
    const res = await request({
      method: 'post',
      url: '/authorizations',
      data,
    })
    // 保存tokne到redux中
    dispatch(saveToken(res.data))
    // 保存到本地
    setTokenInfo(res.data)
  }
}
// 动作类型,发送给reducer
export const saveToken = payload => {
  return {
    type: 'login/token', // 类型
    payload, // 数据
  }
}
