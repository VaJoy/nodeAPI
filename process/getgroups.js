/**
 * Created by VaJoy on 2015/9/4.
 */
if (process.getgroups) {
    console.log('supplementary group ID: \n' );
    process.getgroups().forEach(function(g){
        console.log(g)
    })
}