/**
 * Created by VaJoy on 2015/9/4.
 */
//试着执行 $node --harmony argv a b
console.log(process.argv); //[ 'node', 'E:\\github\\nodeAPI\\process\\argv', 'a', 'b' ]
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});