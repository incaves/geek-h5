import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// 路由懒加载
const Login = React.lazy(() => import('@/pages/Login'))
const Home = React.lazy(() => import('@/pages/Home'))

export default function App() {
  return (
    <Router>
      <div className="app">
        <Suspense fallback={<div>loding...</div>}>
          <Switch>
            {/* 重定向 */}
            <Redirect exact from="/" to="/home"></Redirect>
            {/* 组件跳转 */}
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}
