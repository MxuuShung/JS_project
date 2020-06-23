var el = document.querySelector('.btn');
//addEventListener() 括號內需要帶入三個參數 選擇事件,帶入匿名function,false
//稱之 監聽!
//第一個 用哪一個事件語法 ex click
//第二個 要做什麼是情
//第三個 true 跟 false
el.addEventListener('click',function(e){
    alert('HaHa!');
},false);

//那為什麼要這樣做呢? 跟onclick有什麼差異，請看下一章addElementListener_event!!