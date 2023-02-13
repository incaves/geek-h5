import React from 'react'
import Icon from '@/components/Icon'
import styles from './index.module.scss'
import { useHistory } from 'react-router'
/**
 * @children标题
 * @extra右侧内容
 */
// 组件不是路由所配置的组件,拿不到 history,match,location
// 可以使用useHistory
export default function Navbar({ children, extra }) {
  const history = useHistory()
  // 这个方式是给Icon组件注册的
  const back = () => {
    history.go(-1)
  }
  return (
    <div className={styles.root}>
      {/* 后退按钮 */}
      <div className="left">
        <Icon type="iconfanhui" onClick={back} />
      </div>
      {/* 居中标题 */}
      <div className="title">{children}</div>
      {/* 右侧内容 */}
      <div className="right">{extra}</div>
    </div>
  )
}
