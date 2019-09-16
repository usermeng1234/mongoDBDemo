
function getTel(){
    var prefixArr=['130','131','132','133','134','135','136','137','138','139'];
    var prefix=prefixArr[parseInt(Math.random()*10)];
    for(var i=0;i<8;i++){
       tel= prefix+=Math.floor(Math.random()*10);
    }
    return tel;
}

var startTime=(new Date()).getTime();
var db=connect('test');
var tempInfo=[];
for(var i=0;i<1000000;i++){
    tempInfo.push({
        loginTime:new Date(),
        tel:getTel()
    });
}

db.tel.insert(tempInfo);
var runTime=new Date().getTime()-startTime;
print(runTime+'ms');