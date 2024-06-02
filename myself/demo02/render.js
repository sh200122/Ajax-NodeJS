// 定义一个函数，用于通过 Axios 发送 GET 请求
function fetchData() {
  axios.get('http://localhost:3000/api/data')
    .then(response => {
      // 获取到数据后，将数据渲染成表格
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = generateTable(response.data);
    })
    .catch(error => console.error('Error fetching data:', error));
}

// 生成 HTML 表格的函数
function generateTable(data) {
  if (!data || data.length === 0) return '<p>No data available</p>';

  let table = '<table border="1"><tr>';
  // 添加表头
  Object.keys(data[0]).forEach(key => {
    table += `<th>${key}</th>`;
  });
  table += '</tr>';

  // 添加表格数据
  data.forEach(row => {
    table += '<tr>';
    Object.values(row).forEach(value => {
      table += `<td>${value}</td>`;
    });
    table += '</tr>';
  });

  table += '</table>';
  return table;
}

// 为按钮绑定点击事件，触发 fetchData 函数
document.getElementById('fetchDataBtn').addEventListener('click', fetchData);