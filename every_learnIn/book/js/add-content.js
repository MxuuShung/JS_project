var today = new Date();
var hourNow = today.getHours();
var greeting;

//上面為敘述句 statement
//下面{}包裹則是，程式區塊 code block
//使用if(我來決定要不要運作A){A..我是被決定的那個QQ}去判別

if (hourNow > 18){
    greeting = 'Good evening!';
}else if(hourNow > 12){
    greeting = 'Good afternoon!';
}else if(hourNow >0){
    greeting = 'Good morning';
}else{
    greeting = 'Welcome';
}
//document = 物件 JS是有大小寫之分!!
//. 成員運算子 用於連接方法或特性，意思近於 '的'  AAA.bbb   .之前的是母體(AAA)      .之後的是子體(bbb)  像是 css.h1
//.write(...) 代表方法，
//(...) ...代表參數
document.write('<h3>' + greeting + '</h3><br/>' + '現在時間：' + today +'<br/>' +' <p> Have fun,everybody;</p>' );

//但須注意，瀏覽器遇見script元件時，會停止載入程式碼，並檢查有無其他工作要做，直到完成script元件!
//所以通常都將js放到 </body>附近，使js不影響其他程序運作，最後再由js元件運作(運染、修改......)
                //  變數   等於 變數名稱
//在JavaScript裡面， var    =  ccc;意思是變數
//上面建立完成之後，才可以做此動作稱之賦值，如果沒給值只有var=ccc的話，是屬於未定義的值
            //變數ccc 被賦予 值             將3這個值 給 變數ccc
                    ccc = 3;

                    