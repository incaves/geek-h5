import NavBar from '@/components/NavBar'
import React, { useEffect, useState } from 'react'
import { List, DatePicker, Drawer } from 'antd-mobile'
import styles from './index.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile } from '@/store/action/profile'
import classNames from 'classnames'
const { Item } = List
export default function ProfileEdit() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserProfile())
  }, [dispatch])
  const profile = useSelector(state => state.profile.profile) // 获取redux的prrfile数据
  const [open, setOpen] = useState(false) // 控制抽屉的显示或隐藏

  return (
    <div className={styles.root}>
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
              setOpen(true)
            }}>
            昵称
          </Item>
          {/* 如果已经填写加上一个normal高亮,未填写就浅灰色 */}
          <Item
            arrow="horizontal"
            extra={
              <span className={classNames('intro', profile.intro ? 'normal' : '')}>{profile.intro || '未填写'}</span>
            }
            onClick={() => {}}>
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
      {/* 抽屉组件,全屏的效果 */}
      <Drawer
        sidebar={<div>抽屉的内容</div>}
        open={open}
        style={{ minHeight: document.documentElement.clientHeight }}
        className="drawer">
        {''}
      </Drawer>
    </div>
  )
}
