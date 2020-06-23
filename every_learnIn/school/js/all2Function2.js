//函式帶參數
//函式    名稱(參數){執行內容}
function count(oneNum){
    var total = oneNum * 10;
    console.log('總數等於:' + total);
}
count(10);//運用函式count(參數=10)



//全域變數與區域變數的區分
//命名在外面時，total值是undefined;是全域變數
var total;
console.log(total);
function count2(oneNum,twoNum,thrNum){
    //var total 若在這裡宣告，則是{}內的區域變數，離開{}後，就不存在
    var total = oneNum + twoNum + thrNum;
    console.log("總價格:" + total + "元");
}
//若total是全域變數，也就是說宣告在{}外時，在某function裡面
//賦予total值時，此時的值並能帶出{}外，但是但是
//若你沒有啟動/呼叫某function時，則此時值依然是undefined
//因為你沒有啟動/呼叫某function，裡面的程式當然沒運作
//程式沒運作怎麼會有值勒~ 要記得count2(80);要帶數字進去呦
//console.log(total);就會有值了
//那在外面，裡面都宣告一個變數total，則是undefined;