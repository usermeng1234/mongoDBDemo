var userName='mengwenxing';
var time=Date.parse(new Date());
var data={
    'username':userName,
    'register':time
}
var db=connect('test');
db.user.insert(data);
print("插入成功")