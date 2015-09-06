/**
 * Created by VaJoy on 2015/9/4.
 */
var newmask = 77,
oldmask = process.umask(newmask);
console.log('原掩码: ' + oldmask.toString(8) + '\n' +
'新掩码: ' + newmask.toString(8));
//原掩码: 0
//新掩码: 115