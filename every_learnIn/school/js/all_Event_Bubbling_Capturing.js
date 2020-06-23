/** 

var el = document.querySelector('.box');
el.addEventListener('click',function(){
    alert('it is box.')
    console.log('box');
},false);
//如果今天想控制body的話呢? 給body class="body"
var el2 = document.querySelector('.body');
el2.addEventListener('click',function(){
    alert('it is body.')
    console.log('body');
},false);
 * 
*/
//為什麼點擊box，連寫在body的class也會運作呢???

//原來<body>裡面包含了<div class="box"></di>v</body>
//就像寫css時 div > p > a{color:blue;}一樣 a是包含在p與div裡面， 而p也被div包含

//那麼 第三個屬性false又是什麼原因呢?
//false - 從此指定的元素向外搜尋，如上面的a先觸發，在觸發p，在觸發div
//true - 就是由最外面找到指定元素 如document(html標籤)->body->div->p->a
/*
var el = document.querySelector('.box');
el.addEventListener('click',function(){
    alert('it is box.')
    console.log('box');
},true);
//如果今天想控制body的話呢? 給body class="body"
var el2 = document.querySelector('.body');
el2.addEventListener('click',function(){
    alert('it is body.')
    console.log('body');
},true);
*/
//就會先出現it is body的框 再出現 it is box 的框 跟false相反!!
//總結 選擇false當作第三值時，邏輯上較好理解(較為直觀)
//不寫的話，預設是false!!
var el = document.querySelector('.box');
el.addEventListener('click',function(){
    alert('it is box.')
    console.log('box');
});
//如果今天想控制body的話呢? 給body class="body"
var el2 = document.querySelector('.body');
el2.addEventListener('click',function(){
    alert('it is body.')
    console.log('body');
});
//false(事件氣泡 - Event Bubbling) -內 到 外 a -> p -> div -> body ->html...(document)
//就像冒泡一樣，從冒泡的地方，慢慢浮上水面~
//true(事件捕捉 - Event Capturing) - 外 到 內 html -> body -> div -> p -> a 
//就想網漁一樣，從水面上 -> 水 -> 魚群 -> 某隻魚
