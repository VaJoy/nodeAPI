/**
 * Created by VaJoy on 2015/9/4.
 */
//试着执行 $node --harmony execArgv a b --version
console.log(process.execArgv); //[ '--harmony' ]
process.execArgv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});