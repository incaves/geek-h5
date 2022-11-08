import React from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'
/**
 * @rest 所有传递的内容都给input
 * @extra 额外可能会显示的信息
 * @onExtraClick 点击事件(父组件传递的点击事件)
 * @className 可能会传递样式(使用classNames进行合并)(写一个input表示它时固定的)
 */
export default function Input({ extra, onExtraClick, className, ...rest }) {
  return (
    <div className={styles.root}>
      <input className={classNames('input', className)} {...rest} />
      {/* extra存在才显示文本,并绑定点击事件 */}
      {extra ? (
        <div className="extra" onClick={onExtraClick}>
          {extra}
        </div>
      ) : null}
    </div>
  )
}
