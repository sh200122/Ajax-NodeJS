/**
 * 目标：导入 utils 软件包，使用里面封装的工具函数
 */
const obj = require('./utils')
// console.log(obj);
const sum = obj.getArraySum([1, 2, 3, 4, 5, 6])
console.log(sum);