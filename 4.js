//循环
var db=connect('test');
var userList=db.user.find();
userList.forEach(function (user) {
    //写判断语句
    printjson(user);
});