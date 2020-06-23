$(function(){
    $('#msg').text('此為利用JQuery顯示的文字');
});


//在JQuery裡面，$函數是精簡寫法，括號內的參數是選擇器(selector)的值
//用來指定作為JQuery物件被提取出來的HTML元素，像是上面的'#msg' 就是抓取id=msg的HTML元素
jQuery = $;
var 變數 = jQuery ( 選擇器 );
var 變數 = $ ( 選擇器 );