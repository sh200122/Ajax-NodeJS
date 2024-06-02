// 导入所需的模块
const express = require('express'); // 用于创建服务器和处理请求
const axios = require('axios'); // 用于发送HTTP请求
const cors = require('cors'); // 用于处理跨域请求
const app = express(); // 创建一个Express应用
const port = 3000; // 定义服务器监听的端口号

// 使用CORS中间件，允许所有来源的请求
app.use(cors());

// 定义一个GET请求的路由处理器，当访问 /api/data 时触发
app.get('/api/data', (req, res) => {
  // 使用Axios发送一个GET请求到外部API
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      // 请求成功时，将外部API的响应数据中的title作为message返回给客户端
      res.json({ message: response.data.title });
    })
    .catch(error => {
      // 请求失败时，输出错误信息到控制台，并返回500错误码和错误信息给客户端
      console.error('Error fetching external data:', error);
      res.status(500).json({ error: 'Failed to fetch external data' });
    });
});

// 启动服务器，监听指定的端口
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
