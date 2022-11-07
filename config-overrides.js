const path = require('path')
const { override, fixBabelImports, addWebpackAlias, addPostcssPlugins } = require('customize-cra')
const px2viewport = require('postcss-px-to-viewport')

// 按需引入
const babelPlugins = fixBabelImports('import', {
  libraryName: 'antd-mobile',
  style: 'css',
})
// @/..
const webpackAlias = addWebpackAlias({
  // @ 标识src文件
  '@': path.resolve(__dirname, 'src'),
  // @scss只有这三个文件进行匹配
  '@scss': path.resolve(__dirname, 'src', 'assets', 'styles'),
})
// 移动端布局 viewport 适配方案
// 注意不支持 内联样式
const postcssPlugins = addPostcssPlugins([
  px2viewport({
    // 可以设置为设计稿的宽度
    viewportWidth: 375, // 37.5
  }),
])

// 导出要进行覆盖的 webpack 配置
module.exports = override(babelPlugins, webpackAlias, postcssPlugins)
