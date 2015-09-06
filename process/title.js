/**
 * Created by VaJoy on 2015/9/4.
 */

console.log(process.title);
// 管理员: E:\Program Files\WebStorm 9.0.1\lib\libpty\win\x86\winpty-agent.exe - node  title
process.title = 'new title!!!';
console.log(process.title); //new title!!!