/**
 * Created by VaJoy on 2015/9/4.
 */
process.on('SIGINT', function() {
    console.log('收到 SIGINT 信号。');
});

console.log('试着按下 ctrl + C');
setTimeout(function() {
    console.log('end');
}, 50000);