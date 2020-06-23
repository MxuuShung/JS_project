
var light = 'blue';
//switch是確定是那些狀態時，使用
function lightFun(str){
    console.log('目前是'+str+'警戒');
}
switch(light){
    default://放在上方也可以，會先看過全部在判斷
        alert('沒有任何資料');
        break;
    case 'red':
        alert('紅色警戒');
        alert('快跑!')//function(){...}
        break;
    case 'blue':
        lightFun(light);
        break;

}