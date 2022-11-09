import request from '@/utils/request'

/**
 * 获取用户基本信息
 * @returns Promise
 */
export const getUser = () => {
  return async dispatch => {
    const res = await request({
      method: 'get',
      url: '/user',
    })
    // 存储数据,给到下面的动作类型,让它给reducer
    dispatch(saveUser(res.data))
  }
}
// 保存个人主页信息,动作类型,发送给reducer
export const saveUser = payload => {
  return { type: 'proflie/user', payload }
}
/**
 * 获取用户详情
 * @returns  Promise
 */
export const getUserProfile = () => {
  return async dispatch => {
    const res = await request({
      method: 'get',
      url: '/user/profile',
    })
    dispatch(saveProfile(res.data))
  }
}
// 保存用户信息,动作类型,发送个reducer
export const saveProfile = payload => {
  return { type: 'profile/profile', payload }
}
