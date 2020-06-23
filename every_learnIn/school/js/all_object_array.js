var farm = ['bbb',2,3]
console.log(farm[0]);
var farms = [
    {
        farmer:'卡',
        dogs:['aa','bb'],
        chick:15,
        cornField:[8,5,6],
        broccoliField:[6,6,6,6],
        scarecrow:9
    },
    {
        farmer: '查理',
        dogs:['pp'],
        chick:30,
        cornField:[18,12],
        broccoliField:[8,8,8],
        scarecrow:6
    }
]
console.log(farms[0]);//farms[0] 顯示 object{farmer:'卡';}
console.log(farms[0].farmer);//farms[0].farmers 顯示 '卡'
console.log(farms[1].farmer)

//問 第二農場狗狗名子

console.log(farms[1].dogs);//["pp"]
console.log(farms[1].dogs[0]);"pp"