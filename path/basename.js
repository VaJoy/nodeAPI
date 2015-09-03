/**
 * Created by vajoylan on 2015/8/6.
 */
var path = require('path');


var url1 = path.basename('/foo/bar/baz/asdf/a.txt');
var url2 = path.basename('/foo/bar/baz/asdf/a.txt','.txt');
var url3 = path.basename('/foo/bar/baz/asdf/');
var url4 = path.basename('C:/vajoy/test/aaa');

console.log('url1:',url1);  // a.txt
console.log('url2:',url2);  // a
console.log('url3:',url3);  // asdf
console.log('url4:',url4);  // aaa