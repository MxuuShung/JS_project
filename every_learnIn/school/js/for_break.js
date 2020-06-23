//物件 與 陣列
var farms = [
    {
        farmer: '卡斯伯',
        field: 6,
        chick: 200,
        banana: 5000
    },
    {
        farmer: '查理',
        field: 10,
        chick: 50,
        banana: 1000
    },
    {
        farmer:'約翰',
        field: 66,
        chick:120,
        banana: 3215
    }
]
//目標:找一個農場 買50隻雞
var farmsTotal = frames.length;

for(var i = 0 ; i<farmsTotal;i++){
    console.log(i);
    break;
}
for(var i = 0 ; i<farmsTotal;i++){
    if(farms[i].chick >50){
        console.log(farms[i].farmer+'的小雞足夠');
        farms[i].chick -=50;
        console.log(farms[i].farmer+'的小雞賣出50隻後剩下的數量'+farms[i].chick);
        break;  
    }
}
console.log(farms[0].chick);//確認小雞數量是否真的賣出50隻