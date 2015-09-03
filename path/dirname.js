/**
 * Created by vajoylan on 2015/8/6.
 */
var path = require('path');


var url1 = path.dirname('/foo/bar/baz/asdf/a.txt');
var url2 = path.dirname('/foo/bar/baz/asdf/');
var url3 = path.dirname('C:/vajoy/test/aaa');

console.log('url1:',url1);  // /foo/bar/baz/asdf
console.log('url2:',url2);  // /foo/bar/baz
console.log('url3:',url3);  // C:/vajoy/test