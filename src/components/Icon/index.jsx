/**
 * @图标组件
 * @type是图标的类名
 * @className是传递来的样式
 * @也可能会传递点击事件
 * @rest表示剩下传递的属性默认放在svg标签上
 * @展开运算符的方式
 */
import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
function Icon({ type, className, ...rest }) {
  return (
    <svg {...rest} className={classNames('icon', className)} aria-hidden="true">
      <use xlinkHref={`#${type}`}></use>
    </svg>
  )
}
// 使用组件时传递的规则(此时type表示是必须的)
Icon.propTypes = {
  type: PropTypes.string.isRequired
}

export default Icon
