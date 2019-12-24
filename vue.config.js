module.exports = {
//   publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    proxy: {
      '/app': {
        target:"http://localhost",
        secure: false,//ws: true,//websocket支持
        changeOrigin: true,//是否允许跨越
        pathRewrite: {
            '^/app': '/'          
          }
      },
      
    },
  }
};