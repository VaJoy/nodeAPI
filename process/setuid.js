/**
 * Created by VaJoy on 2015/9/4.
 */
if (process.getuid && process.setuid) {
    console.log('当前 uid: ' + process.getuid());
    try {
        process.setuid(501);
        console.log('新 uid: ' + process.getuid());
    }
    catch (err) {
        console.log('设置 uid 失败: ' + err);
    }
}