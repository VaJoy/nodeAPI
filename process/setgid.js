/**
 * Created by VaJoy on 2015/9/4.
 */
if (process.getgid && process.setgid) {
    console.log('当前 gid: ' + process.getgid());
    try {
        process.setgid(501);
        console.log('新 gid: ' + process.getgid());
    }
    catch (err) {
        console.log('设置 gid 失败: ' + err);
    }
}