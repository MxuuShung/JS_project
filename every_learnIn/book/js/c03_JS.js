var msg = 'Sign up to receive our newsletter for 10% off!';
function updateMessage(){
    var el = document.getElementById('message');
    el.textContent = msg;
}
updateMessage();

引數(Argument) 參數(Parameter)
宣告一個函式的關鍵字    並給予名稱後面接()      執行工作的程式區段
function                sayHello()          {}


第一種

函式     名稱()        {執行工作的程式區段}
function sayHello() {
    document.write('Hello !');
}

宣告後可以使用，僅以一行 sayHello() 去呼叫，稱之函式呼叫，可以重複呼叫
呼叫後，會運作15行大括號內的程式{運作我}
sayHello();

第二種

函式     名稱(參數1，參數2) {執行區間}
function getArea(width,height){
    return width * height;
}
參數可以1個、多個，也可以不給參數，如第一種

此時 函式getArea(第一個引數=3,第二個引數=5)，將引數3、5帶入27行的width、height去計算
getArea(3,5);


參數，是函數宣告時使用，