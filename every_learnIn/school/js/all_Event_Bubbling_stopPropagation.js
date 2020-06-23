//false(事件氣泡 - Event Bubbling) -內 到 外 a -> p -> div -> body ->html...(document)
//就像冒泡一樣，從冒泡的地方，慢慢浮上水面~
//true(事件捕捉 - Event Capturing) - 外 到 內 html -> body -> div -> p -> a 
//就想網漁一樣，從水面上 -> 水 -> 魚群 -> 某隻魚
/*var el = document.querySelector('.box');
el.addEventListener('click',function(){
    alert('it is box.')
    console.log('box');
});
//如果今天想控制body的話呢? 給body class="body"
var el2 = document.querySelector('.body');
el2.addEventListener('click',function(){
    alert('你沒有點到box')
    console.log('你沒有點到box');
});
*/

//此時，就需要function(e)，e這個參數
/*
var el = document.querySelector('.box');
el.addEventListener('click',function(e){
    e.stopPropagation();//阻止氣泡往上，只運作自己，不往外層找，前提是第三個參數是false，或者是不打->默認(false)
    alert('it is box.')
    console.log('box');
});
//如果今天想控制body的話呢? 給body class="body"
var el2 = document.querySelector('.body');
el2.addEventListener('click',function(){
    alert('你沒有點到box')
    console.log('你沒有點到box');
});
*/
//true狀況
/*
var el = document.querySelector('.box');
el.addEventListener('click',function(){
    alert('it is box.')
    console.log('box');
},true);
//如果今天想控制body的話呢? 給body class="body"
var el2 = document.querySelector('.body');
el2.addEventListener('click',function(e){
    e.stopPropagation();//只在這層，而我第三個參數是true，是 捕捉事件(由外往內)，而我只停在最外面那層
    alert('你沒有點到box')
    console.log('你沒有點到box');
},true);
*/
//false 三層
var el0 = document.querySelector('.box2');
el0.addEventListener('click',function(e){
    e.stopPropagation();//最內層
    alert('我是最內層')
    console.log('你我是最內層');
},false);
var el = document.querySelector('.box');
el.addEventListener('click',function(){
    alert('it is box.')
    console.log('box');
},false);
//如果今天想控制body的話呢? 給body class="body"
var el2 = document.querySelector('.body');
el2.addEventListener('click',function(){
    alert('你沒有點到box')
    console.log('你沒有點到box');
},false);