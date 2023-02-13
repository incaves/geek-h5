### 版本
>使用的是React17版本  
>此时还是使用的是ReactDOM.render()的方法
### 项目文件夹
>public文件
```javascript
 --favicon.ico(网站icon)
 --index.html(入口的html文件)
```
>src文件
```javascript 
  --assets(项目资源文件)
    --- style(样式)
        ---- index.scss(清楚默认样式)
        ---- hairline.scss(移动端1px处理)
    --- none.png(图片)
  --components(全局公用组件)
    ---Icon(图标组件)
  --pages(路由页面)
    ---Home(首页)
    ---Login(登录)
  --store(redux)
    ---reducers(reducers)
    ---actions(action)
    ---index.js(创建store)
  --utils(工具)
  --App.jsx(根组件)
  --index.scss(全局样式)
  --index.js(项目入口)
```
>其他文件
```javascript
 --.gitignore(git忽略文件)
 --config-overrides.js(webpack相关)
 --jsconfi.json(@路径提示)
 --package-lock.json(项目依赖记录)
 --package.json(项目所使用的依赖)
 --README.md(项目说明文件)
 --yarn.lock(yarn自动生成的文件)
```
### 项目笔记
>App.jsx中没有使用<Link to='/login></Link>点击的方式进行跳转  
>相当于使用了Vue中的编程式导航
### 项目的一些依赖
```javascript
----classNames
一般多用于封装的组件,在使用组件时需要传递样式  
还在使用组件时,可以添加其他的样式
classNames第一个参数是原有的样式  
classNames第二个参数是使用组件时传递的样式
```