var modify={
    findAndModify:'user',
    query:{name:'xiaowu'},
    update:{$set:{age:34}},
    new:false
}
var result=db.runCommand(modify);
printjson(result)

//应答式的
// {
//     "lastErrorObject" : {
//             "n" : 1,
//             "updatedExisting" : true
//     },
//     "value" : {
//             "_id" : ObjectId("5d7f7e8da3f392280294f96f"),
//             "name" : "xiaowu",
//             "age" : 34,
//             "pc" : {
//                     "brand" : "IBM",
//                     "price" : 33333
//             },
//             "hobby" : [
//                     "剑圣",
//                     "吃鸡",
//                     "吃鸡",
//                     "叫醒",
//                     "学习"
//             ],
//             "hooby" : [
//                     "吃鸡"
//             ]
//     },
//     "ok" : 1
// }