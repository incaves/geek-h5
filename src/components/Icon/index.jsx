import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
/**
 * @param classNames 这个库用于合并多个类名
 * @param type 接受的是那个图标@
 * @param className 图标的样式和 classNames进行配合
 * @param rest tye和className需要特殊处理,其他的默认传入即刻 {...rest}
 * @returns
 */
function Icon({ type, className, ...rest }) {
  return (
    <svg {...rest} className={classNames('icon', className)} aria-hidden="true">
      <use xlinkHref={`#${type}`}></use>
    </svg>
  )
}
// ! 给Icon组件进行检验
Icon.propTypes = {
  type: PropTypes.string.isRequired,
}
export default Icon
