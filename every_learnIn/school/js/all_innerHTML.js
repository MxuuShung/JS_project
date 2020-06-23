//el = document.getElementById('main');
//el.textContent = '123123';
//el.textContent = '<h1>123123</h1>';
//不能包標籤   
el = document.getElementById('main');
//注意              "class=blue" 是雙引號而非單引號
el.innerHTML = '<h1 class="blue">12323</h1>';

//可以重複，但不可以乘與會出現NaN
var str = '<h1 class="blue">12323</h1>';
el.innerHTML = str+str;
//innerHTML特性: 會被刪除內容，再去放入內容，所以index的hellllllo會被清出，使用陣列時會非常好用