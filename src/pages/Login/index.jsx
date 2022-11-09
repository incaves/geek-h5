import React, { useState } from 'react'
import NavBar from '@/components/NavBar'
import styles from './index.module.scss'
import Input from '@/components/Input'
import { useFormik } from 'formik'
import classNames from 'classnames'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { login, sendCode } from '@/store/action/login'
import { Toast } from 'antd-mobile'
import { useHistory } from 'react-router'
export default function Login() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [time, setTime] = useState(0) // 控制倒计时的时间
  // 表单双向绑定
  const formik = useFormik({
    initialValues: {
      mobile: '13911111111',
      code: '246810',
    },
    // 表单提交时触发
    // ? values就是表单的数据
    async onSubmit(values) {
      // 发送请求
      await dispatch(login(values))
      Toast.success('登陆成功')
      // 跳转到首页
      history.push('/home')
    },
    // 表单检验
    validationSchema: Yup.object({
      mobile: Yup.string()
        .required('手机号不能为空')
        .matches(/^1[3-9]\d{9}$/, '手机号格式错误'),
      code: Yup.string()
        .required('验证码不能为空')
        .matches(/^\d{6}$/, '验证码格式错误'),
    }),
  })
  //  发送验证码
  const onExtraClickFun = async () => {
    if (time > 0) return // 大于0表示正在倒计时,不应该被点击
    // 先对手机号进行验证
    if (!/^1[3-9]\d{9}$/.test(mobile)) {
      formik.setTouched({
        mobile: true,
      })
      return
    }
    // ? 调用action的senCode事件,传递mobile(不需要结构,下方已经结构过了)
    await dispatch(sendCode(mobile)) // 等待结果是否成功,成功后再继续进行下方的代码
    Toast.success('获取验证码成功', 1)
    // 开启倒计时
    setTime(60) // 先改为60,从60开始-
    let timer = setInterval(() => {
      // ! setTime(time - 1) 不可以 time是改成了60 但这里的time会向上层寻找 time = 0 (闭包) 0 - 1  所以60s立刻变 -1
      setTime(time => {
        // 必须放里面他也获取不到最新的time,用于都成了 0 === 0
        if (time === 0) {
          clearInterval(timer)
        }
        return time - 1 // ! 这里的time是传递进来的time,不会向外层寻找,不会形成闭包
      })
    }, 1000)
  }
  // 结构赋值进行表单绑定
  // ? handleChange = 可以把输入的值放到 initialValues
  // ? handleSubmit 表单提交
  // ? handleBlur 失去焦点,进行校验
  // ? touched 表示触摸过当前元素
  // ? errors  表单校验错误信息
  // ? isValid 表单是否检验通过 true｜ false
  const {
    values: { mobile, code },
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    isValid,
  } = formik
  return (
    <div className={styles.root}>
      <NavBar>登录</NavBar>
      <div className="content">
        {/* 标题 */}
        <h3>短信登录</h3>
        <form onSubmit={handleSubmit}>
          {/* 手机号输入框 */}
          <div className="input-item">
            <div className="input-box">
              <Input
                placeholder="请输入手机号"
                autoComplete="off"
                name="mobile"
                value={mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={11}
              />
            </div>
            {/* 提示信息 */}
            {touched.mobile && errors.mobile ? <div className="validate">{errors.mobile}</div> : null}
          </div>
          {/* 短信验证码输入框 */}
          <div className="input-item">
            <div className="input-box">
              <Input
                placeholder="请输入验证码"
                name="code"
                autoComplete="off"
                onChange={handleChange}
                value={code}
                extra={time === 0 ? '获取验证码' : time + '秒后获取'}
                onExtraClick={onExtraClickFun}
                onBlur={handleBlur}
                maxLength={6}
              />
            </div>
            {/* 提示信息 */}
            {touched.code && errors.code ? <div className="validate">{errors.code}</div> : null}
          </div>
          {/* 登录按钮 */}
          <button type="submit" className={classNames('login-btn', { disabled: !isValid })} disabled={!isValid}>
            登录
          </button>
        </form>
      </div>
    </div>
  )
}
