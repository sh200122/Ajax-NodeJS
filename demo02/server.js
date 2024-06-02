const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// 允许跨域请求
app.use(cors());

// 解析 JSON 请求体
app.use(express.json());

// 创建与 MySQL 数据库的连接池
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'ch131920',
  database: 'person',
});

// 定义一个 GET 路由，获取数据库中的数据
app.get('/api/data', (req, res) => {
  // 查询数据库中的所有学生数据
  pool.query('SELECT * FROM student', (err, results) => {
    if (err) {
      console.error('查询失败: ' + err.stack);
      res.status(500).json({ error: '查询数据库失败' });
      return;
    }
    // 将查询结果以 JSON 格式返回
    res.json(results);
  });
});

// 启动服务器并监听指定端口
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
