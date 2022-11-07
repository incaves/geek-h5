### 项目文件夹

#### src 文件

```javascript
assest -- 项目静态文件
   none.png
   styles -- 全局样式文件
        index.sass --全局样式
        hairline.scss -- 解决移动端1px像素边框
components - 全局共用组件
        Icom  -- icon图标(svg)
        NavBar -- 顶部标题栏
pages - 路由组件
store - rudux
utils - 工具
App.jsx - 根文件
index.js - 入口文件
```

#### 其他文件

```javascript
config-overrrides.js webapck
        ant-mobile 按需引入
        @形式导入文件
        px自动转换为vw(不支持内联样式,文字要有fontSizi,才能变大变小)
jsconfig.json 让代码中支持以@/xxxx形式的路径来导入文件
```

#### 补充

```javascript
classNames 用于合并样式
className={classNames('input', className)}
input就是固定的样式,本身就存在的样式
className就是传递来的样式
两者进行合并
```

```javascript
登录表单的数据绑定
使用 `formik` 库进行表单的数据绑定
const form = useFormik({})
```
