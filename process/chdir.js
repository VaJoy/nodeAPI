/**
 * Created by VaJoy on 2015/9/4.
 */
var path = require('path');

console.log('当前目录：' + process.cwd()); //当前目录：E:\github\nodeAPI\process
try {
    process.chdir(path.resolve('.','tmp'));
    console.log('新目录：' + process.cwd()); //新目录：E:\github\nodeAPI\process\tmp
}
catch (err) {
    console.log('chdir: ' + err);
}