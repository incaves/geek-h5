import React, { Suspense } from 'react'
import Icon from '@/components/Icon'
import styles from './index.module.scss'
import classNames from 'classnames'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom'
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'
const Home = React.lazy(() => import('@/pages/Home'))
const QA = React.lazy(() => import('@/pages/QA'))
const Video = React.lazy(() => import('@/pages/Video'))
const Profile = React.lazy(() => import('@/pages/Profile'))
// 由于每个tabbar都要绑定点击事件很麻烦,抽离成一个数组
const tabBar = [
  { title: '首页', path: '/home', icon: 'iconbtn_home' },
  { title: '问答', path: '/home/qa', icon: 'iconbtn_qa' },
  { title: '视频', path: '/home/video', icon: 'iconbtn_video' },
  { title: '我的', path: '/home/profile', icon: 'iconbtn_mine' },
]
export default function Layout() {
  const history = useHistory()
  const location = useLocation()
  return (
    <div className={styles.root}>
      {/* 区域一:点击按钮切换显示内容的区域,路由区域 */}
      <div className="tab-content">
        {/* 二级路由展示区域 exact精确匹配 */}
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/home/qa" exact component={QA} />
            <Route path="/home/video" exact component={Video} />
            <Route path="/home/profile" exact component={Profile} />
          </Switch>
        </Suspense>
      </div>
      {/* 区域二:按钮区域,会使用固定定位显示在页面底部 */}
      {/* 图标加上sel就高亮,文字加上tabbar-item-active就高亮 */}
      <div className="tabbar">
        {tabBar.map(item => {
          return (
            <div
              // 判断当前地址栏的地址和点击的tabar的path是否相等,相等就给类名,图标也是同理
              className={classNames('tabbar-item', location.pathname === item.path ? 'tabbar-item-active' : null)}
              key={item.title}
              onClick={() => history.push(item.path)}>
              <Icon type={location.pathname === item.path ? item.icon + '_sel' : item.icon}></Icon>
              <span>{item.title}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
