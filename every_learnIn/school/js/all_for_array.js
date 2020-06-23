var farms = [
    {
        farmer: '卡斯伯',
        field: 6
    },
    {
        farmer: '查理',
        field: 10
    }
]
var farmsTotal = farms.length;
for(var i=0; i<farmsTotal; i++){
    console.log(farms[i]);
    console.log(farms.length);
}
for(var i=0; i<farmsTotal; i++){
    console.log('第'+(i+1)+'個農場主人是'+farms[i].farmer);

}