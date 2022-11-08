import request from '@/utils/request'
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
