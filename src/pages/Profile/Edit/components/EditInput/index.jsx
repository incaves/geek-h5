import NavBar from '@/components/NavBar'
import Textarea from '@/components/Textarea'
import Input from '@/components/Input'
import React, { useState } from 'react'
import styles from './index.module.scss'
import { useSelector } from 'react-redux'
// type = name | intro
export default function EditInput({ onClose, type, onCommit }) {
  // 根据父组件传递的type类型,里去找rudex中符合的 ...[type], 拿到昵称或简介
  const defaultValue = useSelector(state => state.profile.profile[type])
  const [value, setValue] = useState(defaultValue || '')
  return (
    <div className={styles.root}>
      <NavBar
        extar={
          // 传递当前组件的类型和值
          <span className="commit-btn" onClick={() => onCommit(type, value)}>
            提交
          </span>
        }
        onLeftClick={onClose}>
        编辑{type === 'name' ? '昵称' : '简介'}
      </NavBar>
      {/* 内容区域 */}
      <div className="content-box">
        <h3>{type === 'name' ? '昵称' : '简介'}</h3>
        {/* 回显内容 */}
        {/* e => setValue(e.target.value 获取最新的值,存进value中 */}
        {type === 'name' ? (
          <Input className="input-wrap" autoFocus value={value} onChange={e => setValue(e.target.value)}></Input>
        ) : (
          <Textarea value={value} onChange={e => setValue(e.target.value)}></Textarea>
        )}
      </div>
    </div>
  )
}
