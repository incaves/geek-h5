import NavBar from '@/components/NavBar'
import React, { useEffect, useState } from 'react'
import { List, DatePicker, Drawer, Toast } from 'antd-mobile'
import styles from './index.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile, updateProfile } from '@/store/action/profile'
import classNames from 'classnames'
import EditInput from './components/EditInput'
const { Item } = List
export default function ProfileEdit() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserProfile())
  }, [dispatch])
  const profile = useSelector(state => state.profile.profile) // 获取redux的prrfile数据
  const [open, setOpen] = useState({
    visible: false, // 控制抽屉的显示或隐藏
    type: '', // 控制是简介还是昵称
  })
  // 子组件需要父组件的事件,来关闭抽屉,需要传给子组件
  const onClose = () => {
    setOpen({
      visible: false,
      type: '',
    })
  }
  // 提交修改表单 type 可能是 昵称 ｜ 简介
  const onCommit = async (type, value) => {
    await dispatch(updateProfile({ [type]: value }))
    Toast.success('修改成功', 1, null, false)
    onClose()
  }
  return (
    <div className={styles.root}>
      <div className="content">
        {/* 顶部导航栏 */}
        <NavBar>个人信息</NavBar>
        {/* 列表 */}
        <div className="wrapper">
          <List className="profile-list">
            <Item
              arrow="horizontal"
              extra={
                <span className="avatar-wrapper">
                  <img src={profile.photo} alt="" />
                </span>
              }
              onClick={() => {}}>
              头像
            </Item>
            <Item
              arrow="horizontal"
              extra={profile.name}
              onClick={() => {
                setOpen({
                  visible: true, // 打开抽屉
                  type: 'name', // 更改open对象类型,子组件要用
                })
              }}>
              昵称
            </Item>
            {/* 如果已经填写加上一个normal高亮,未填写就浅灰色 */}
            <Item
              arrow="horizontal"
              extra={
                <span className={classNames('intro', profile.intro ? 'normal' : '')}>{profile.intro || '未填写'}</span>
              }
              onClick={() => {
                setOpen({
                  visible: true, // 打开抽屉
                  type: 'intro', // 更改open对象的类型,子组件要用
                })
              }}>
              简介
            </Item>
          </List>
          <List className="profile-list">
            <Item extra={profile.gender === 0 ? '男' : '女'} arrow="horizontal" onClick={() => {}}>
              性别
            </Item>
            {/* 日期选择框,需要包裹Item */}
            <DatePicker
              mode="date"
              value={new Date(profile.birthday)}
              onChange={() => {}}
              title="选择年月日"
              minDate={new Date(1900, 1, 1, 0, 0, 0)}
              maxDate={new Date()}>
              <List.Item arrow="horizontal" extra={'2020-02-02'}>
                生日
              </List.Item>
            </DatePicker>
          </List>
          {/* 文件选择框，用于头像图片的上传 */}
          <input type="file" hidden />
        </div>
        {/* 退出按钮 */}
        <div className="logout">
          <button className="btn">退出登录</button>
        </div>
      </div>
      {/* 抽屉组件,全屏的效果,sidebar是抽屉的内容,open是打开抽屉 */}
      {/* onClose父组件的事件,左侧的返回 怎样返回 */}
      {/* 通过open.type 来判断是昵称还是简介 */}
      {/* onCommit 接收子组件传递的 类型和文本框的值 */}
      <Drawer
        position="right"
        sidebar={open.visible && <EditInput onClose={onClose} type={open.type} onCommit={onCommit}></EditInput>}
        open={open.visible}
        className="drawer">
        {''}
      </Drawer>
    </div>
  )
}
