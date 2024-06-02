/**
 * 目标：基于 http 模块创建 Web 服务程序
 *  1.1 加载 http 模块，创建 Web 服务对象
 *  1.2 监听 request 请求事件，设置响应头和响应体
 *  1.3 配置端口号并启动 Web 服务
 *  1.4 浏览器请求（http://localhost:3000）测试
 */
// 1.1 加载 http 模块，创建 Web 服务对象
const { log } = require('console')
const http = require('http')
const server = http.createServer()
// 1.2 监听 request 请求事件，设置响应头和响应体
server.on('request', (req, res) => {
  // 设置响应头-那日容类型-普通文本以及中文编码格式
  res.setHeader('Content-Type', 'text/plain;charset=utf-8')
  // 设置响应体内容，结束本次氢气球与响应
  res.end('欢迎使用nodejs和http模块创建的web服务')
})
// 1.3 配置端口号并启动 Web 服务
server.listen(3000, () => {
  console.log('web服务器启动成功');
})