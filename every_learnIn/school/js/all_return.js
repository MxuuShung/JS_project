//計算漢堡的總價
function getHamPrice(hum){
    var getHamPrice = 50;
    var total = getHamPrice * hum;
    return total;//return 回傳 利用函式幫我們計算 漢堡數量 * 價格 最後回傳計算結果，而且可重複利用，不同值有不同結果
}
var tom = getHamPrice(10);
console.log(tom);