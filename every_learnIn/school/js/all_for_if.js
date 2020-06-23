var farms = [
    {
        farmer: '卡斯伯',
        field: 6,
        chick: 200
    },
    {
        farmer: '查理',
        field: 10,
        chick: 50
    },
    {
        farmer:'約翰',
        field: 66,
        chick:120
    }
]
//老出哪些的農場小雞路量超過 100 隻以上

var farmsTotal=farms.length;

for(var i=0; i<farmsTotal;i++){
    console.log(farms[i].chick);
    if(farms[i].chick>100){
        console.log(farms[i].farmer + '的小雞超過100隻以上')
    }
}