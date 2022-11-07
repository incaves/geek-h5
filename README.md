### 项目文件夹

#### src 文件

```javascript
assest -- 项目静态文件
   none.png
   styles -- 全局样式文件
        index.sass --全局样式
        hairline.scss -- 解决移动端1px像素边框
components - 全局共用组件
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
