/**
 * Created by vajoylan on 2015/8/6.
 */
var path = require('path');


var url1 = path.join('////./a', 'b////c', 'user/', 'vajoy', '..');
var url2 = path.join('a', '../../', 'user/', 'vajoy', '..');
var url3 = path.join('a', '../../', {}, 'vajoy', '..');

console.log('url1:',url1);  // \a\b\c\user
console.log('url2:',url2);  // ..\user
console.log('url3:',url3);  // 存在非路径字符串，故抛出异常

