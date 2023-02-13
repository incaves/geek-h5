import Icon from '@/components/Icon'
import styles from './index.module.scss'
export default function Login() {
  return (
    <div className={styles.root}>
      {/* 后退按钮 */}
      <div className="left">
        <Icon type="iconfanhui" />
      </div>
      {/* 居中标题 */}
      <div className="title">我是标题</div>
      {/* 右侧内容 */}
      <div className="right">右侧内容</div>
    </div>
  )
}
