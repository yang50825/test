const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 3001,
    // 开启代理服务器（方式一
    // proxy: 'http://localhost:5000'
    // 开启代理服务器（方式二
    proxy: {
      '/api': {
        target: 'http://localhost:9002',
        pathRewrite: { '^/api': '' },
        ws: true, // 用于支持websocket
        changeOrigin: true, // 用于控制请求值中的host字段
      },
      '/car': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/car': '' },
      },
    },
  },
})
