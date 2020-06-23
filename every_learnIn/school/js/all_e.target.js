

var el = document.querySelector('.header');


el.addEventListener('click',function(e){
    console.log(e.target);
    console.log(e.target.nodeName);
},false);
//console.log(e)的話，也可以看到target屬性
//e.target.nodeName利用這個方式，去查看點擊到什麼東西(大寫: A UL LI...)，e.nodeName則是undefined!!
//e.target利用這個方式，去查看點擊的位置