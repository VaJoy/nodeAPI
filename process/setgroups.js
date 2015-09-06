/**
 * Created by VaJoy on 2015/9/4.
 */
if(process.setgroups){
    gid = [ 27, 30, 46, 1000 ];
    process.setgroups(gid);
    console.log(process.getgroups());
}