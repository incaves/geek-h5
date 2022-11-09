// 初始值
const initValue = {
  user: {}, // 个人主页信息
  profile: {}, // 用户信息
}
/**
 * 个人主页信息
 * @param {*} state
 * @param {*} action
 * @returns
 */
export default function resucer(state = initValue, action) {
  const { type, payload } = action
  if (type === 'proflie/user') {
    return {
      ...state, // 取出原来的值
      user: payload, // 赋值
    }
  }
  if (type === 'profile/profile') {
    return {
      ...state, // 取出原来的值
      profile: payload, // 赋值
    }
  }
  return state
}
