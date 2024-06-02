const mysql = require('mysql2');

// 创建与 MySQL 数据库的连接池
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'ch131920',
  database: 'person',
});
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

