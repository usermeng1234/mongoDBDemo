var startTime=(new Date()).getTime();
var db=connect('tel');
var result=db.tel.find({tel:'113885269403'});
result.forEach(res =>printjson(res));

var runTime=new Date().getTime()-startTime;
print(runTime+'ms')