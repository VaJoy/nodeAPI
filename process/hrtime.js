/**
 * Created by VaJoy on 2015/9/4.
 */
var t1 = process.hrtime();

var arr = new Array(40000000),
    s = arr.join(',');

var t2 = process.hrtime();
console.log('处理数组共花费了%d秒，详细为%d纳秒', (t2[0] - t1[0]), (t2[1] - t1[1]));

//处理数组共花费了2秒，详细为227005133纳秒