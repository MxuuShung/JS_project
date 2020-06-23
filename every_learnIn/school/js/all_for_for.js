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
//如何加總所有農場的 香蕉數量?
var farmsTotal = farms.length;
var bananaTotal = 0;
for(i=0; i<farmsTotal; i++){
    console.log(farms[i].banana);
    bananaTotal += farms[i].banana;
}
console.log('今年村子的香蕉採收量:'+bananaTotal);