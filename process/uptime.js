/**
 * Created by VaJoy on 2015/9/4.
 */

console.log('初始时间是：' + process.uptime());

var arr = new Array(10000000);
var s = arr.join(',');
console.log('处理数组后的时间是：' + process.uptime());

//初始时间是：0.436
//处理数组后的时间是：1.068