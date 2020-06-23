//var el = document.querySelector('.titleClass em');
//el.textContent = '123';
//當有兩個相同元素可以選取時，querySelector，會選取第一筆資料，也只能選取第一筆資料
//這時候要用到，querySelectorAll

var el = document.querySelectorAll('.titleClass em');
//console.log(el);//NodeList(2) [em, em] 是陣列
//所以使用querySelectorAll時，要用for迴圈一一抓值
el[0].textContent = '123';
el[1].textContent = '456';
var elLen = el.length;

for (i = 0; i < elLen; i++) {
    el[i].textContent = i+'123';
    console.log(el);
}
//所以 只有一筆 querySelector
//     多筆     querySelectorALL 並用for迴圈寫入值