const path = require('path') // 拼接路径
const { override, fixBabelImports, addWebpackAlias, addPostcssPlugins } = require('customize-cra')
const px2viewport = require('postcss-px-to-viewport') // px转换vw

// antd-mobile CSS样式按需引入
const babelPlugins = fixBabelImports('import', {
  libraryName: 'antd-mobile',
  style: 'css'
})

// 配置别名
const aliasPlugins = addWebpackAlias({
  '@': path.join(__dirname, 'src'), // @ 代表 src路径
  '@scss': path.join(__dirname, 'src/assets/styles') // @scss 代表 styles文件
})

// px转换vw
const postcssPlugins = addPostcssPlugins([
  px2viewport({
    viewportWidth: 375 // 375可以理解为rem的37.5
  })
])

module.exports = override(babelPlugins, aliasPlugins, postcssPlugins)
