/**
 * 目标：基于 ECMAScript 标准语法，"默认"导入，工具属性和方法使用
 */
// 默认导入
import obj from './utils.js'
console.log(obj);
const sum = obj.arraySum([10, 50, 90])
console.log(sum);