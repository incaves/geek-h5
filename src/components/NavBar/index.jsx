import React from 'react'
import Icon from '@/components/Icon'
import styles from './index.module.scss'
import { useHistory } from 'react-router'
/*
? 1.一般路由组件可以获取到 history match location 前提是这个组件必须是路由组件
? 2.自己渲染的组件无法获取到路由信息,可以使用WithRouter
? 3.路由提供了几个和路由相关的HooK 
! useHistory  useLocation  useParams
*/
/**
 * @默认使用props传递
 * @title 标题区域
 * @extar 右侧内容
 * @onLeftClick点击图标跳转到那里 可选的
 */
export default function NavBar({ children, extar, onLeftClick }) {
  const history = useHistory()
  const back = () => {
    if (onLeftClick) {
      // 传递了onLeftClick
      onLeftClick() // 执行传递的回调(在当前使用组件内编写)
    } else {
      history.go(-1) // 返回上一页
    }
  }
  return (
    // 使用scss变量
    <div className={styles.root}>
      {/* 后退按钮 */}
      <div className="left">
        <Icon type="iconfanhui" onClick={back} />
      </div>
      {/* 居中标题 */}
      <div className="title">{children}</div>
      {/* 右侧内容 */}
      <div className="right">{extar}</div>
    </div>
  )
}
