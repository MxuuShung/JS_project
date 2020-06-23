var elOn = document.querySelector('.btnOn');
elOn.onclick = function(){
    alert('OH~ firstBlood');
}
elOn.onclick = function(){
    alert('OH~ ');
}
//當今天綁定兩個onclick事件時，永遠只會觸發最後一個事件!! 覆蓋前面事件!
//所以才會發明 addElementListener

var elAd = document.querySelector('.btnAdd');
elAd.addEventListener('click',function(){
    alert('YAYA~ it is me');
});
elAd.addEventListener('click',function(){
    alert('YAYA~ it is me,too');
});
//綁定的兩個事件，皆可以觸發! 不會被覆蓋!! 太神奇了!!! 
//總結:
/*
<input onclcik="function(){alert('ohoh，我是最古老的寫法，一切寫法之本~~')}" type="button" class="btnAdd" value="add點擊">
//但是總有hacker想做壞事，XSS注入去修改JS內容，所以不安全!
*/

/*
elOn.onclick = function(){
    alert('OH~ ');
}
//變成這樣子，就安全多了，也不會有XSS攻擊的擔憂，但是事件只能選擇最後一個阿，萬一按下去，我想綁定多個事件怎辦
於是又進化了
*/
/** 事件監聽~ 我監聽到了，就運作嘿嘿嘿~ 嘿嘿嘿~
 * var elAd = document.querySelector('.btnAdd');
 *      elAd.addEventListener('click',function(){
 *      alert('YAYA~ it is me');
 * });
 * 你想綁定幾個事件都可以，我扛的住，最新進化版，在進化估計是簡化程式碼，更多功用了~
 */

 /**那位啥最後會寫false呢? 下集待續 */