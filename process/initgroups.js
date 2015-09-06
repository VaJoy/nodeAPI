/**
 * Created by VaJoy on 2015/9/4.
 */
if(process.initgroups){
    console.log(process.getgroups());         // [ 0 ]
    process.initgroups('bnoordhuis', 1000);   // switch user
    console.log(process.getgroups());         // [ 27, 30, 46, 1000, 0 ]
    process.setgid(1000);                     // drop root gid
    console.log(process.getgroups());         // [ 27, 30, 46, 1000 ]
}
