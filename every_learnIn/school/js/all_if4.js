
var hungry = 3;
//飢餓程度 1-10
function  eat(food){
    console.log('我現在要吃'+food)
}

console.log(hungry);//除錯，確認披薩值
if(hungry <= 3){
    eat('披薩');
}else if(hungry<=7 && hungry>3){
    eat('沙拉');
}else if(hungry == 6){
    eat('餅乾');
}else{
    console.log('我超飽不吃了')
}
