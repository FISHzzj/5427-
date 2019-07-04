module.exports = {
  proxy: {
    '/api': {
      target: 'http://www.514544.com',  // 接口域名
      changeOrigin: true,  //是否跨域
      pathRewrite: {
        '^/api': '/'
      }
    }
  }
}