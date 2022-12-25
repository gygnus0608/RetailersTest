module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  //打包
  publicPath: './',
  outputDir: 'test', //打包输出目录
  assetsDir: './static', //放置生成的静态资源
  filenameHashing: true, // 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
  lintOnSave: false, //设置是否在开发环境下每次保存代码时都启用 eslint验证
  productionSourceMap: false,// 打包时不生成.map文件
  // 代理跨域
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        changeOrigin: true,              //是否设置同源，输入是的
        // pathRewrite:{'^/api':''},
      }
    }
  },
  configureWebpack: {
    //警告 webpack 的性能提示
    performance: {
      hints:'warning',  // 枚举
      //入口起点的最大体积,整数类型（以字节为单位）
      maxEntrypointSize: 50000000,
      //生成文件的最大体积,整数类型（以字节为单位）
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示, 提供资源文件名的断言函数
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js') || assetFilename.endsWith('.css');
      }
    }
  }
}
