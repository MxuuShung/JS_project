//object 物件 對象
//例子
var farm = {
    //屬性(property) : 值(value)
    farmer: '卡斯柏',
    dogs: ['aa','bb'],
    chick: 15,
    cornField:[6,6,6,6],
    scarecrow: 9
}

//變數 farmer 是一個空物件
var farmer = {};

//類似css寫法，但是object物件是, css結尾是;
/*
btn{
    color:white;
    width:50px;
    background-color:bleak;
}

*/
var farmer = {
    farmer: '卡斯柏',
};
console.log(farm);
//新增 
//變數farmer的屬性(chick) 賦值 15; 
farmer.chick = 15;
farmer.dogs = ['wop','cow'];
console.log(farm.chick);
console.log('我農場裡的第一隻狗叫' + farmer.dogs[0]);
//或者
var firstDog = farmer.dogs[0];
console.log('我農場裡的第一隻狗叫' +firstDog);