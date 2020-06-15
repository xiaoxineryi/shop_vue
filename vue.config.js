module.exports = {
  runtimeCompiler: true,
  publicPath: '/', // 设置打包文件相对路径
  devServer: {
    // open: process.platform === 'darwin',
    // host: 'localhost',

    // open: true, //配置自动启动浏览器
    proxy:{
		'/baseurl':{
			target:'http://localhost:8888',
			pathRewrite:{'^/baseurl':'/'}
		}
	}
   },
}