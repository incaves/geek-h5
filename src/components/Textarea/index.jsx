import classNames from 'classnames'
import React, { useState } from 'react'
import styles from './index.module.scss'
/**
 * @需要接受的值
 * @maxLenght最多可以输入多少字符
 * @className样式
 * @rest可能还会传递的
 * @value 父组件传递的默认值
 * @onChange父组件的输入事件
 */
export default function Textarea({ maxLength = 100, className, value, onChange, ...rest }) {
  const [content, setContent] = useState(value || '') // 接受父组件传递的value
  const handleChange = e => {
    setContent(e.target.value) // 根据输入的内容,更新content的值
    // 父组件的Textarea组件如果写了onChange事件,把输入的值给父组件
    onChange && onChange(e) // 父组件会接收
  }
  return (
    <div className={styles.root}>
      {/* 文本输入框 */}
      <textarea
        {...rest}
        value={value}
        maxLength={maxLength}
        onChange={handleChange}
        className={classNames('textarea', className)}
      />
      {/* 当前字数/最大允许字数 */}
      <div className="count">
        {content.length}/{maxLength}
      </div>
    </div>
  )
}
