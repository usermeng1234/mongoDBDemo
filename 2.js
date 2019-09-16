var user1={
    name:'mengwen',
    age:34,
    hobby:[
        '敲代码','打球','喝茶'
    ],
    pc:{
        brand:'apple',
        price:444444
    }
};

var user2={
    name:'xiaowu',
    age:30,
    hobby:[
        '敲代码','打球','聊天'
    ],
    pc:{
        brand:'IBM',
        price:33333
    }
};

var user3={
    name:'xiaowang',
    age:20,
    hobby:[
        '敲代码'
    ],
};

var db=connect('test')
db.user.insert([user1,user2,user3])
print('插入成功')

//更新操作
// db.user.update({name:'xiaowu'},{$set:{age:90}})修改指定的值
// db.user.update({name:'xiaowu'},{$unset:{hobby:''}})删除key,value值
// db.user.update({name:'xiaowu'},{$set:{age:45}},{upsert:true})有更新，没有插入
// db.user.update({},{$set:{hobby:[]}},{multi:true})给所有的添加属性(统一某一字段)
// db.user.update({name:'xiaowu'},{$push:{hobby:'吃鸡'}})推进属性(不检查重复)

// db.user.update({name:'xiaowu'},{$addToSet:{hobby:'敲代码'}})push检查重复
// var newHobby=['吃鸡','叫醒','学习'];
// db.user.update({name:'xiaowu'},{$addToSet:{hobby:{$each:newHobby}}});

// db.user.update({name:'xiaowu'},{$set:{'hobby.0':'剑圣'}})修改数组下标属性


// 查询
// db.user.find({age:{$gte:20,$lte:30}},{name:true})20<age<30  == db.user.find({age:{$in:[20,30]}},{name:true})20<age<30

// db.user.find(
//     {$or:[                  //$and
//         {age:{$gte:20}},
//         {'pc.brand':'IBM'}
//     ]},
//     {name:true,age:true,_id:false}
//     )

// db.user.find(
//     {hobby:['敲代码']},//查询爱好只包括敲代码
//     {name:true,age:true,_id:false}
//     )

    
// db.user.find(
//     {hobby:'敲代码'},//查询爱好只要有敲代码
//     {name:true,age:true,_id:false}
//     )


// db.user.find(
//     {hobby:{$all:['敲代码','吃鸡']}},//既喜欢敲代码,又喜欢吃鸡的
//     {name:true,age:true,_id:false}
//     )


// db.user.find(
//     {hobby:{$in:['敲代码','吃鸡']}},//只要有敲代码,吃鸡的都可以查询出
//     {name:true,age:true,_id:false}
//     )


// db.user.find(
//     {hobby:{$size:3}},//数组长度
//     {name:true,age:true,_id:false}
//     )


//分页查询
// db.user.find(
//     {},
//     {name:true,age:true,_id:false}
// ).limit(2).skip(0).sort({age:-1})//-1降序，1升序  limit查几条,skip从第几条开始,sort降序升序
