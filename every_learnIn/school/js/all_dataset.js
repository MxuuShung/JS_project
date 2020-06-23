//document.querySelector('.list li').dataset;
//DOMStringMap {num: "0", dog: "3"} 物件 
/*

var a =document.querySelector('.list li').dataset;
var b =document.querySelector('list li').dataset.dog;
console.log(a);//DOMStringMap {num: "0", dog: "3"}
console.log(typeof(a));//物件 object
console.log(b);//3 
console.log(typeof(b));//string

dog: "3"
num: "0"
__proto__: DOMStringMap
*/

function checkList(e){
    var num = e.target.dataset.num;
    var dog = e.target.dataset.dog;
    console.log("農夫編號是"+num);
    console.log("有"+dog+"隻狗");
}


var list =document.querySelector('.list li');
list.addEventListener('click',checkList,false);


var farmer = list.dataset.dog;
console.log(farmer);//3
console.log(typeof(farmer));//string
//我認為這個dataset用於傳入資料時的確認
//舉例 自定一個dataset-dog，將farmer以JSON，陣列形式導入，並抓取farmer[i].dog，存入dataset-dog
//老師是說撈出資料，新增修改???備註一下