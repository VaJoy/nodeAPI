/**
 * Created by vajoylan on 2015/8/6.
 */
var path = require('path');


var url1 = path.resolve('.', 'testFiles/..', 'trdLayer');
var url2 = path.resolve('..', 'testFiles', 'a.txt');
var url3 = path.resolve('D:/vajoy', 'abc', 'D:/a');
var url4 = path.resolve('abc', 'vajoy', 'ok.gif');
var url5 = path.resolve('abc', '/vajoy', '..', 'a/../subfile'); //'abc'参数将被忽略，源路径改从'E:/vajoy'开始

console.log('url1:',url1);  // E:\github\nodeAPI\path\trdLayer
console.log('url2:',url2);  // E:\github\nodeAPI\testFiles\a.txt
console.log('url3:',url3);  // D:\a
console.log('url4:',url4);  // E:\github\nodeAPI\path\abc\vajoy\ok.gif
console.log('url5:',url5);  // E:\subfile